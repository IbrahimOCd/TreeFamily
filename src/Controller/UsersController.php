<?php
declare(strict_types=1);

/**
 * Users Controller
 */
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Event\EventInterface;
use Cake\Http\Exception\NotFoundException;
use Cake\ORM\TableRegistry;

/**
 * Users Controller
 *
 * This controller manages users.
 */
class UsersController extends AppController
{
    /**
     * Initialize method.
     *
     * @return void
     */
    public function initialize(): void
    {
        parent::initialize();
        //$this->loadComponent('Cookie');
    }

    /**
     * BeforeFilter method.
     *
     * @param \Cake\Event\EventInterface $event Cake Event object.
     * @return \Cake\Http\Response|null
     */
    public function beforeFilter(EventInterface $event)
    {
        parent::beforeFilter($event);
        $this->Auth->allow(['logout', 'reset', 'changePassword', 'install']);
        if (Configure::read('enableRegistration')) {
            $this->Auth->allow(['register']);
        }

        return null;
    }

    /**
     * IsAuthorized method.
     *
     * @param array $user Authenticated user.
     * @return bool
     */
    public function isAuthorized($user)
    {
        if (in_array($this->getRequest()->getParam('action'), ['properties'])) {
            return $this->Auth->user('id');
        }

        return parent::isAuthorized($user);
    }

    /**
     * Login method.
     *
     * This method will display login form
     *
     * @return mixed
     */
    public function login()
    {
        if ($this->Auth->user('id')) {
            $this->redirect($this->Auth->redirectUrl());
        }

        $user = $this->Auth->identify();
        if ($user) {
            $this->Auth->setUser($user);

            if ($this->Auth->authenticationProvider()->needsPasswordRehash()) {
                /** @var \App\Model\Entity\Profile $user */
                $user = TableRegistry::get('Profiles')->get($this->Auth->user('id'));
                $user->p = $this->request->getData('p');
                TableRegistry::get('Profiles')->save($user);
            }

            // set cookie
            if (!empty($this->getRequest()->getData('remember_me'))) {
                /** @var \App\Auth\CookieAuthenticate $CookieAuth */
                $CookieAuth = $this->Auth->getAuthenticate('Cookie');
                if (!empty($CookieAuth)) {
                    $this->response = $CookieAuth->createCookie($this->getRequest()->getData());
                }
            }
        } else {
            if ($this->getRequest()->is('post') || env('PHP_AUTH_USER')) {
                $this->Flash->error(__('Invalid username or password, try again'));
            }
        }

        if ($this->Auth->user('id')) {
            $redirect = $this->Auth->redirectUrl();

            return $this->response->withLocation($redirect);
        }
    }

    /**
     * Logout method
     *
     * @return mixed
     */
    public function logout()
    {
        /** @var \App\Auth\CookieAuthenticate $CookieAuth */
        $CookieAuth = $this->Auth->getAuthenticate('Cookie');
        if (!empty($CookieAuth)) {
            $this->response = $CookieAuth->deleteCookie();
        }

        return $this->response->withLocation($this->Auth->logout());
    }

    /**
     * Reset method
     *
     * @return void
     */
    public function reset()
    {
        if ($this->Auth->user()) {
            $redirect = $this->Auth->redirectUrl();

            $this->redirect($redirect);
        }

        if ($this->getRequest()->is('post')) {
            /** @var \App\Model\Table\ProfilesTable $ProfilesTable */
            $ProfilesTable = TableRegistry::get('Profiles');
            /** @var \App\Model\Entity\Profile $user */
            $user = $ProfilesTable->find()
                ->select()
                ->where(['e' => $this->getRequest()->getData('email')])
                ->first();

            if ($user) {
                $ProfilesTable->sendResetEmail($user);
                $this->Flash->success(__('An email with password reset instructions has been sent.'));
            } else {
                $this->Flash->error(__('No user with specified email has been found.'));
            }
        }
    }

    /**
     * Change users password
     *
     * @param string $resetKey Auto generated reset key.
     * @return void
     */
    public function changePassword($resetKey = null)
    {
        if (!$resetKey) {
            throw new NotFoundException(__('Reset key does not exist.'));
        }

        /** @var \App\Model\Table\ProfilesTable $ProfilesTable */
        $ProfilesTable = TableRegistry::get('Profiles');
        $user = $ProfilesTable->find()->select()->where(['rst' => $resetKey])->first();

        if (empty($user)) {
            throw new NotFoundException(__('User does not exist.'));
        }

        if ($this->getRequest()->is(['patch', 'post', 'put'])) {
            $ProfilesTable->patchEntity($user, $this->getRequest()->getData(), ['validate' => 'resetPassword']);

            if (!$user->getErrors() && $ProfilesTable->save($user)) {
                $this->Flash->success(__('Password has been changed.'));
                $this->redirect('/');
            } else {
                $this->Flash->error(__('Please verify that the information is correct.'));
            }
        } else {
            $user->set('p', null);
        }

        $this->set(compact('user'));
    }

    /**
     * Install first user
     *
     * @return void
     */
    public function install()
    {
        /** @var \App\Model\Table\ProfilesTable $ProfilesTable */
        $ProfilesTable = TableRegistry::get('Profiles');

        $userCount = $ProfilesTable->find()->count();
        if ($userCount > 0) {
            $this->redirect('/');
        }

        $user = $ProfilesTable->newEmptyEntity();
        if ($this->getRequest()->is(['patch', 'post', 'put'])) {
            $ProfilesTable->patchEntity($user, $this->getRequest()->getData(), ['validate' => 'install']);

            if (!$user->getErrors() && $ProfilesTable->save($user)) {
                $this->Flash->success(__('User has been added.'));
                $this->redirect('/');
            } else {
                $this->Flash->error(__('Please verify that the information is correct.'));
            }
        } else {
            $user->set('p', null);
        }

        $this->set(compact('user'));
    }
}

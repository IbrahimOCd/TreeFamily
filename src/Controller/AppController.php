<?php
declare(strict_types=1);

/**
 * Famiree(tm) : A simple family tree
 * Copyright (c) Malamalca
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Malamalca
 * @link      https://github.com/malamalca/famiree Famiree(tm) Project
 * @since     3.0.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use App\Lib\AuthUser;
use Cake\Controller\Component\AuthComponent;
use Cake\Controller\Controller;
use Cake\Event\EventInterface;

/**
 * Application Controller
 */
class AppController extends Controller
{
    public $currentUser = null;

    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('Security');`
     *
     * @return void
     */
    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('RequestHandler', [
            'enableBeforeRedirect' => false,
        ]);
        $this->loadComponent('Flash');
        $this->loadComponent('FormProtection');

        $this->loadComponent('Auth', [
            'authorize' => ['Controller'],
            'loginAction' => ['controller' => 'Users', 'action' => 'login'],

            'authenticate' => [
                AuthComponent::ALL => [
                    'userModel' => 'Profiles',
                    'fields' => ['username' => 'u', 'password' => 'p'],
                    'passwordHasher' => [
                        'className' => 'Fallback',
                        'hashers' => [
                            'Default',
                            'Weak' => ['hashType' => 'sha1'],
                        ],
                    ],
                ],
                'Cookie',
                'Form',
            ],
            'loginRedirect' => '/',
        ]);

        /*
         * Enable the following component for recommended CakePHP security settings.
         * see https://book.cakephp.org/3.0/en/controllers/components/security.html
         */
        //$this->loadComponent('Security');

        // do not display auth messages when there is no user
        if (!$this->Auth->user()) {
            $this->Auth->setConfig('authError', false);
        }

        $this->currentUser = new AuthUser(isset($this->Auth) ? $this->Auth->user() : []);
        $this->viewBuilder()->setOptions(['currentUser' => $this->currentUser]);
    }

    /**
     * isAuthorized hook method.
     *
     * @param array $user Logged in user.
     * @return bool
     */
    public function isAuthorized($user)
    {
        return false;
    }

    /**
     * Before render callback.
     *
     * @param \Cake\Event\EventInterface $event The beforeRender event.
     * @return null
     */
    public function beforeRender(EventInterface $event)
    {
        $builder = $this->viewBuilder()
            ->addHelper('Famiree')
            ->addHelper('AssetCompress.AssetCompress');

        return null;
    }
}

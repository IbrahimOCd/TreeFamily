<?php
declare(strict_types=1);

namespace App\Controller;

use Cake\Core\Configure;
use Cake\Event\EventInterface;
use Cake\Http\Exception\NotFoundException;
use Cake\ORM\TableRegistry;
use Cake\Utility\Hash;

/**
 * Profiles Controller
 *
 * @property \App\Model\Table\ProfilesTable $Profiles
 * @method \App\Model\Entity\Profile[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ProfilesController extends AppController
{
    /**
     * beforeFilter method
     *
     * @param \Cake\Event\EventInterface $event Event object
     * @return \Cake\Http\Response|null
     */
    public function beforeFilter(EventInterface $event)
    {
        if (!$this->currentUser->exists()) {
            $userCount = $this->Profiles->find()->count();
            if ($userCount == 0) {
                $this->redirect(['controller' => 'Users', 'action' => 'install']);
            }
        }

        return null;
    }

    /**
     * isAuthorized hook method.
     *
     * @param array $user Logged in user.
     * @return bool
     */
    public function isAuthorized($user)
    {
        return true;
    }

    /**
     * Dashboard method
     *
     * @return \Cake\Http\Response|void
     */
    public function dashboard()
    {
        $profiles = $this->paginate($this->Profiles);
        $counts = $this->Profiles->countGenders();
        $posts = TableRegistry::get('Posts')->find()
            ->select()
            ->contain(['Profiles', 'Creators'])
            ->order(['Posts.created DESC'])
            ->limit(5)
            ->all();
        $logs = TableRegistry::get('Logs')->find()
            ->select()
            ->contain(['Profiles', 'Imgnotes', 'Attachments', 'Posts', 'Users'])
            ->order(['Logs.created DESC'])
            ->limit(10)
            ->all();

        $dates = $this->Profiles->withBirthdays();

        $this->set(compact('profiles', 'counts', 'posts', 'logs', 'dates'));
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $criterio = $this->getRequest()->getQuery('criterio');
        $this->paginate = ['limit' => 10, 'finder' => ['search' => ['criterio' => $criterio]]];

        $profiles = $this->paginate($this->Profiles);

        $this->set(compact('profiles', 'criterio'));
    }

    /**
     * Main tree function
     *
     * @return void
     */
    public function tree()
    {
        $this->viewBuilder()->enableAutoLayout(false);

        $current_profile = $this->getRequest()->getParam('pass.0', $this->currentUser->get('id'));
        if (empty($current_profile)) {
            throw new NotFoundException(__('Invalid user.'));
        }

        $depth = (int)$this->request->getQuery('depth', 100);
        if ($depth < 0) {
            $depth = 0;
        }
        $tree = $this->Profiles->tree($current_profile, $depth);
        $this->set(compact('tree', 'current_profile'));
    }

    /**
     * View method
     *
     * @param string|null $id Profile id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        if (empty($id)) {
            $id = $this->currentUser->get('id');
        }

        $profile = $this->Profiles->get($id, ['contain' => ['Creators']]);
        $family = $this->Profiles->family($id);

        /** @var \App\Model\Table\AttachmentsTable $AttachmentsTable */
        $AttachmentsTable = TableRegistry::get('Attachments');
        $attachments = $AttachmentsTable->fetchForProfile($id);

        /** @var \App\Model\Table\PostsTable $PostsTable */
        $PostsTable = TableRegistry::get('Posts');
        $posts = $PostsTable->fetchForProfile($id);

        $this->set(compact('profile', 'family', 'posts', 'attachments'));
    }

    /**
     * Add method
     *
     * @param string $relationship Relationship option.
     * @param int $profileId Profile id.
     * @return \Cake\Http\Response|void
     */
    public function add($relationship, $profileId = null)
    {
        $baseProfile = $this->Profiles->get($profileId);

        $baseProfileKind = 'p';
        switch ($relationship) {
            case 'child':
            case 'spouse':
                $baseProfileKind = 'p';
                $marriages = $this->Profiles->family($profileId, 'marriages');
                $this->set(compact('marriages'));
                break;
            case 'parent':
                $baseProfileKind = 'c'; // adding a parent so base profile is child
                $family = $this->Profiles->family($profileId, ['parents', 'siblings']);
                if (isset($family['parents']) && count($family['parents']) == 2) {
                    $this->Flash->error(__('The profile already has two parents.'));

                    return $this->redirect($this->getRequest()->referer());
                }
                $this->set(compact('family'));
                break;
            case 'sibling':
                $baseProfileKind = 'c';
                $siblings = $this->Profiles->family($profileId, 'children');
                $this->set(compact('siblings'));
                break;
        }

        $profile = $this->Profiles->newEntity([], ['associated' => ['Units']]);
        $profile->l = true;

        if ($this->getRequest()->is(['patch', 'post', 'put'])) {
            $profile = $this->Profiles->patchEntity(
                $profile,
                $this->getRequest()->getData(),
                ['associated' => ['Units']]
            );

            if ($this->Profiles->save($profile)) {
                // create new family with base profile in neccessary
                if (empty($profile->units[0]->union_id)) {
                    /** @var \App\Model\Entity\Unit $profileUnit */
                    $profileUnit = $profile->units[0];

                    /** @var \App\Model\Entity\Unit $baseUnit */
                    $baseUnit = TableRegistry::get('Units')->newEntity(
                        ['profile_id' => $baseProfile->id, 'kind' => $baseProfileKind]
                    );

                    /** @var \App\Model\Entity\Union $union */
                    $union = TableRegistry::get('Unions')->newEmptyEntity();

                    $union->units = [$profileUnit, $baseUnit];
                    $union = TableRegistry::get('Unions')->save($union);
                }

                $this->Flash->success(__('The profile has been saved.'));

                return $this->redirect(['action' => 'view', $profile->id]);
            }
            $this->Flash->error(__('The profile could not be saved. Please, try again.'));
        }

        $this->set(compact('relationship', 'baseProfile', 'profile'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Profile id.
     * @return \Cake\Http\Response|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $profile = $this->Profiles->get($id, ['contain' => ['Marriages' => ['Profiles']]]);
        if ($this->getRequest()->is(['patch', 'post', 'put'])) {
            $profile = $this->Profiles->patchEntity(
                $profile,
                $this->getRequest()->getData(),
                ['associated' => ['Marriages']]
            );
            if ($this->Profiles->save($profile)) {
                $this->Flash->success(__('The profile has been saved.'));

                return $this->redirect(['action' => 'view', $profile->id]);
            }
            $this->Flash->error(__('The profile could not be saved. Please, try again.'));
        }
        $this->set(compact('profile'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Profile id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->getRequest()->allowMethod(['get', 'post', 'delete']);
        $profile = $this->Profiles->get($id);
        if ($this->Profiles->delete($profile)) {
            $this->Flash->success(__('The profile has been deleted.'));
        } else {
            $this->Flash->error(__('The profile could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'tree']);
    }

    /**
     * Change avatar
     *
     * @param int $id Profile id
     * @param string $attachmentId Attachment id to be set as new avatar (optional)
     * @return \Cake\Http\Response|void
     */
    public function editAvatar($id = null, $attachmentId = null)
    {
        $profile = $this->Profiles->get($id);
        /** @var \App\Model\Table\AttachmentsTable $AttachmentsTable */
        $AttachmentsTable = TableRegistry::get('Attachments');
        $attachments = $AttachmentsTable->fetchForProfile($id);

        if (!empty($attachmentId)) {
            if ($attachmentId == 'remove') {
                $profile->ta = null;
            } else {
                $attachment = $AttachmentsTable->get($attachmentId);
                $profile->ta = $attachment->id;
            }

            if ($this->Profiles->save($profile)) {
                $this->Flash->success(__('Profile\'s avatar has been successfully saved.'));
            } else {
                $this->Flash->error(__('Profile\'s avatar could not be changed.'));
            }

            return $this->redirect(['controller' => 'Profiles', 'action' => 'view', $id]);
        }

        $this->set(compact('profile', 'attachments'));
    }

    /**
     * Reorder children function
     *
     * @param int $id Contact id
     * @return void
     */
    public function reorderChildren($id = null)
    {
        $profile = $this->Profiles->get($id);
        $marriages = $this->Profiles->family($id, 'marriages');

        if ($this->getRequest()->is(['patch', 'post', 'put'])) {
            $unitIds = Hash::extract($this->getRequest()->getData('units', []), '{n}.id');
            if (count($unitIds) > 0) {
                $unitsTable = TableRegistry::get('Units');

                /** @var \Cake\ORM\ResultSet<\Cake\Datasource\EntityInterface> $units */
                $units = $unitsTable->find()
                    ->select(['id', 'sort_order'])
                    ->where(['id IN' => $unitIds])
                    ->all();

                $unitsTable->patchEntities($units, $this->getRequest()->getData('units'));
                $result = $unitsTable->saveMany($units);
            }

            $this->redirect(['action' => 'view', $id]);
        }

        $this->set('parent_id', $id);
        $this->set(compact('profile', 'marriages'));
    }

    /**
     * Autocomplete method
     *
     * @return \Cake\Http\Response|void
     */
    public function autocomplete()
    {
        $term = $this->getRequest()->getQuery('term');
        if ((Configure::read('debug') || $this->getRequest()->is(['ajax', 'get'])) && $term) {
            $ret = [];

            // fire autocomplete with at least 2 characters
            if (strlen($term) > 1) {
                $profiles = $this->Profiles->find()
                    ->select(['id', 'd_n'])
                    ->where(['d_n LIKE' => '%' . $term . '%'])
                    ->limit(50)
                    ->all();

                foreach ($profiles as $p) {
                    $ret[] = ['label' => $p->d_n, 'value' => $p->id];
                    //$ret .= $p->id . '|' . h($p->d_n) . chr(10);
                }
            }
            $this->response = $this->response->withStringBody(json_encode($ret));

            return $this->response;
        } else {
            throw new NotFoundException(__('Invalid ajax call.'));
        }
    }
}

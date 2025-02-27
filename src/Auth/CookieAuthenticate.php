<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @since         2.0.0
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Auth;

use Cake\Auth\BaseAuthenticate;
use Cake\Auth\DefaultPasswordHasher;
use Cake\Controller\ComponentRegistry;
use Cake\Http\Cookie\Cookie;
use Cake\Http\Response;
use Cake\Http\ServerRequest;
use Cake\I18n\FrozenTime;

/**
 * An authentication adapter for AuthComponent. Provides the ability to authenticate using cookies
 *
 * When configuring FormAuthenticate you can pass in config to which fields, model and additional conditions
 * are used. See FormAuthenticate::$_config for more information.
 *
 * @see AuthComponent::$authenticate
 */
class CookieAuthenticate extends BaseAuthenticate
{
    /**
     * Controller
     *
     * @var object
     */
    private $_controller = null;
    /**
     * Cookie key name
     *
     * @var string
     */
    private $_cookieKey = 'famiree';

    /**
     * Constructor
     *
     * @param \Cake\Controller\ComponentRegistry $registry The Component registry used on this request.
     * @param array $config Array of config to use.
     */
    public function __construct(ComponentRegistry $registry, array $config = [])
    {
        parent::__construct($registry, $config);
        $this->_controller = $registry->getController();
    }

    /**
     * Checks the fields to ensure they are supplied.
     *
     * @param array $data The request that contains login information.
     * @param array $fields The fields to be checked.
     * @return bool False if the fields have not been supplied. True if they exist.
     */
    protected function _checkFields($data, array $fields)
    {
        foreach ([$fields['username'], $fields['password']] as $field) {
            if (empty($data[$field]) || !is_string($data[$field])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Authenticates the identity contained in a request. Will use the `config.userModel`, and `config.fields`
     * to find POST data that is used to find a matching record in the `config.userModel`. Will return false if
     * there is no post data, either username or password is missing, or if the scope conditions have not been met.
     *
     * @param \Cake\Http\ServerRequest $request The request that contains login information.
     * @param \Cake\Http\Response $response Unused response object.
     * @return mixed False on login failure.  An array of User data on success.
     */
    public function authenticate(ServerRequest $request, Response $response)
    {
        $fields = $this->_config['fields'];

        $cookie = $this->_controller->getRequest()->getCookie($this->_cookieKey);
        if (!$cookie) {
            return false;
        }

        $cookie = json_decode($cookie, true);
        $cookie['p'] = (new DefaultPasswordHasher())->hash($cookie['p']);

        if (!$this->_checkFields($cookie, $fields)) {
            return false;
        }

        return $this->_findUser($cookie[$fields['username']]);
    }

    /**
     * Creates login cookie
     *
     * @param array $data Data containing username and password.
     * @return \Cake\Http\Response|bool
     */
    public function createCookie($data)
    {
        $fields = $this->_config['fields'];

        if (!$this->_checkFields($data, $fields)) {
            return false;
        }

        $cookie = new Cookie(
            $this->_cookieKey,
            [
                $fields['username'] => $data[$fields['username']],
                $fields['password'] => $data[$fields['password']],
            ],
            new FrozenTime('+30 days')
        );

        $response = $this->_controller->getResponse()->withCookie($cookie);

        return $response;
    }

    /**
     * Deletes login cookie
     *
     * @return \Cake\Http\Response
     */
    public function deleteCookie()
    {
        return $this->_controller->getResponse()->withExpiredCookie(new Cookie($this->_cookieKey));
    }
}

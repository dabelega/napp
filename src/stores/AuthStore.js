import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';


const CHANGE_EVENT = 'change';

/**
  * This function adds user to local storage
  *
  * @function setUser
  * @param {string} profile
  * @param {string} token
  * @return {void}
  */
function setUser(profile, token) {
  if (!localStorage.getItem('id_token')) {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', token);
  }
}

/**
  * This function removes user from local storage
  *
  * @function removeUser
  * @return {void}
  */
function removeUser() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
}

/**
  * Data store for Authentication
  *
  * @class AuthStoreClass
  * @extends {EventEmitter}
  */

class AuthStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
    * This function listens for change event
    *
    * @callback requestCallback
    * @return {void}
    */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  /**
    * This function removes change event.
    *
    * @callback requestCallback
    * @return {null}
    */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }


  /**
    * This function checks if user is logged in
    *
    * @return {bool} 
    */
  isAuthenticated() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

}

const AuthStore = new AuthStoreClass();

/* Here we register a callback for the dispatcher
 * and look for our various action types so we can
 * respond appropriately
 */
AuthStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case AuthConstants.LOGIN_USER:
      setUser(action.profile, action.token);
      AuthStore.emitChange();
      break

    case AuthConstants.LOGOUT_USER:
      removeUser();
      AuthStore.emitChange();
      break

    default:
  }

});

export default AuthStore;
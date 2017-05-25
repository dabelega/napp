import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';


const CHANGE_EVENT = 'change';

/**
  * This function adds user to local storage
  * @param {string} profile
  * @param {string} token
  */
function setUser(profile, token) {
  if (!localStorage.getItem('id_token')) {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', token);
  }
}

/**
  * This function removes user from local storage
  */
function removeUser() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
}


class AuthStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
    * This function listens for change event
    * @param {callback} function
    */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  /**
    * This function removes change event.
    * @param {callback} function
    */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }


  /**
    * This function checks if user is logged in
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
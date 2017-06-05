import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';



class AuthStore extends EventEmitter{

  /**
  * This function adds user to local storage
  *
  * @function setUser
  * @param {string} profile
  * @param {string} token
  * @return {void}
  */
setUser(profile, token) {
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
removeUser() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
}

  
  addChangeListener(callback) {
    this.on('change', callback)
  }

  /**
    * This function removes change event.
    *
    * @callback requestCallback
    * @return {null}
    */
  removeChangeListener(callback) {
    this.removeListener('change', callback)
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

  handleAuthAction(action) {

    switch(action.actionType) {

    case 'LOGIN_USER': {
      this.setUser(action.profile, action.token);
      this.emit('change');
      break;
    }

    case 'LOGOUT_USER': {
      this.removeUser();
      this.emit('change');
      break;
    }  

   
   }
    
  } 
}


const authStore = new AuthStore();
Dispatcher.register(authStore.handleAuthAction.bind(authStore));
export default authStore;
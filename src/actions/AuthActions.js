import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';


/**
  * This function logs in a user with their google account
  * @param {string} profile
  * @param {string} token
  */
export function logUserIn (profile, token){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      profile: profile,
      token: token
    });
  }

/**
  * This function logs out a user
  */
 export function logUserOut(){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
      profile: '',
      token: ''
    });
  }


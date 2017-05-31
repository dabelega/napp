import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';


/**
  * This function logs in a user with their google account
  *
  * @function logUserIn
  * @param {string} profile
  * @param {string} token
  * @return {void}
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
  *
  * @function logUserOut
  * @return {void}
  */
 export function logUserOut(){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
      profile: '',
      token: ''
    });
  }


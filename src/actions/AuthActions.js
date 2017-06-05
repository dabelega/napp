import AppDispatcher from '../dispatcher/AppDispatcher';


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
      actionType: 'LOGIN_USER',
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
      actionType: 'LOGOUT_USER',
      profile: '',
      token: ''
    });
  }


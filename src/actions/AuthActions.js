import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';



export function logUserIn (profile, token){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      profile: profile,
      token: token
    });
  }

 export function logUserOut(){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
      profile: '',
      token: ''
    });
  }


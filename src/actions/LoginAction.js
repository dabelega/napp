import * as Auth from '../components/Header';
import Dispatcher from '../dispatcher/AppDispatcher';

export default {
  loginUser() {
  	var auth0 = new Auth0({
	    domain:       'dhaniapps.auth0.com',
	    clientID:     'bizu45qJ5e3DSHdjnQduVkJyN0VsfYq8',
	    callbackURL:  'http://localhost:8080/source',
	    callbackOnLocationHash: true
  	});

  	auth0.login({
      connection: 'google-oauth2'
    });

    var result = auth0.parseHash(window.location.hash);
    let jwt;
     if (result && result.id_token){
     		jwt = result.id_token;
     }
   

    localStorage.setItem('jwt', jwt);
    // Send the action to all stores through the Dispatcher
    Dispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });
  }
}
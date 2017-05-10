import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class LoginStores extends EventEmitter{
	constructor(){
		super();

		this._user = null;
    	this._jwt = null;

	} 
	get user() {
	    return this._user;
	  }

	get jwt() {
	    return this._jwt;
	  }

	 isLoggedIn() {
	    return !!this._user;
	  }

	handleLoginAction(result) {


		switch(action.actionType) {
	      case LOGIN_USER:
	        // We get the JWT from the action and save it locally.
	        this._jwt = action.jwt;
	        // Then we decode it to get the user information.
	        this._user = jwt_decode(this._jwt);
	        // And we emit a change to all components that are listening.
	        // This method is implemented in the `BaseStore`.
	        this.emit('user_loggedin');
	        break;
	      default:
	        break;
   		 }

	}	
}


const loginStore = new LoginStores();
Dispatcher.register(loginStore.handleLoginAction.bind(loginStore));
export default loginStore;
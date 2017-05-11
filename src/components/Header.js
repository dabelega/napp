import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/styles.scss';
import '../utils/platform.js';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

import MetaTags from 'react-meta-tags';


var auth0 = new Auth0({
    domain:       'dhaniapps.auth0.com',
    clientID:     'bizu45qJ5e3DSHdjnQduVkJyN0VsfYq8',
    callbackURL:  'http://localhost:3000/source',
    callbackOnLocationHash: true
  });



export default class Header extends React.Component { 


    constructor() {
        super();
        this.state = {
          authenticated: AuthStore.isAuthenticated()
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
  }

  login() {
        auth0.login({
          connection: 'google-oauth2',
        }, () => {
          alert(arguments, "aksfls");
        });
}

componentWillMount(){
  var result = auth0.parseHash(window.location.hash);
  if (result && result.id_token) {
  auth0.getProfile(result.id_token, (err, profile) => {
    profile = profile.name;
    const token = result.id_token;
    AuthActions.logUserIn(profile, token);
   this.setState({authenticated: true});
  });
}
}

  logout() {
    // AuthActions.logUserOut();
    AuthActions.logUserOut();
    this.setState({authenticated: false});
    window.location='/';
  }


  signIn (){
    
  }

	render() {
		return (
     <div className="main">
        <header>

     		<div className="header-wrapper">
     			<div className="logo">
     				<h1>Napp</h1>  
                    
     			</div>

     			<div className="login">   
                      {!this.state.authenticated ? (
                     <a onClick={()=>this.login()}>Sign In with Google</a> ) : (

                    <Link to="" onClick={()=>this.logout()}>Sign Out</Link>   
                    )}                                                                        
     			</div>

     		</div>
     	</header>
      </div>
      );
	}
}

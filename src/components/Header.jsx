import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/sass/styles.scss';
import '../utils/auth0.js';
import * as AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

const CLIENT_ID = process.env.AUTH0_ID;
const auth0 = new Auth0({
    domain:       'dhaniapps.auth0.com',
    clientID:     `${CLIENT_ID}`,
    callbackURL:  'http://nappnews.herokuapp.com/source',
    callbackOnLocationHash: true
  });

/**
  * The Header Class authenticates a user using Auth0 API and
  * modifies itself based on the user's login status.
  */
export default class Header extends React.Component { 

  /**
    * Initalizes state
    */
  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated()
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   * Lifecycle Method
   */
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
 
  /**
   * Logs user in
   */
  login() {
    auth0.login({
      connection: 'google-oauth2',
    }, () => {
          alert(arguments, "aksfls");
        });
}

  /**
   * Logs user out
   */
  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
    window.location='/';
}

/*
 * Renders HTML from JSX
 * Changes Links based on user's login status.
 */
render() {
  return (
    <div className="header">
      <div className="logo floatleft">
        <a href="/"><img src="../public/images/logo copy.png" alt="" /></a>
      </div>
      <div className="top_menu floatleft">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Napp</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/source">Sources</a></li>
          {!this.state.authenticated ? (
            <a onClick={()=>this.login()} role="button">
              &nbsp;&nbsp;Sign In with Google
            </a> ) : (
              <Link to="" onClick={()=>this.logout()}>
                &nbsp;&nbsp;Sign Out
              </Link>   
            )}    
        </ul>
      </div>  
    </div>

      );
	}
}

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../public/sass/styles.scss';
import '../utils/auth0.js';
import * as AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

/**
  * Initalize Auth0 parameters
  */
const CLIENT_ID = process.env.AUTH0_ID;
const auth0 = new Auth0({
    domain:       'dhaniapps.auth0.com',
    clientID:     `${CLIENT_ID}`,
    callbackURL:  'http://localhost:3000/source',
    callbackOnLocationHash: true
  });

/**
  * The Header Class authenticates a user using Auth0 API and
  * modifies itself based on the user's login status.
  *
  * @class Header
  * @extends {React.Component}
  */
export default class Header extends React.Component { 

  /**
    * Initalizes states and binds methods
    *
    * @constructor
    * @return {void}
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
   * Adds login token to localstorage and
   * sets authentication to true.
   *
   * @return {void}
   */
  componentWillMount(){
    let result = auth0.parseHash(window.location.hash);
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
   * @params {null}
   * @return {null}
   */
  login() {
    auth0.login({
      connection: 'google-oauth2',
    });
}

  /**
   * Logs user out
   * @params {null}
   * @return {null}
   */
  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
    this.props.history.push('/');
}

/*
 * Renders HTML from JSX
 * Changes Links based on user's login status.
 * @params {null}
 * @return {null}
 */
render() {
  return (
    <div className="header">
      <div className="logo floatleft">
        <a href="/"><img src="/public/images/logo copy.png" alt="" /></a>
      </div>
      <div className="top_menu floatleft">
        {!this.state.authenticated ? (
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Napp</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a onClick={()=>this.login()} role="button">
                Sign In with Google
              </a></li>  
          </ul>

             ) : (
               <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/about">About Napp</a></li>
                 <li><a href="/contact">Contact us</a></li>
                 <li><a href="/source">Sources</a></li>
                 <li><Link to="" onClick={()=>this.logout()}>
                      &nbsp;&nbsp;Sign Out
                    </Link> </li>
               </ul> 
                
            )}  
        
      </div>  
    </div>

      );
	}
}
Header.propTypes = {
    history: PropTypes.object
  };

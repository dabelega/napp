import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/styles.scss';
import '../utils/auth0.js';
import * as AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

const CLIENT_ID = process.env.AUTH0_ID;
const auth0 = new Auth0({
    domain:       'dhaniapps.auth0.com',
    clientID:     `${CLIENT_ID}`,
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


  login() {
        auth0.login({
          connection: 'google-oauth2',
        }, () => {
          alert(arguments, "aksfls");
        });
}


  logout() {
    // AuthActions.logUserOut();
    AuthActions.logUserOut();
    this.setState({authenticated: false});
    window.location='/';
  }

render() {
  return (
      <div className="header">
        <div className="logo floatleft">
          <a href="/"><img src="../images/logo copy.png" alt="" /></a>
        </div>
        <div className="top_menu floatleft">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="/about">About Napp</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/source">Sources</a></li>
            {!this.state.authenticated ? (
                     <a onClick={()=>this.login()}>&nbsp;&nbsp;Sign In with Google</a> ) : (

                    <Link to="" onClick={()=>this.logout()}>&nbsp;&nbsp;Sign Out</Link>   
                    )}     
            
          </ul>
        </div> 

         
                                                                                         
         

        <div className="main_menu_area">
          <ul id="nav">
            {/*<li><a href="/">GENERAL</a></li>                                                                     
            <li><a href="/">SPORTS</a></li>
            <li><a href="/">TECHNOLOGY</a></li>
            <li><a href="/">BUSINESS</a></li>
            <li><a href="/">GAMING</a></li>
            <li><a href="/">ENTERTAINMENT</a></li>
            <li><a href="/">POLITICS</a></li>
            <li><a href="/">MUSIC</a></li>
            <li><a href="/">SCIENCE AND NATURE</a></li>*/}
            
          </ul>
        </div> 
      </div>

      );
	}
}

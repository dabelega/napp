import React from 'react';
import { link as Link } from 'react-router';
import '../../sass/styles.scss';
import '../utils/platform.js'
//import Auth from '../config/auth';
//import Passport from 'passport';
//import * as firebase from "firebase";
import MetaTags from 'react-meta-tags';
//import Express from 'express';
//const GoogleStrategy = require('passport-google-oauth2').Strategy;

 // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyCFUhKRp6lj0asaDlfVqpswbcSFGcby4F8",
//     authDomain: "napp-5f701.firebaseapp.com",
//     databaseURL: "https://napp-5f701.firebaseio.com",
//     projectId: "napp-5f701",
//     storageBucket: "napp-5f701.appspot.com",
//     messagingSenderId: "320325272096"
//   };
// firebase.initializeApp(config);

var auth0 = new Auth0({
    domain:       'dhaniapps.auth0.com',
    clientID:     'bizu45qJ5e3DSHdjnQduVkJyN0VsfYq8',
    callbackURL:  'http://localhost:8080/source',
    callbackOnLocationHash: true
  });



export default class Header extends React.Component { 

    // componentDidMount(){
    //     gapi.signin2.render('g-signin2', {
    //     'scope': 'https://www.googleapis.com/auth/plus.login',
    //     'width': 200,
    //     'height': 50,
    //     'longtitle': true,
    //     'theme': 'dark',
    //     'onsuccess': this.onSignIn
    //    });  
    // }

    // onSignIn(){
    //     var into = "I am in";
    //     console.log(into);
    // }


    // onSignIn(googleUser) {
    //   console.log('Google Auth Response', googleUser);
    //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    //   var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    //     unsubscribe();
    //     // Check if we are already signed-in Firebase with the correct user.
    //     if (!isUserEqual(googleUser, firebaseUser)) {
    //       // Build Firebase credential with the Google ID token.
    //       var credential = firebase.auth.GoogleAuthProvider.credential(
    //           googleUser.getAuthResponse().id_token);
    //       // Sign in with credential from the Google user.
    //       firebase.auth().signInWithCredential(credential).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //       });
    //     } else {
    //       console.log('User already signed-in Firebase.');
    //     }

    //     document.location.href = '#/source';

    //   });
    // }

    // componentDidMount() {
    //         gapi.signin2.render('g-signin2', {
    //         'scope': 'https://www.googleapis.com/auth/plus.login',
    //         'width': 200,
    //         'height': 50,
    //         'longtitle': true,
    //         'theme': 'dark',
    //         'onsuccess': this.onSignIn
    //     });  
    // }

    // onSignIn(googleUser) {
    //     // Useful data for your client-side scripts:
    //     var profile = googleUser.getBasicProfile();
    //     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //     console.log('Full Name: ' + profile.getName());
    //     console.log('Given Name: ' + profile.getGivenName());
    //     console.log('Family Name: ' + profile.getFamilyName());
    //     console.log("Image URL: " + profile.getImageUrl());
    //     console.log("Email: " + profile.getEmail());

    //     // The ID token you need to pass to your backend:
    //     var id_token = googleUser.getAuthResponse().id_token;
    //     console.log("ID Token: " + id_token);
    //     window.location = 'http://www.google.com';
    //   };

    // callback(googleUser) {
    //   console.log("user signed in"); // plus any other logic here
    //   window.location = 'http://www.google.com';
    // }

    // renderGoogleLoginButton() {
    //     console.log('rendering google signin button')
    //     gapi.signin2.render('my-signin2', {
    //       'scope': 'https://www.googleapis.com/auth/plus.login',
    //       'width': 200,
    //       'height': 50,
    //       'longtitle': true,
    //       'theme': 'light',
    //       'onsuccess': this.callback
    //     })
    // }

    // componentDidMount() {
    //     window.addEventListener('google-loaded',this.renderGoogleLoginButton);
    // }


    // signOut() {
    //     var auth2 = gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function () {
    //       console.log('User signed out.');
    //     });
    // }

  //   $('.login-google').click(function () {
  //   auth0.login({
  //     connection: 'google-oauth2'
  //   });
  // });

  signIn (){
    auth0.login({
      connection: 'google-oauth2'
    });

    var result = auth0.parseHash(window.location.hash);
    const loggedUser;
 
    if (result && result.id_token) {
        auth0.getProfile(result.id_token, function (err, profile) {
           loggedUser = profile.name;
        });
  }

	render() {
		return (
     <div className="main">
        <header>

            <MetaTags>
                
                
                
             </MetaTags>

     		<div className="header-wrapper">
     			<div className="logo">
     				<h1>Napp</h1>  
     			</div>

     			<div className="login">   
                    
                     <a onClick={this.signIn}>Sign In</a>	
     				<a href='#/' onClick={this.signOut}>Sign Out</a>
     			</div>

     		</div>
     	</header>
      </div>
      );
	}
}

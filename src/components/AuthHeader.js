import React from 'react';
import '../../sass/styles.scss';

export default class Header extends React.Component {


    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    }

    // firebase.auth().signOut().then(function() {
    //     // Sign-out successful.
    //     }).catch(function(error) {
    //     // An error happened.
    // });

	render() {
		return (
     <div className="main">
        <header>
     		<div className="header-wrapper">
     			<div className="logo">
     				<h1>Napp</h1>  
     			</div>

     			<div className="login">   		
     				<a href="#" onclick="signOut();">Sign out</a>
     			</div>

     		</div>
     	</header>
      </div>
      );
	}
}

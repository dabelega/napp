import React from 'react';
import '../../sass/styles.scss';

export default class Header extends React.Component {
	render() {
		return (
     <div className="main">
        <header>
     		<div className="header-wrapper">
     			<div className="logo">
     				<h1>Napp</h1>  
     			</div>

     			<div className="login">   		
     				<a href="" >Login with google plus</a>
     			</div>

     		</div>
     	</header>
      </div>
      );
	}
}

import React from 'react';
import '../../sass/styles.scss';
import GoogleSignIn from '../components/GoogleSignIn';
import Sports from '../components/Sports';

export default class RightCol extends React.Component {
  render() {
    return( 
	  <div className="sidebar floatright">
	    <Trending />
	  </div> 
      );
	}
}

import React from 'react';
import '../../sass/styles.scss';
import LeftCol from '../components/LeftCol';
import MiddleCol from '../components/MiddleCol';

export default class MainContent extends React.Component {
  render() {
    return( 
	  <div className="main_content floatleft">
	    <LeftCol />
        <MiddleCol />
	  </div>
      );
	}
}

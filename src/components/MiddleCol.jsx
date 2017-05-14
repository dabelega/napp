import React from 'react';
import '../../sass/styles.scss';
import General from '../components/General';
import Music from '../components/Music';


export default class MiddleCol extends React.Component {
  render() {
    return( 
	  <div className="right_coloum floatright">
	    <General />
	    <Music />
	  </div> 
      );
	}
}

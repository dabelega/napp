import React from 'react';
import '../../sass/styles.scss';
import Featured from '../components/Featured';
import Business from '../components/Business';
import Tech from '../components/Tech';

export default class LeftCol extends React.Component {
  render() {
    return( 
	  <div className="left_coloum floatleft">
	    <Featured />
	    <Business />
	    <Tech />
	  </div> 
      );
	}
}

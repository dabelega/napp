import React from 'react';
import '../../sass/styles.scss';
import MainContent from '../components/MainContent';
import RightCol from '../components/RightCol';

export default class HomeContents extends React.Component {
  render() {
    return( 
	 <div className="content_area">
	      <MainContent />
	  	  <RightCol />
     </div> 
      );
	}
}

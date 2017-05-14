import React from 'react';
import '../../sass/styles.scss';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import HomeContents from '../components/HomeContents';


export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="center">
          <Header /> 
          <HomeContents />
          
        </div> 
      </div> //End wrapper
      );
	}
}

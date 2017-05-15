import React from 'react';
import '../../sass/styles.scss';
import Header from '../components/Header';
import Slider from '../components/Slider';
import MainContent from '../components/MainContent';
import HomeContents from '../components/HomeContents';
import Footer from '../components/Footer';


export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="center">
          <Header /> 
          <Slider />
          <HomeContents />
          <Footer />
        </div> 
      </div> //End wrapper
      );
	}
}

import React from 'react';
import '../../sass/styles.scss';
import Header from '../components/Header';
import Slider from '../components/Slider';
import HomeContents from '../components/HomeContents';
import Footer from '../components/Footer';

const Home = () => (
  <div className="wrapper">
    <div className="center">
      <Header /> 
      <Slider />
      <HomeContents />
      <Footer />
    </div> 
  </div> 
);

export default Home;

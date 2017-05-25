import React from 'react';
import '../../../public/sass/styles.scss';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import HomeContents from '../containers/HomeContents';
import Footer from '../../components/Footer';
import Bar from '../../components/Bar';

const Home = (props) => (
  <div className="wrapper">
    <div className="center">
      <Header /> 
      <div className="flash">
        {props.location.state}
      </div>
      <Bar />
      <Slider />
      <HomeContents />
      <Footer />
    </div> 
  </div> 
);

export default Home;


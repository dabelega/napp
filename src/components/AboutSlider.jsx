import React from 'react';
import '../../sass/styles.scss';
import Bar from '../components/Bar';

const AboutSlider = () => (	
  <div className="slider-margin">
    <Bar />	
    <div className="slider_area">
      <div className="slider">
        <ul className="bxslider">
          <li>
            <img src="../images/about.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>  
);

export default AboutSlider;


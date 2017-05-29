import React from 'react';
import '../../public/sass/styles.scss';
import Bar from '../components/Bar';

/**
 * Stateless component
 * Simply renders Slider for About Component
 */
const AboutSlider = () => (	
  <div className="slider-margin">
    <Bar />	
    <div className="slider_area">
      <div className="slider">
        <ul className="bxslider">
          <li>
            <img src="../public/images/about.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>  
);

export default AboutSlider;


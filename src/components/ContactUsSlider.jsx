import React from 'react';
import '../../public/sass/styles.scss';
import Bar from '../components/Bar';

/**
 * Stateless component
 * Simply renders Slider for Contact Component
 */
const ContactUsSlider = () => (
  <div className="slider-margin">
    <Bar />		
    <div className="slider_area">
      <div className="slider">
        <ul className="bxslider">
          <li>
            <img src="../public/images/contact.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>   
);

export default ContactUsSlider;


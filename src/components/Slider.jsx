import React from 'react';
import '../../public/sass/styles.scss';

/**
 * Stateless component
 * Simply renders a slider
 *
 * @return {void}
 */
const Slider = () => (
  <div className="slider_area">
    <div className="slider">
      <ul className="bxslider">
        <li>
          <img src="../public/images/welcome.png" alt="" />
        </li>
      </ul>
    </div>
  </div>   
);

export default Slider;


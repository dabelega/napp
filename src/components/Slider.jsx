import React from 'react';
import '../../sass/styles.scss';

export default class Slider extends React.Component {
  render() {
    return( 
	    <div className="slider_area">
          <div className="slider">

            <ul className="bxslider">
              <li>
                <img src="../images/welcome.png" alt="" title="Over 78 news sources" />
              </li>
            </ul>

          </div>
        </div>   
      );
	}
}

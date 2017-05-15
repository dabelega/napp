import React from 'react';
import '../../sass/styles.scss';

export default class Slider extends React.Component {
  render() {
    return( 
	    <div className="slider_area">
          <div className="slider">

            <ul className="bxslider">
              <li>
                <img src="../images/1.jpg" alt="" title="Over 78 news sources" />
              </li>
              <li>
                <img src="../images/2.jpg" alt="" title="Filter through articles" />
              </li>
              <li>
                <img src="../images/3.jpg" alt="" title="View articles within Napp" />
              </li>
            </ul>

          </div>
        </div>   
      );
	}
}

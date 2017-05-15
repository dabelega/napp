import React from 'react';
import '../../sass/styles.scss';

export default class Music extends React.Component {
  render() {
    return( 
    	<div className="single_right_coloum">
            <h2 className="title">MUSIC</h2>
            <div className="single_cat_right_content editorial"> <img src="../images/music01.jpg" alt="" />
              <h3><a href="http://www.billboard.com/articles/news/television/7793077/melissa-mccarthy-snl">
              Watch Melissa McCarthy Hand Over Hosting Duties to a Random Mom on 'SNL'</a>
              </h3>
            </div>
            <div className="single_cat_right_content editorial"> <img src="../images/music02.jpg" alt="" />
              <h3><a href="http://www.billboard.com/articles/columns/pop/7793076/harry-styles-ultralight-beam-kanye-west-london">
              Harry Styles covers Kanye West's Ultra Light Beam at Secret London Show</a>
              </h3>
            </div>   
        </div>	  
      );
	}
}









		
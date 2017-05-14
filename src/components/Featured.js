import React from 'react';
import '../../sass/styles.scss';

export default class Featured extends React.Component {
  render() {
    return( 
	  <div>
	    <div className="single_left_coloum_wrapper">
            <h2 className="title">FEATURED NEWS</h2>
           
            <div className="single_left_coloum floatleft"> <img src="../images/single_featured.png" alt="" />
              <h3>Lorem ipsum dolor sit amet, consectetur</h3>
              <p>Nulla quis lorem neque, mattis venenatis lectus. In interdum ullamcorper 
                dolor eu mattis.</p>
              <a className="readmore" href="#">read more</a> </div>
            <div className="single_left_coloum floatleft"> <img src="../images/single_featured.png" alt="" />
              <h3>Lorem ipsum dolor sit amet, consectetur</h3>
              <p>Nulla quis lorem neque, mattis venenatis lectus. In interdum ullamcorper 
                dolor eu mattis.</p>
              <a className="readmore" href="#">read more</a> </div>
            <div className="single_left_coloum floatleft"> <img src="../images/single_featured.png" alt="" />
              <h3>Lorem ipsum dolor sit amet, consectetur</h3>
              <p>Nulla quis lorem neque, mattis venenatis lectus. In interdum ullamcorper 
                dolor eu mattis.</p>
              <a className="readmore" href="#">read more</a> </div>
          </div>
	  </div> 
      );
	}
}

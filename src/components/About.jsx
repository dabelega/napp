import React from 'react';
import '../../sass/styles.scss';
import Header from '../components/Header';

// export default class LeftCol extends React.Component {
//   render() {
//     return( 
// 	  <div className="left_coloum floatleft">
// 	    <Featured />
// 	    <Business />
// 	    <Tech />
// 	  </div> 
//       );
// 	}
// }

const About = props => (
  <div className="container-fullwidth">
    <div>
      <Header />
    </div>
    <div>
      {props.children}
    </div>
    <div />
  </div>
);

export default About;

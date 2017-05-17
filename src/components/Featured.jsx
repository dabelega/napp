import React from 'react';
import '../../sass/styles.scss';

export default class Featured extends React.Component {
  render() {
    return( 
	  <div>
	    <div className="single_left_coloum_wrapper">
            <h2 className="title">FEATURED NEWS</h2>
           
            <div className="single_left_coloum floatleft"> <img src="../images/single_featured1.jpg" alt="" />
              <h3>Macron vows to restore France global status</h3>
              <p>In inaugural speech, Macron promises to restore 
              Frances lost confidence and reform and relaunch the 
              European Union..
              </p>
              <a className="readmore" href="http://www.aljazeera.com/news/2017/05/macron-vows-restore-france-global-status-170514171704652.html">read more</a> </div>
            <div className="single_left_coloum floatleft"> <img src="../images/single_featured2.jpg" alt="" />
              <h3>Merkel conservatives win North Rhine-Westphalia vote</h3>
              <p>Chancellor Angela Merkels Christian Democratic Union (CDU) 
              has won the regional elections in Germany’s most populous state.
              </p>
              <a className="readmore" href="http://www.aljazeera.com/news/2017/05/merkel-conservatives-win-north-rhine-westphalia-vote-170514171755917.html">
              read more
              </a> 
              </div>

            <div className="single_left_coloum floatleft"> <img src="../images/single_featured3.jpg" alt="" />
              <h3>Six wounded in Ivory Coast anti-mutiny protest</h3>
              <p>Witnesses say renegade soldiers opened fire on protesters in 
              Bouake as opposition to rebellion gathers momentum.</p>
              <a className="readmore" href="http://www.aljazeera.com/news/2017/05/mutineers-wound-ivory-coast-protest-170514132038161.html">read more</a> </div>
          </div>
	  </div> 
      );
	}
}

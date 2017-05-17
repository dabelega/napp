import React from 'react';
import '../../sass/styles.scss';

const Business = () => (
  <div className="single_left_coloum_wrapper">
    <h2 className="title">BUSINESS NEWS</h2>

    <div className="single_left_coloum floatleft"> 
      <img src="images/business_featured.jpg" alt="" />
      <h3>Thousands protest Tunisias corruption amnesty bill</h3>
      <p>Proposed law gives amnesty to businessmen accused of 
          corruption under overthrown president Ben Ali.
      </p>
      <a className="readmore" href="#">read more</a> 
    </div>

    <div className="single_left_coloum floatleft"> 
      <img src="../images/business_featured1.jpg" alt="" />
      <h3>Emirates airline profits plunge 82.5% in past year</h3>
      <p>Carrier posts first drop in annual profits for five years, 
          hit by US dollars rise, competition and travel restrictions.
      </p>
      <a className="readmore" href="#">read more</a> 
    </div>

    <div className="single_left_coloum floatleft"> 
      <img src="../images/business_featured2.gif" alt="" />
      <h3>What is behind Snapchat&apos;s financial difficulties?</h3>
      <p>Social media app Snapchat reported a loss of $2.2bn 
          in the first quarter of 2017.
      </p>
      <a className="readmore" href="#">read more</a> 
    </div>
  </div>

);

export default Business;


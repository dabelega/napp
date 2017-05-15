import React from 'react';
import '../../sass/styles.scss';

export default class General extends React.Component {
  render() {
    return( 
	    <div className="single_right_coloum">
            <h2 className="title">GENERAL</h2>
            <ul>
              <li>
                <div className="single_cat_right_content">
                  <h3>North Korea tests missile, raises new fears in Pacific</h3>
                  <p>North Korea carried out a provocative new ballistic missile test early Sunday</p>
                  <p className="single_cat_right_content_meta"><a href="http://edition.cnn.com/2017/05/14/asia/north-korea-missile-test-russia-japan/index.html"><span>read more</span></a> </p>
                </div>
              </li>
              <li>
                <div className="single_cat_right_content">
                  <h3>Trump's chief of staff: 'We've looked at' changing libel laws</h3>
                  <p>A top White House aide says changing libel laws is "something we've looked at</p>
                  <p className="single_cat_right_content_meta"><a href="http://money.cnn.com/2017/04/30/media/reince-priebus-libel-laws/index.html?iid=EL"><span>read more</span></a></p>
                </div>
              </li>
              <li>
                <div className="single_cat_right_content">
                  <h3>Carl Bernstein: Comey firing is a 'dangerous' moment</h3>
                  <p>Carl Bernstein says the Trump administration could put the United States</p>
                  <p className="single_cat_right_content_meta"><a href="http://money.cnn.com/2017/05/14/media/carl-bernstein-trump-dangerous-moment/index.html"><span>read more</span></a></p>
                </div>
              </li>
            </ul>
            </div>
      );
	}
}

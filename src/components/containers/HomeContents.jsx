import React from 'react';
import '../../../public/sass/styles.scss';


/**
 * Stateless Component
 * It simply renders welcome message on the home page
 * 
 * @return {void}
 */
const HomeContents = () => (
  <div className="content_area">
    <div className="welcome">
      <p>
        The Napp Journal provides news headlines from over 78 news sources. 
        These news Sources include CNN, BBC, Al Jazeera, and much more. 
        The App provides a friendly user interface that allows you view major 
        headlines at a glance.
      </p>
      
      <p>
        You can view all the news sources, review headlines and more. 
        Start exploring now! and thank us later!.. *_*
      </p>
      
    </div>
  </div> 
);

export default HomeContents;

import React from 'react';
import '../../sass/styles.scss';

export default class Music extends React.Component {
  render() {
    return( 
      <div className="footer_bottom_area">
      <div className="footer_menu">
        <ul id="f_menu">
          <li><a href="/">GENERAL</a></li>
            <li><a href="/">SPORTS</a></li>
            <li><a href="/">TECHNOLOGY</a></li>
            <li><a href="/">BUSINESS</a></li>
            <li><a href="/">GAMING</a></li>
            <li><a href="/">ENTERTAINMENT</a></li>
            <li><a href="/">POLITICS</a></li>
            <li><a href="/">MUSIC</a></li>
            <li><a href="/">SCIENCE AND NATURE</a></li>
        </ul>
      </div>
      <div className="copyright_text">
        <p>Copyright &copy; 2017 Napp. All rights reserved</p>
        
      </div>
    </div>
      );
  }
}









    









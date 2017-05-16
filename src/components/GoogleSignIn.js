import React from 'react';
import '../../sass/styles.scss';


export default class GoogleSignIn extends React.Component {
  render() {
    return( 
	  <div className="single_sidebar">
	    <div className="single_sidebar">
          <div className="google">
            <h2>Sign In with Google</h2>
            <p>With Google Sign In you can:</p>
            <ul>
              <li>Access more news sources</li>
              <li>Scrape articles</li>
              <li>Add to favourites</li>
            </ul>
            <button className="btn btn-danger">Sign In now</button>
            <p className="google-privacy">We will not share your account details!</p>
          </div>
         </div>
       </div>
      );
	}
}

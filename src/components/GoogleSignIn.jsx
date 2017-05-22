import React from 'react';
import '../../public/sass/styles.scss';

const GoogleSignIn = () => (
  <div className="single_sidebar">
    <div className="single_sidebar">
      <div className="google">
        <h2>Sign In with Google</h2>
        <p>With Google Sign In you can:</p>
        <ul>
          <li>Access more news sources</li>
          <li>Scrape articles</li>
          <li>Add to favourites</li>
          <li>Get unlimited access to articles</li>
          <li>& more</li>
        </ul>
        <p className="google-privacy">
          We will not share your account details!
        </p>
      </div>
    </div>
  </div>
);

export default GoogleSignIn;
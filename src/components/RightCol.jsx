import React from 'react';
import '../../sass/styles.scss';
import GoogleSignIn from '../components/GoogleSignIn';
import Sports from '../components/Sports';

const RightCol = () => (
  <div className="sidebar floatright">
    <GoogleSignIn />
    <Sports />
  </div>
);

export default RightCol;

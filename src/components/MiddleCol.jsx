import React from 'react';
import '../../sass/styles.scss';
import General from '../components/General';
import Music from '../components/Music';

const MiddleCol = () => (
  <div className="right_coloum floatright">
    <General />
    <Music />
  </div> 
);

export default MiddleCol;
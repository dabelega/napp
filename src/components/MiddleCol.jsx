import React from 'react';
import '../../sass/styles.scss';
import General from '../components/General';
import Entertainment from '../components/Entertainment';

const MiddleCol = () => (
  <div className="right_coloum floatright">
    <General />
    <Entertainment />
  </div> 
);

export default MiddleCol;
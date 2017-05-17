import React from 'react';
import '../../sass/styles.scss';
import LeftCol from '../components/LeftCol';
import MiddleCol from '../components/MiddleCol';

const MainContent = () => (
  <div className="main_content floatleft">
    <LeftCol />
    <MiddleCol />
  </div>
);

export default MainContent;
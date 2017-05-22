import React from 'react';
import '../../../public/sass/styles.scss';
import LeftCol from '../containers/LeftCol';
import MiddleCol from '../containers/MiddleCol';

const MainContent = () => (
  <div className="main_content floatleft">
    <LeftCol />
    <MiddleCol />
  </div>
);

export default MainContent;
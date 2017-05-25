import React from 'react';
import '../../../public/sass/styles.scss';
import MainContent from '../containers/MainContent';
import RightCol from '../containers/RightCol';

const HomeContents = () => (
  <div className="content_area">
    <MainContent />
    <RightCol />
  </div> 
);

export default HomeContents;

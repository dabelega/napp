import React from 'react';
import '../../sass/styles.scss';
import MainContent from '../components/MainContent';
import RightCol from '../components/RightCol';

const HomeContents = () => (
  <div className="content_area">
    <MainContent />
    <RightCol />
  </div> 
);

export default HomeContents;

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import HomeContents from '../../components/HomeContents';


describe('<HomeContents />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<HomeContents />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render MainContent component', function () {
    const wrapper = shallow(<HomeContents />);
    expect(wrapper.find('MainContent')).to.have.length(1);
  }); 

 it('should render RightCol component ', function () {
    const wrapper = shallow(<HomeContents />);
    expect(wrapper.find('RightCol')).to.have.length(1);
  }); 
 
});

  

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import RightCol from '../../components/RightCol';


describe('<RightCol />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<RightCol />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render GoogleSignIn component', function () {
    const wrapper = shallow(<RightCol />);
    expect(wrapper.find('GoogleSignIn')).to.have.length(1);
  }); 

 it('should render Sports component ', function () {
    const wrapper = shallow(<RightCol />);
    expect(wrapper.find('Sports')).to.have.length(1);
  }); 
 
});

  

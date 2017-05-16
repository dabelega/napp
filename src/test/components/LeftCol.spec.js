import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import LeftCol from '../../components/LeftCol';


describe('<LeftCol />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<LeftCol />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render Featured component', function () {
    const wrapper = shallow(<LeftCol />);
    expect(wrapper.find('Featured')).to.have.length(1);
  }); 

 it('should render Business component ', function () {
    const wrapper = shallow(<LeftCol />);
    expect(wrapper.find('Business')).to.have.length(1);
  }); 

it('should render Tech component ', function () {
    const wrapper = shallow(<LeftCol />);
    expect(wrapper.find('Tech')).to.have.length(1);
  }); 
 
});

  

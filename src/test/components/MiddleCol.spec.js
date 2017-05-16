import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import MiddleCol from '../../components/MiddleCol';


describe('<MiddleCol />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<MiddleCol />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render General component', function () {
    const wrapper = shallow(<MiddleCol />);
    expect(wrapper.find('General')).to.have.length(1);
  }); 

 it('should render Music component ', function () {
    const wrapper = shallow(<MiddleCol />);
    expect(wrapper.find('Music')).to.have.length(1);
  }); 

});

  

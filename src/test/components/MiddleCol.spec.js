import React from 'react';
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';
import sinon from 'sinon';

import MiddleCol from '../../components/MiddleCol';


describe('<MiddleCol />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<MiddleCol />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render General component', function () {
    const wrapper = mount(<MiddleCol />);
    expect(wrapper.find('General')).to.have.length(1);
  }); 

 it('should render an Entertainment component ', function () {
    const wrapper = mount(<MiddleCol />);
    expect(wrapper.find('Entertainment')).to.have.length(1);
  }); 

});

  

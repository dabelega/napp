import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Sports from '../../components/Sports';


describe('<Sports />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<Sports />);
   expect(wrapper.type()).to.eql('div');
 });


 it('should have 5 headings to display', function () {
    const wrapper = shallow(<Sports />);
    expect(wrapper.find('h3')).to.have.length(5);
  }); 

 it('should display 5 anchor tags', function () {
    const wrapper = shallow(<Sports />);
    expect(wrapper.find('a')).to.have.length(5);
  }); 

});

  

/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import GoogleSignIn from '../../src/components/GoogleSignIn';


describe('<GoogleSignIn />', () => {

  it('renders as a <div>', () => {
   let wrapper = shallow(<GoogleSignIn />);
   expect(wrapper.type()).to.eql('div');
 });


 it('should have 1 headings to display', function () {
    const wrapper = shallow(<GoogleSignIn />);
    expect(wrapper.find('h2')).to.have.length(1);
  }); 

 it('should list 5 items', function () {
    const wrapper = shallow(<GoogleSignIn />);
    expect(wrapper.find('li')).to.have.length(5);
  }); 
 
});

  

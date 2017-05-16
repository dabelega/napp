import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Music from '../../components/Music';


describe('<Music />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<Music />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should have 2 images to display', function () {
    const wrapper = shallow(<Music />);
    expect(wrapper.find('img')).to.have.length(2);
  }); 

 it('should have 2 headings to display', function () {
    const wrapper = shallow(<Music />);
    expect(wrapper.find('h3')).to.have.length(2);
  }); 

 it('should display 2 anchor tags', function () {
    const wrapper = shallow(<Music />);
    expect(wrapper.find('a')).to.have.length(2);
  }); 

});

  

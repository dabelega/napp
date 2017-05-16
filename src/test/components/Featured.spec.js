import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Featured from '../../components/Featured';


describe('<Featured />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<Featured />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should have 3 images to display', function () {
    const wrapper = shallow(<Featured />);
    expect(wrapper.find('img')).to.have.length(3);
  }); 

 it('should have 3 headings to display', function () {
    const wrapper = shallow(<Featured />);
    expect(wrapper.find('h3')).to.have.length(3);
  }); 

 it('should have 3 paragraphs to display', function () {
    const wrapper = shallow(<Featured />);
    expect(wrapper.find('p')).to.have.length(3);
  }); 

 it('should display 3 anchor tags', function () {
    const wrapper = shallow(<Featured />);
    expect(wrapper.find('a')).to.have.length(3);
  }); 

});

  

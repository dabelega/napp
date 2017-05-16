import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import General from '../../components/General';


describe('<General />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<General />);
   expect(wrapper.type()).to.eql('div');
 });


 it('should have 3 headings to display', function () {
    const wrapper = shallow(<General />);
    expect(wrapper.find('h3')).to.have.length(3);
  }); 

 it('should have 6 paragraphs to display', function () {
    const wrapper = shallow(<General />);
    expect(wrapper.find('p')).to.have.length(6);
  }); 

 it('should display 3 anchor tags', function () {
    const wrapper = shallow(<General />);
    expect(wrapper.find('a')).to.have.length(3);
  }); 

});

  

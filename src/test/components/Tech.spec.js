import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Tech from '../../components/Tech';


describe('<Tech />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<Tech />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should have 4 headings to display', function () {
    const wrapper = shallow(<Tech />);
    expect(wrapper.find('h3')).to.have.length(4);
  }); 

 it('should have 8 paragraphs to display', function () {
    const wrapper = shallow(<Tech />);
    expect(wrapper.find('p')).to.have.length(8);
  }); 

 it('should display 4 anchor tags', function () {
    const wrapper = shallow(<Tech />);
    expect(wrapper.find('a')).to.have.length(4);
  }); 

});

  

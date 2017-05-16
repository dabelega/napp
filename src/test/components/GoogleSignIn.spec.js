import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import GoogleSignIn from '../../components/GoogleSignIn';


describe('<GoogleSignIn />', () => {

  it('renders as a <div>', () => {
  	let wrapper = shallow(<GoogleSignIn />);
   expect(wrapper.type()).to.eql('div');
 });


 it('should have 1 headings to display', function () {
    const wrapper = shallow(<GoogleSignIn />);
    expect(wrapper.find('h2')).to.have.length(1);
  }); 

 it('should have 1 button to display', function () {
    const wrapper = shallow(<GoogleSignIn />);
    expect(wrapper.find('button')).to.have.length(1);
  }); 

 it('should list 3 items', function () {
    const wrapper = shallow(<GoogleSignIn />);
    expect(wrapper.find('li')).to.have.length(3);
  }); 
 
});

  

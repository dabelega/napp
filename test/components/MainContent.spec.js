/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import MainContent from '../../src/components/containers/MainContent';

describe('<MainContent />', () => {

  it('renders as a <div>', () => {
  let wrapper = shallow(<MainContent />);
   expect(wrapper.type()).to.eql('div');
 });

 it('should render LeftCol component', function () {
    const wrapper = shallow(<MainContent />);
    expect(wrapper.find('LeftCol')).to.have.length(1);
  }); 

 it('should render MiddleCol component ', function () {
    const wrapper = shallow(<MainContent />);
    expect(wrapper.find('MiddleCol')).to.have.length(1);
  });  
 
});

  

/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import RightCol from '../../components/RightCol';


describe('<RightCol />', () => {

  it('renders as a <div>', () => {
  let wrapper = shallow(<RightCol />);
   expect(wrapper.type()).to.eql('div');
 });

});

  

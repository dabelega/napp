/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import '../../test/testUtils/globaldoc';

import MiddleCol from '../../src/components/containers/MiddleCol';


describe('<MiddleCol />', () => {

  it('renders as a <div>', () => {
   let wrapper = shallow(<MiddleCol />);
   expect(wrapper.type()).to.eql('div');
 });

});

  

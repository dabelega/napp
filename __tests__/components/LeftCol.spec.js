/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import '../../test/testUtils/globaldoc';


import LeftCol from '../../src/components/containers/LeftCol';

describe('<LeftCol />', () => {
    it('renders as a <div>', () => {
    let wrapper = shallow(<LeftCol />);
    expect(wrapper.type()).to.eql('div');
   });
});

  

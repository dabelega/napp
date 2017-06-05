import React from 'react';
import {shallow} from 'enzyme';


import HomeContents from '../../src/components/containers/HomeContents';


describe('<HomeContents />', () => {

  it('renders as a <div>', () => {
   let wrapper = shallow(<HomeContents />);
   expect(wrapper.type()).toBe('div');
 });
 
});

  

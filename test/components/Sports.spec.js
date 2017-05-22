/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';
import Sports from '../../src/components/Sports';



describe('<Sports />', () => {

	const wrapper = mount(<Sports />);

  wrapper.setState({
    sports: [{
      title: 'title',
      url: 'url'
    },
    {
      title: 'title',
      url: 'url'
    },
    {
      title: 'title',
      url: 'url'
    },
    {
      title: 'title',
      url: 'url'
    },
    {
      title: 'title',
      url: 'url'
    }]
  });

  it('renders as a <div>', () => {
  let shallowWrapper = shallow(<Sports />);
   expect(shallowWrapper.type()).to.eql('div');
 });


 it('should have 5 headings to display', function () {
    expect(wrapper.find('h3')).to.have.length(5);
  }); 

 it('should display 5 anchor tags', function () {
    expect(wrapper.find('a')).to.have.length(5);
  }); 

});

  

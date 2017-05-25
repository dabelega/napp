/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import '../../test/testUtils/globaldoc';


import Business from '../../src/components/Business';


describe('<Business />', () => {

  const wrapper = mount(<Business />);

  wrapper.setState({
    business: [{
      urlToImage: 'urlToImage',
      title: 'title',
      description: 'description'
    },
    {
      urlToImage: 'urlToImage',
      title: 'title',
      description: 'description'
    },
    {
      urlToImage: 'urlToImage',
      title: 'title',
      description: 'description'
    }]
  });

  it('renders as a <div>', () => {
   const shallowWrapper = shallow(<Business />)
   expect(shallowWrapper.type()).to.eql('div');
 });

 it('should have 3 images to display', function () {
    expect(wrapper.find('img')).to.have.length(3);
  }); 

 it('should have 3 headings to display', function () {
    expect(wrapper.find('h3')).to.have.length(3);
  }); 

 it('should have 3 paragraphs to display', function () {
    expect(wrapper.find('p')).to.have.length(3);
  }); 

 it('should display 3 anchor tags', function () {
    expect(wrapper.find('a')).to.have.length(3);
  }); 
 
});

  

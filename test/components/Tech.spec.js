/* global define, it, describe */
import React from 'react';
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';


import Tech from '../../src/components/Tech';


describe('<Tech />', () => {

const wrapper = mount(<Tech />);

  wrapper.setState({
    tech: [{
      url: 'url',
      title: 'title',
      description: 'description',
      author: 'author'
    },
    {
      url: 'url',
      title: 'title',
      description: 'description',
      author: 'author'
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
    },
    {
      urlToImage: 'urlToImage',
      title: 'title',
      description: 'description'
    }]
  });




  it('renders as a <div>', () => {
   let shallowWrapper = shallow(<Tech />);
   expect(shallowWrapper.type()).to.eql('div');
 });

 it('should have 4 headings to display', function () {
    expect(wrapper.find('h3')).to.have.length(4);
  }); 

 it('should have 8 paragraphs to display', function () {
    expect(wrapper.find('p')).to.have.length(8);
  }); 

 it('should display 4 anchor tags', function () {
    expect(wrapper.find('a')).to.have.length(4);
  }); 

});

  

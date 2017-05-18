import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import { jsdom } from 'jsdom';


import Business from '../../components/Business';

global.document = jsdom('');
global.window = global.document.defaultView;

Object.keys(global.window).map(function(key) {
  if(!global[key]){
    global[key] = global.window.key;
  }
});

describe('<Business />', () => {

  const wrapper = mount(<Business />);

  wrapper.setState({
    business: [{
      urlToImage: 'sldkflsd',
      title: 'sdlfdsfds',
      description: 'kslnfds'
    },
    {
      urlToImage: 'sldkflsd',
      title: 'sdlfdsfds',
      description: 'kslnfds'
    },
    {
      urlToImage: 'sldkflsd',
      title: 'sdlfdsfds',
      description: 'kslnfds'
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

  

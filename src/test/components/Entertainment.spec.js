import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import Entertainment from '../../components/Entertainment';

describe('<Entertainment />', () => {
  const wrapper = mount(<Entertainment />);

  wrapper.setState({
    entertainment: [
    {
      urlToImage: 'urlToImage',
      url: 'url',
      title: 'title'
    },
    {
      urlToImage: 'urlToImage',
      url: 'url',
      title: 'title'
    }]
  });



  it('renders as a <div>', () => {
   let shallowWrapper = shallow(<Entertainment />);
   expect(shallowWrapper.type()).to.eql('div');
 });

 it('should have 2 images to display', function () {
    expect(wrapper.find('img')).to.have.length(2);
  }); 

 it('should have 2 headings to display', function () {
    expect(wrapper.find('h3')).to.have.length(2);
  }); 

 it('should display 2 anchor tags', function () {
    expect(wrapper.find('a')).to.have.length(2);
  }); 

});

  

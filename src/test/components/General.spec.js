import React from 'react';
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';
import General from '../../components/General';


describe('<General />', () => {

  const wrapper = mount(<General />);

  wrapper.setState({
    general: [{
      title: 'sdlfdsfds',
      description: 'kslnfds',
      url: 'url'
    },
    {
      title: 'sdlfdsfds',
      description: 'kslnfds',
      url: 'url'
    },
    {
      title: 'sdlfdsfds',
      description: 'kslnfds',
      url: 'url'
    }]
  });

  it('renders as a <div>', () => {
  	let shallowWrapper = shallow(<General />);
   expect(shallowWrapper.type()).to.eql('div');
 });


 it('should have 3 headings to display', function () {
    expect(wrapper.find('h3')).to.have.length(3);
  }); 

 it('should have 6 paragraphs to display', function () {
    expect(wrapper.find('p')).to.have.length(6);
  }); 

 it('should display 3 anchor tags', function () {
    expect(wrapper.find('a')).to.have.length(3);
  }); 

});

  

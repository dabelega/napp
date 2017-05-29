import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Source from '../../src/components/Source';

const shallowRenderer = new ReactShallowRenderer();
shallowRenderer.render(<Source />);

describe('Source Page', () => {
	describe('Tests for JSX', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<Source />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Render function', () => {
		it('Renders the root element', () => {
			const renderedRoot = shallowRenderer.getRenderOutput();
			expect(renderedRoot.type).toEqual("div");
			expect(renderedRoot.props.className).toEqual('wrapper');     
		});
    });

    

    describe('Interactions', () => {
        const wrapper = mount(<Source />)
		it('should set state correctly (Sources)', () => {
			wrapper.setState({
				sources: [{
					name: 'Source Name',
					sortBysAvailable:[
						'top',
						'latest'
					]
				}]
           }); 
           const li = wrapper.find('.key-sort'); 
           expect(li.text()).toBe('Source Nametoplatest');  
		});
    });

});
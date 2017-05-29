import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Article from '../../src/components/Article';

const shallowRenderer = new ReactShallowRenderer();
shallowRenderer.render(<Article />);

describe('Article Page', () => {
	describe('Tests for JSX', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<Article />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Render function', () => {
		it('Renders the root elements', () => {
			const renderedRoot = shallowRenderer.getRenderOutput();
			expect(renderedRoot.type).toEqual("div");
			expect(renderedRoot.props.className).toEqual('wrapper');    
		});
    });

    describe('Interactions', () => {
        const wrapper = mount(<Article />)
		it('should set state correctly (Articles)', () => {
			wrapper.setState({
				articles: [{
					urlToImage: 'urlToImage',
					title: 'Article Title',
					description: 'Article Description',
					author: 'Article Author'
				}]
           }); 
           const h3_title = wrapper.find('.truncate');
           const h3_author = wrapper.find('.article-author');
           const p = wrapper.find('.article-description');
           expect(h3_title.text()).toBe('Article Title');
           expect(h3_author.text()).toBe('by Article Author');  
           expect(p.text()).toBe('Article Description');    
		});

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
           const h2 = wrapper.find('.source-name'); 
           expect(h2.text()).toBe('Source Name');  
		});
    });


    
});
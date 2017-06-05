import React from 'react';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Articles from '../../src/components/Articles';


describe('Article Page', () => {
	let wrapper = shallow(<Articles params={{ id: 'abc', sort:'top' }} />);

	describe('Constructor', () => {
		it('should set initial states correctly', () => {
			
			const initialState = {
              articles: [],
              sources: []
            };
        expect(wrapper.state()).toEqual(initialState);  
        expect(wrapper.instance().fetchNewsArticles).toBeDefined();
        expect(wrapper.instance().fetchNewsSources).toBeDefined();
        expect(wrapper.instance().getArticles).toBeDefined();
		});
    });

    describe('Methods', () => {
		it('should be defined', () => {
			let wrapper = shallow(<Articles />); 
				expect(wrapper.instance().fetchNewsArticles).toBeDefined();
				expect(wrapper.instance().fetchNewsSources).toBeDefined();
				expect(wrapper.instance().getArticles).toBeDefined();
		});
		
    });

    describe('Render function', () => {

        const shallowRenderer = new ReactShallowRenderer();
        shallowRenderer.render(<Articles />);
        const wrapperMount = mount(<Articles match={{ params: { id: 'abc', sort:'top' } }} />)
        

		it('renders a snapshot', () => {
			const tree = renderer.create(<wrapper />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('Renders the root elements', () => {
			const renderedRoot = shallowRenderer.getRenderOutput();
			expect(renderedRoot.type).toEqual("div");
			expect(renderedRoot.props.className).toEqual('wrapper');    
		});

		it('should render state correctly (Articles)', () => {
			wrapperMount.setState({
				articles: [{
					urlToImage: 'urlToImage',
					title: 'Article Title',
					description: 'Article Description',
					author: 'Article Author'
				}]
           }); 
           const h3_title = wrapperMount.find('.truncate');
           const h3_author = wrapperMount.find('.article-author');
           const p = wrapperMount.find('.article-description');
           expect(h3_title.text()).toBe('Article Title');
           expect(h3_author.text()).toBe('by Article Author');  
           expect(p.text()).toBe('Article Description');    
		});
		
    });
    
});
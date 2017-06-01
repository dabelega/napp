import React from 'react';
import renderer from 'react-test-renderer'
import About from '../../src/components/About';


describe('About Page', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<About />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
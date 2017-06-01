import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../../src/components/containers/Home';


describe('Home Page', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<Home />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../../src/components/containers/Home';


describe('Home Page', () => {
	describe('Home', () => {
		let location = {
			getState() {
              return { location: '/' }
			}
		};
		it('renders a snapshot', () => {
          const tree = renderer.create(<Home location={location} />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });
});
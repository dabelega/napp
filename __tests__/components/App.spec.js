import React from 'react';
import renderer from 'react-test-renderer'
import App from '../../src/components/App';


describe('Contact Us Page', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<App />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
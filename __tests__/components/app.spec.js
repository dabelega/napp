import React from 'react';
import renderer from 'react-test-renderer'
import app from '../../src/components/app';


describe('<App />', () => {
	describe('App', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<app />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });
});
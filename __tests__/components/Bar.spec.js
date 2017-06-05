import React from 'react';
import renderer from 'react-test-renderer'
import Bar from '../../src/components/Bar';


describe('Bar component', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<Bar />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
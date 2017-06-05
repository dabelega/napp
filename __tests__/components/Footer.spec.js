import React from 'react';
import renderer from 'react-test-renderer'
import Footer from '../../src/components/Footer';


describe('Contact Us Page', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<Footer />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
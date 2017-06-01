import React from 'react';
import renderer from 'react-test-renderer'
import ContactUs from '../../src/components/ContactUs';


describe('Contact Us Page', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<ContactUs />).toJSON();
          expect(tree).toMatchSnapshot();
		});
});
import React from 'react';
import renderer from 'react-test-renderer'
import AboutSlider from '../../src/components/AboutSlider';
import SourceSlider from '../../src/components/SourceSlider';
import ContactUsSlider from '../../src/components/ContactUsSlider'

describe('Sliders', () => {
	describe('About Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<AboutSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Source Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<SourceSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Contact Us Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<ContactUsSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });
});
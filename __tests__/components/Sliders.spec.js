import React from 'react';
import renderer from 'react-test-renderer'
import AboutSlider from '../../src/components/AboutSlider';
import SourcesSlider from '../../src/components/SourcesSlider';
import ContactUsSlider from '../../src/components/ContactUsSlider';
import Slider from '../../src/components/Slider';

describe('Sliders', () => {
	describe('About Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<AboutSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Source Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<SourcesSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Contact Us Slider', () => {
		it('renders a snapshot', () => {
          const tree = renderer.create(<ContactUsSlider />).toJSON();
          expect(tree).toMatchSnapshot();
		});
    });

    describe('Home Slider', () => {
    it('renders a snapshot', () => {
          const tree = renderer.create(<Slider />).toJSON();
          expect(tree).toMatchSnapshot();
    });
    });
});
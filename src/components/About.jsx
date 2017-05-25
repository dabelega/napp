import React from 'react';
import '../../public/sass/styles.scss';
import Header from '../components/Header';
import AboutSlider from '../components/AboutSlider';
import Footer from '../components/Footer';

const About = () => (
  <div className="wrapper">
    <div className="center">
      <Header />
      <AboutSlider />
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse eget tortor nisi. Donec eleifend congue 
          lacus, sit amet dapibus nisl. Pellentesque orci lorem, dapibus non 
          ornare vitae, iaculis eu ante. Cras a eros justo. Duis cursus 
          tristique ex vel fringilla. 
          Cras id aliquet leo. Aenean ex velit, aliquam quis pretium in, 
          tempor vel neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse eget tortor nisi. Donec eleifend congue 
          lacus, sit amet dapibus nisl. Pellentesque orci lorem, dapibus non 
          ornare vitae, iaculis eu ante. Cras a eros justo. Duis cursus 
          tristique ex vel fringilla. 
          Cras id aliquet leo. Aenean ex velit, aliquam quis pretium in, 
          tempor vel neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse eget tortor nisi. Donec eleifend congue 
          lacus, sit amet dapibus nisl. Pellentesque orci lorem, dapibus non 
          ornare vitae, iaculis eu ante. Cras a eros justo. Duis cursus 
          tristique ex vel fringilla. 
          Cras id aliquet leo. Aenean ex velit, aliquam quis pretium in, 
          tempor vel neque.
        </p>
      </div>
      <Footer />
    </div>
  </div>
);

export default About;

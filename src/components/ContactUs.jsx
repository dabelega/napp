import React from 'react';
import '../../sass/styles.scss';
import Header from '../components/Header';
import ContactUsSlider from '../components/ContactUsSlider';
import Footer from '../components/Footer';

const ContactUs = () => (
  <div className="wrapper">
    <div className="center">
      <Header />
      <ContactUsSlider />
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
          Phone: +2348146350497, +234883344585,<br />
          Email: info@thenappjournal.com <br />
          Address: 215, Ken Adams Street, Ikoyi Lagos.

        </p>
      </div>
      <Footer />
    </div>
  </div>
);

export default ContactUs;




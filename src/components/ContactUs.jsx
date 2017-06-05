import React from 'react';
import '../../public/sass/styles.scss';
import Header from '../components/Header';
import ContactUsSlider from '../components/ContactUsSlider';
import Footer from '../components/Footer';


/**
 * Stateless component
 * Simply renders contact information
 *
 * @return {void}
 */
const ContactUs = () => (
  <div className="wrapper">
    <div className="center">
      <Header />
      <ContactUsSlider />
      <div className="about-text">
        <p>
          You can reach us at:
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




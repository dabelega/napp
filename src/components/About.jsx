import React from 'react';
import '../../public/sass/styles.scss';
import Header from '../components/Header';
import AboutSlider from '../components/AboutSlider';
import Footer from '../components/Footer';

/**
 * Stateless component
 * Simply renders information
 */
const About = () => (
  <div className="wrapper">
    <div className="center">
      <Header />
      <AboutSlider />
      <div className="about-text">
        <div className="row">
          <p className="col-md-3">
            <strong>LEADERSHIP</strong><br />
            <strong>Chief Executive Officer</strong>: Ken Adams<br />
            <strong>Editor-in-Chief</strong>: Regina Philange<br />
            <strong>Head of Product</strong>: Julia Roberts<br />
            <strong>Head of Video</strong>: Gunther Hayes<br />
            <strong>Chief of Staff</strong>: Phoebe Buffay<br />
            <strong>Head of Business Development</strong>: Mark Edom<br />
            

          </p>
          <p className="col-md-3">
            <strong>EDITORIAL</strong><br />
            <strong>Editorial Director, Lifestyle</strong>: Ross Roberts<br />
            <strong>News Director</strong>: Emeka Nwankwo<br />
            <strong>
            Editorial Director, News & Product
            </strong>: Whitney Hoyt<br />
            <strong>Director of Growth & Analytics</strong>: Memuna Haruna<br />
            <strong>Global Editorial Director</strong>: Audax Achirinah<br />
            <strong>DC Bureau Chief</strong>: JohnBosco Onyia<br />
          </p>
          <p className="col-md-3">
            <strong>DISTRIBUTION</strong><br />
            <strong>Global Social Media Editor</strong>: Ethan Klapper<br />
            <strong>Social Media Editors</strong>: Mayowa Makinde<br />
            <strong>
            Associate Social Media Editor
            </strong>: Adebayo Simulator<br />
            <strong>
             Associate Editors, News & Emerging Platforms
            </strong>: Kenny SuccessTeam

          </p>

          <p className="col-md-3">
            <strong>NEWSDESK</strong><br />
            <strong>Managing Editor</strong>: Robyn Malcolm<br />
            <strong>Senior Editor</strong>: Ani Vrabel<br />
            <strong>News Editors</strong>: Alexander Eichler, Aurora Ellis<br />
            <strong>Mari Hayman, Kurt Heine, Grace Maalouf, Bobbi Olson</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default About;

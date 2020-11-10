import React from 'react';

import SocialContainer from '../SocialContainer/SocialContainer';
import ContactForm from '../ContactForm/ContactForm.component';

import './Footer.styles.scss';

const Footer = () => (
  <footer>
    <SocialContainer />
    <ContactForm title='Contact Me' />
  </footer>
);

export default Footer;
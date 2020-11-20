import React from 'react';

import SocialContainer from '../SocialContainer/SocialContainer.component';
import ContactForm from '../ContactForm/ContactForm.component';

import './Footer.styles.scss';

const Footer = () => {
  const currentDate = new Date(Date.now());

  return (
    <footer>
        <ContactForm />
        <div className='footer-links'>
          <p className='copyright'>
            Copyright &#169; {currentDate.getFullYear()} Bradley Mark - All rights reserved.
          </p>
          <SocialContainer />
        </div>
    </footer>
)};

export default Footer;
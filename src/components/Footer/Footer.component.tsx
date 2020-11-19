import React from 'react';

import SocialContainer from '../SocialContainer/SocialContainer.component';
import ContactForm from '../ContactForm/ContactForm.component';

import './Footer.styles.scss';

const Footer = () => {
  const currentDate = new Date(Date.now());

  return (
  <>
    <footer>
      <div className='footer-content'>
        <SocialContainer />
        <ContactForm />
      </div>
      <p className='copyright'>
        Copyright &#169; {currentDate.getFullYear()} Bradley Mark - All rights reserved.
      </p>
    </footer>
  </>
)};

export default Footer;
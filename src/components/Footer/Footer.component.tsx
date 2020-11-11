import React from 'react';

import SocialContainer from '../SocialContainer/SocialContainer';
import ContactForm from '../ContactForm/ContactForm.component';

import './Footer.styles.scss';

const Footer = () => {
  const currentDate = new Date(Date.now());

  return (
  <>
    <footer>
      <SocialContainer />
      <ContactForm title='Contact Me' />
    </footer>
      <p className='copyright'>
        Copyright &#169; {currentDate.getFullYear()} Bradley Mark - All rights reserved.
      </p>
  </>
)};

export default Footer;
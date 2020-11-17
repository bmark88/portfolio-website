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
        {/* <div>
          <ul className='about-core-values'>
            <li>
              <span>Kaizen</span> - Continuous Learning
            </li>
            <li>
              <span>Grit</span> - Never Give Up, and turning im
              <span className='emphasize-text'>possible</span>
            </li>
            <li>
              <span>Ownership</span> - I own my wins, but I also own my stakes.
            </li>
            <li>
              <span>Take Action Attitude</span> - Perfection doesn't exist
            </li>
          </ul>
        </div>
        <div className='about-hobbies'>
          <ul>
            <li>Weight Lifting</li>
            <li>Travel</li>
            <li>Reading</li>
            <li>Trying new things</li>
            <li></li>
          </ul>
        </div> */}
        <div className='test'>
          <SocialContainer />
          <ContactForm />
        </div>
      </div>
      <p className='copyright'>
        Copyright &#169; {currentDate.getFullYear()} Bradley Mark - All rights reserved.
      </p>
    </footer>
  </>
)};

export default Footer;
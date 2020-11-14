import React from 'react';
import profilePic from '../../assets/images/ProfilePic.png';

import './About.styles.scss';

const About = () => (
  <section id='about'>
    <div className='container'>
      <h2>About</h2>
      <div>
        <h3>Summary</h3>
        <img id='profile-pic' src={profilePic} />
      </div>
      <div>
        <h3>Talents</h3>
      </div>
      <div>
        <h3>Philosophies</h3>
        <ul className='philosophies'>
          <li>
            <span>Kaizen</span> - Continuous Learning
          </li>
          <li>
            <span>Grit</span> - Never Give Up, and turning im<span className='possible'>possible</span>
          </li>
          <li>
            <span>Ownership</span> - I own my wins, but I also own my mistakes.
          </li>
          <li>
            <span>Take Action Attitude</span> - Perfection doesn't exist
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
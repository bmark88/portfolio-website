import React, { useState } from 'react';
import profilePic from '../../assets/images/ProfilePic.png';

import './About.styles.scss';

const About = (props: any) => {
  const [aboutSection, setAboutSection] = useState({
    currentAboutSection: 'summary'
  });
  
  const aboutHeaderSubheadings = ['summary', 'talents', 'philosophies'];

  return (
    <section id='about'>
      <div className='container'>
        <div className='about'>
          <aside><h2>About</h2></aside>
          <ul className='about-header'>
            {
              aboutHeaderSubheadings.map(item => 
                <li onClick={() => {
                  setAboutSection({ ...aboutSection, currentAboutSection: item})
                }}>
                  {item}
                </li>
              )
            }
          </ul>
          {
            aboutSection.currentAboutSection === 'summary' &&
            <section className='about-summary'>
              <div>
                <img id='profile-pic' src={profilePic} />
              </div>
              <p>I am a paragraph</p>
            </section>
          }
          {
            aboutSection.currentAboutSection === 'talents' &&
            <section>
              <ul>
                <li>
                  <span>Coding</span>
                </li>
              </ul>
            </section>
          }
          {
            aboutSection.currentAboutSection === 'philosophies' &&
            <section>
              <ul className='philosophies'>
                <li>
                  <span>Kaizen</span> - Continuous Learning
                </li>
                <li>
                  <span>Grit</span> - Never Give Up, and turning im<span className='possible'>possible</span>
                </li>
                <li>
                  <span>Ownership</span> - I own my wins, but I also own my stakes.
                </li>
                <li>
                  <span>Take Action Attitude</span> - Perfection doesn't exist
                </li>
              </ul>
            </section>
          }
        </div>
      </div>
    </section>
  )
};

export default About;
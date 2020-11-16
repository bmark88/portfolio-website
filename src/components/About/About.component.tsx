import React, { useState } from 'react';
import profilePic from '../../assets/images/ProfilePic.png';

import ToggleItem from '../ToggleItem/ToggleItem.component';
import './About.styles.scss';

const About = () => {
  const [aboutSection, setAboutSection] = useState({
    currentAboutSection: 'summary'
  });
  
  const aboutHeaderSubheadings = ['summary', 'core values', 'hobbies'];

  return (
    <section id='about'>
      <div className='container'>
        <div className='about'>
          <h2>About</h2>
          <ul className='about-header hover-underline'>
            <ToggleItem 
              items={aboutHeaderSubheadings} 
              state={aboutSection} 
              setAboutSection={setAboutSection} 
              type={'about'} 
            />
          </ul>
          <section className='about-content'>
          <div>
            <img id='profile-pic' src={profilePic} />
          </div>
          {
            aboutSection.currentAboutSection === 'summary' &&
            <div className='about-summary'>
              <div className={'summary-content'}>
                <p>
                I'm a Full Stack Software Developer who loves to build things that solves <span className='emphasize-text'>real world problems.</span> Writing code is the road to my destination called automation.
                </p>
                <p>
                  Prior to this I was involved in consultative selling of B2B SaaS solutions, which led to increased exposure to various software. This allowed me to stumble across my passion for technology.
                </p>
                <div className='summary-rules'>
                  <div>
                    <p>In sales, I lived by this rule:</p>
                    <ul>
                      <li><span>A</span>lways</li>
                      <li><span>B</span>e</li>
                      <li><span>C</span>losing</li>
                    </ul>
                  </div>
                  <div>
                    <p>Now, I live by this rule:</p>
                    <ul>
                      <li><span>A</span>lways</li>
                      <li><span>B</span>e</li>
                      <li><span>C</span>oding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            aboutSection.currentAboutSection === 'hobbies' &&
            <div className='about-hobbies'>
              <ul>
                <li>Weight Lifting</li>
                <li>Travel</li>
                <li>Reading</li>
                <li>Trying new things</li>
                <li></li>
              </ul>
            </div>
          }
          {
            aboutSection.currentAboutSection === 'core values' &&
            <div>
              <ul className='about-core-values'>
                <li>
                  <span>Kaizen</span> - Continuous Learning
                </li>
                <li>
                  <span>Grit</span> - Never Give Up, and turning im<span className='emphasize-text'>possible</span>
                </li>
                <li>
                  <span>Ownership</span> - I own my wins, but I also own my stakes.
                </li>
                <li>
                  <span>Take Action Attitude</span> - Perfection doesn't exist
                </li>
              </ul>
            </div>
          }
          </section>
        </div>
      </div>
    </section>
  )
};

export default About;
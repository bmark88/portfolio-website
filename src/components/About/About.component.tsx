import React, { useState } from 'react';
import profilePic from '../../assets/images/ProfilePic.png';

import './About.styles.scss';

const About = () => {
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
              aboutHeaderSubheadings.map((item, index) => 
                <li key={index} onClick={() => {
                  setAboutSection({ ...aboutSection, currentAboutSection: item})
                }}>
                  {item}
                </li>
              )
            }
          </ul>
          <section className='about-content'>
          <div>
            <img id='profile-pic' src={profilePic} />
          </div>
          {
            aboutSection.currentAboutSection === 'summary' &&
            <section className='about-summary'>
              {/* <div>
                <img id='profile-pic' src={profilePic} />
              </div> */}
              <div className={'summary-content'}>
                <p>
                  Calvin, why do you keep calling me Calvin? Well, Marty, I'm almost eighteen-years-old, it's not like I've never parked before. Hey Dad, George, hey, you on the bike. Uh, no, no, no, no. What are you looking at, butt-head? Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it.
                </p>
                <p>
                  Oh yes sir. Yeah, well uh, lets keep this brain melting stuff to ourselves, okay? What's that thing he's on? Marty, don't go this way. Strickland's looking for you. If you're caught it'll be four tardies in a row. Our first television set, Dad just picked it up today. Do you have a television?
                </p>
              </div>
            </section>
          }
          {
            aboutSection.currentAboutSection === 'talents' &&
            <section className='about-talents'>
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
              <ul className='about-philosophies'>
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
          </section>
        </div>
      </div>
    </section>
  )
};

export default About;
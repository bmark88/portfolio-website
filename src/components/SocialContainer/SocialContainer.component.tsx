import React from 'react';

import SocialLink from '../SocialLink/SocialLink.component';
import { GitHub, LinkedIn } from '@material-ui/icons';

import './SocialContainer.styles.scss';

const SocialContainer = () => (
  <div className='social-container'>
    {/* <div>
      <div>
        <ul>
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
      <div>
        <ul>
          <li>Weight Lifting</li>
          <li>Travel</li>
          <li>Reading</li>
          <li>Trying new things</li>
          <li></li>
        </ul>
      </div>
    </div>
     */}
    <SocialLink 
      href='https://github.com/bmark88' 
      title='GitHub'
    >
      <GitHub />
    </SocialLink>
    <SocialLink 
      href='https://www.linkedin.com/in/bradleymark/' 
      title='LinkedIn'
    >
      <LinkedIn />
    </SocialLink>
  </div>
);

export default SocialContainer;
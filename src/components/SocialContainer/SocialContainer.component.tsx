import React from 'react';

import SocialLink from '../SocialLink/SocialLink.component';
import { GitHub, LinkedIn } from '@material-ui/icons';

import './SocialContainer.styles.scss';

const SocialContainer = () => (
  <div className='social-container'>
    <SocialLink href='https://github.com/bmark88' title='GitHub'>
      <GitHub />
    </SocialLink>
    <SocialLink href='https://www.linkedin.com/in/bradleymark/' title='LinkedIn'>
      <LinkedIn />
    </SocialLink>
  </div>
);

export default SocialContainer;
import React from 'react';

import SocialContainerItem from '../SocialContainerItem/SocialContainerItem.component';
import { GitHub, LinkedIn } from '@material-ui/icons';

import './SocialContainer.styles.scss';

const SocialContainer = () => (
  <div className='social-container'>
    <SocialContainerItem href='https://github.com/bmark88'>
      <GitHub />
    </SocialContainerItem>
    <SocialContainerItem href='https://www.linkedin.com/in/bradleymark/'>
      <LinkedIn />
    </SocialContainerItem>
  </div>
);

export default SocialContainer;
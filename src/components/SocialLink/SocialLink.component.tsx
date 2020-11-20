import React from 'react';

import './SocialLink.styles.scss';

const SocialLink = (props: any) => {
  const { children } = props;

  return (
    <div className='social-link'>
      <p>Connect with me on: </p>
      {children}
    </div>
  );
};

export default SocialLink;
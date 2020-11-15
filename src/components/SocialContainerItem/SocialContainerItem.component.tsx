import React from 'react';

import './SocialContainerItem.styles.scss';

const SocialContainerItem = (props: any) => {
  const { href, children, title } = props;

  return (
    <div className='social-link'>
      <a href={href} target='_blank'>{children}</a>
      <p>Connect with me on</p>
      <a href={href} target='_blank'>{title}.</a>
    </div>
  );
};

export default SocialContainerItem;
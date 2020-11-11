import React from 'react';

import './SocialContainerItem.styles.scss';

const SocialContainerItem = (props: any) => {
  const { href, children } = props;

  return (
    <div>
      <a href={href} target='_blank'>{children}</a>
    </div>
  );
};

export default SocialContainerItem;
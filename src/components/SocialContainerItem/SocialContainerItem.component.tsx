import React from 'react';

import './SocialContainerItem.styles.scss';

const SocialContainerItem = (props: any) => {
  const { href, children, title } = props;

  return (
    <div>
      <a href={href} target='_blank'>{children}</a>
      Connect with me on {title}.
    </div>
  );
};

export default SocialContainerItem;
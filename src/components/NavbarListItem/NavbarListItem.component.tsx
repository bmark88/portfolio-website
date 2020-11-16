import React from 'react';

import './NavbarListItem.styles.scss';

const NavbarListItem = (props: any) => {
  const { href, pageName } = props;

  return (
    <li>
      <a href={`#${href}`} className='navbar-list-item'>
        {pageName}
      </a>
    </li>
  );
};

export default NavbarListItem;
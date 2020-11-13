import React from 'react';
// import { Link } from 'gatsby';

import './NavbarListItem.styles.scss';

const NavbarListItem = (props: any) => {
  const { href, pageName } = props;

  return (
    <div>
      <a href={`#${href}`} className='navbar-list-item'>
        {pageName}
      </a>
    </div>
  );
};

export default NavbarListItem;
import React from 'react';
import { Link } from 'gatsby';

import './NavbarListItem.styles.scss';

const NavbarListItem = (props: any) => {
  const { route, pageName } = props;

  return (
    <div>
      <Link to={route} className='navbar-list-item'>
        {pageName}
      </Link>
    </div>
  );
};

export default NavbarListItem;
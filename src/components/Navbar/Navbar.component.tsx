import React from 'react';

import NavbarListItem from '../NavbarListItem/NavbarListItem.component';

import './Navbar.styles.scss';

const Navbar = () => (
  <nav className='nav-container'>
    <NavbarListItem route='/projects' pageName='Projects' />
    <NavbarListItem route='/about' pageName='About' />
    <NavbarListItem route='/contact' pageName='Contact' />
  </nav>
);

export default Navbar;
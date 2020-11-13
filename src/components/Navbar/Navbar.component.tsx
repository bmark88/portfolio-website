import React from 'react';

import NavbarListItem from '../NavbarListItem/NavbarListItem.component';

import './Navbar.styles.scss';

const Navbar = () => (
  <nav className='nav-container'>
    <NavbarListItem href='projects' pageName='Projects' />
    <NavbarListItem href='about' pageName='About' />
    <NavbarListItem href='contact' pageName='Contact' />
  </nav>
);

export default Navbar;
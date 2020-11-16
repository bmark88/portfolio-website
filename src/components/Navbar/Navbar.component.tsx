import React from 'react';

import NavbarListItem from '../NavbarListItem/NavbarListItem.component';

import './Navbar.styles.scss';

const navItems = [
  {href: 'projects', pageName: 'Projects'},
  {href: 'about', pageName: 'About'},
  {href: 'contact', pageName: 'Contact'}
];

const Navbar = () => (
  <nav className='nav-container'>
  <ul className='nav-items hover-underline'>
      {navItems.map(item => 
        <NavbarListItem 
          href={item.href} 
          pageName={item.pageName} 
        />
      )}
    </ul>
  </nav>
);

export default Navbar;
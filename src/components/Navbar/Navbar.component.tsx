import React from 'react';

import NavbarListItem from '../NavbarListItem/NavbarListItem.component';

import './Navbar.styles.scss';

const navItems = [
  {href: 'about', pageName: 'About'},
  {href: 'projects', pageName: 'Projects'},
  {href: 'contact', pageName: 'Contact'}
];

const Navbar = () => (
  <nav className='nav-container'>
  <ul className='nav-items hover-underline'>
      {navItems.map(item => 
        <NavbarListItem
          key={item.pageName}
          href={item.href} 
          pageName={item.pageName} 
        />
      )}
    </ul>
  </nav>
);

export default Navbar;
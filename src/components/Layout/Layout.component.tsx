import React from 'react';

import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';

const Layout = (props: any) => { 
  const { children } = props;

  return (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)}; 

export default Layout;
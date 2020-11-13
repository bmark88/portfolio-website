import React from 'react';

import Layout from '../components/Layout/Layout.component';
import About from '../components/About/About.component';
import Projects from '../components/Projects/Projects.component';
import Contact from '../components/Contact/Contact.component';
import SEO from '../components/seo';

import './index.styles.scss';

const IndexPage = () => (
  <Layout>
      <SEO title='Portfolio' />
      <About />
      <Projects />
  </Layout>
);

export default IndexPage;
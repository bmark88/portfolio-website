import React from 'react';

import Layout from '../components/Layout/Layout.component';
import Projects from '../components/Projects/Projects.component';
import SEO from '../components/seo';

import './index.styles.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Portfolio' />
    <Projects />
  </Layout>
);

export default IndexPage;
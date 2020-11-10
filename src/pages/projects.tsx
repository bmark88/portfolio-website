import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Link to="/">Home</Link>
  </Layout>
);

export default SecondPage;

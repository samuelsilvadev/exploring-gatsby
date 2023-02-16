import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout title="Home Page with Gatsby">
      <Link to="/about">Go to About</Link>
    </Layout>
  );
}

export default IndexPage;

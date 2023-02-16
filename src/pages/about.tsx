import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout title="About">
      <Link to="/">Go to Home</Link>
    </Layout>
  );
}

export default AboutPage;

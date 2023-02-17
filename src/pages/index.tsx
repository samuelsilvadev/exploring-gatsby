import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import RecentPosts from '../components/RecentPosts';

function IndexPage() {
  return (
    <Layout title="Home Page with Gatsby">
      <Link to="/about">Go to About</Link>
      <RecentPosts />
    </Layout>
  );
}

export default IndexPage;

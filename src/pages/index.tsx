import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';

function IndexPage() {
  return (
    <>
      <Head />
      <Header />
      <main>
        <h1>Home Page with Gatsby</h1>
        <Link to="/about">Go to About</Link>
      </main>
    </>
  );
}

export default IndexPage;

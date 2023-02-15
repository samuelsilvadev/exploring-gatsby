import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';

function AboutPage() {
  return (
    <>
      <Head title="About gatsby" />
      <Header />
      <main>
        <h1>About</h1>
        <Link to="/">Go to Home</Link>
      </main>
    </>
  );
}

export default AboutPage;

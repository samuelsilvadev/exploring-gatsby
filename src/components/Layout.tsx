import React from 'react';
import type { ReactNode } from 'react';
import Head from './Head';
import Header from './Header';
import '../styles/global.css';

function Layout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Head title={title} />
      <Header />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}

export default Layout;

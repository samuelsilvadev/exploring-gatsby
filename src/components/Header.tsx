import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

function Header() {
  const data = useStaticQuery<{
    site?: { siteMetadata?: { title: string } };
  }>(graphql`
    query GetTitleSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site?.siteMetadata ?? {};

  return (
    <header
      style={{
        background: 'rebeccapurple',
        color: 'white',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <Link to="/" style={{ color: 'inherit' }}>
        {title}
      </Link>
    </header>
  );
}

export default Header;

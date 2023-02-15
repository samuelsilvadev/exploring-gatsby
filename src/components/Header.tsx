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
    <header>
      <Link to="/">{title}</Link>
    </header>
  );
}

export default Header;

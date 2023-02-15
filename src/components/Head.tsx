import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

function Head(props: { title?: string; description?: string }) {
  const data = useStaticQuery<{
    site?: {
      siteMetadata?: {
        title: string;
        description: string;
        siteUrl: string;
        image: string;
      };
    };
  }>(graphql`
    query GetCompleteSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const metadata = data?.site?.siteMetadata;

  const title = props.title || metadata?.title;
  const description = props.description || metadata?.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Head;

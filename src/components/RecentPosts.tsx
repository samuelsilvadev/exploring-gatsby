import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';

function RecentPosts() {
  const data = useStaticQuery<{
    allMdx?: {
      nodes?: {
        slug: string;
        id: string;
        frontmatter: { date: String; title: string };
      }[];
    };
  }>(graphql`
    query GetAllPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          id
          frontmatter {
            date(fromNow: true)
            title
          }
        }
      }
    }
  `);

  const posts = data?.allMdx?.nodes ?? [];
  const renderedPosts: ReactNode[] = [];

  for (const {
    id,
    slug,
    frontmatter: { date, title },
  } of posts) {
    renderedPosts.push(
      <li key={id}>
        <article>
          <Link to={slug}>
            <h2>{title}</h2>
          </Link>
          <h3>
            <small>{date}</small>
          </h3>
        </article>
      </li>,
    );
  }

  return (
    <>
      <h2>My recent posts</h2>
      <ul>{renderedPosts}</ul>
    </>
  );
}

export default RecentPosts;

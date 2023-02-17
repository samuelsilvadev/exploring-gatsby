import { PageProps } from 'gatsby';
import React from 'react';
import Layout from './Layout';

function PostLayout({
  children,
  ...props
}: { children: React.ReactNode } & PageProps<
  unknown,
  { frontmatter?: { title: string } }
>) {
  const { title = 'Loading Post...' } = props.pageContext.frontmatter ?? {};

  return <Layout title={title}>{children}</Layout>;
}

export default PostLayout;

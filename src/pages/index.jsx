import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>

    <ul>
      {data.allMicrocmsBlog.edges.map(({ node }) => (
        <li key={node.blogId}>
          <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query{
    allMicrocmsBlog{
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;

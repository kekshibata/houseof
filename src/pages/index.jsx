import * as React from 'react';
import { graphql, Link } from 'gatsby';

/* import Burger from '@animated-burgers/burger-squeeze'; */
import Layout from '../components/layout';
import SEO from '../components/seo';
/* import ToggleButton from '../components/atoms/ToggleButton'; */

// React Component
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css';

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

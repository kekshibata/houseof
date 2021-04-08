import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
} from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogCard from '../components/blog-card';

const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />
    <Container px={7} py={[16, 20, 28]}>

      {data.allMicrocmsBlog.edges.map(({ node }) => (

        <BlogCard key={node.blogId} imageUrl={node.image?.url} writer={node.writer.name} slug={node.category.slug} blogId={node.blogId} title={node.title} description={node.description} />
      ))}

    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query{
    allMicrocmsBlog{
      edges {
        node {
          category {
            slug
            name
          }
          image {
            url
          }
          blogId
          title
          description
          writer {
            name
          }
        }
      }
    }
  }
`;

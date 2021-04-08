import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Container, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Link from '../components/link';
import BlogCard from '../components/blog-card';

const IndexPage = ({ data }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (

    <Layout>
      <SEO title="Home" />
      <Container px={7} py={[16, 20, 28]}>

        {data.allMicrocmsBlog.edges.map(({ node }) => (

          <BlogCard key={node.blogId} imageUrl={node.image?.url} writer={node.writer.name} slug={node.category.slug} blogId={node.blogId} title={node.title} description={node.description} />
        ))}

      </Container>
    </Layout>
  );
};

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

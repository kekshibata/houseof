import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Container, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Link from '../components/link';

const IndexPage = ({ data }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (

    <Layout>
      <SEO title="Home" />
      <Container px={7} py={[16, 20, 28]}>

        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <Box key={node.blogId} p={5} w="100%">

            <Heading as="h3" fontSize="lg" color={headingColor}><Link to={`/${node.category.slug}/${node.blogId}`}>{node.title}</Link></Heading>

          </Box>
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
          blogId
          title
          category {
            slug
          }
        }
      }
    }
  }
`;

import * as React from 'react';
import { graphql, Link } from 'gatsby';
import {
  Container, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (

    <Layout>
      <SEO title="Home" />
      <Container py={[16, 20, 28]}>
        <Heading as="h1" color={headingColor}>Hello World</Heading>

        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <Box key={node.blogId} p={5} w="100%">

            <Heading as="h3" fontSize="lg" color={headingColor}><Link to={`/blog/${node.blogId}`}>{node.title}</Link></Heading>

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
        }
      }
    }
  }
`;

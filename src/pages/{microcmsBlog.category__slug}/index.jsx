import * as React from 'react';
import { graphql } from 'gatsby';
import { Container, Heading } from '@chakra-ui/react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Categories = ({ data }) => (
  <Layout>
    <SEO title="writers" />
    <Container py={[16, 20, 28]}>
      <Heading as="h1">
        Categories Page
      </Heading>

      {data.allMicrocmsBlog.edges.map(({ node }) => (
        <Box key={node.blogId} p={5} w="100%">

          <Heading as="h3" fontSize="lg" color={headingColor}><Link to={`/${node.category.slug}/${node.blogId}`}>{node.title}</Link></Heading>

        </Box>
      ))}
    </Container>
  </Layout>
);

export default Categories;

export const query = graphql`
  query ($id: String!) {
    allMicrocmsBlog (filter: {category: {id: {eq: $id}}}) {
      edges {
        node {
          title
          blogId
          category {
            slug
            name
            id
          }
        }
      }
    }
  }
`;

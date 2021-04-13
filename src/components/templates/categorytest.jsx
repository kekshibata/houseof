import * as React from 'react';
import { graphql } from 'gatsby';

import { Container, Heading } from '@chakra-ui/react';

import Layout from '../layout';
import SEO from '../seo';

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsBlog(
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;

const CategoryPage = ({ data, pageContext }) => (
  <Layout>
    <SEO title="writers" />
    <Container py={[16, 20, 28]}>
      <Heading as="h1">
        Categories Page
      </Heading>
    </Container>
  </Layout>
);

export default CategoryPage;

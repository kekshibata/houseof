import * as React from 'react';

import { Container, Heading } from '@chakra-ui/react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Categories = () => (
  <Layout>
    <SEO title="writers" />
    <Container py={[16, 20, 28]}>
      <Heading as="h1">
        Categories Page
      </Heading>
    </Container>
  </Layout>
);

export default Categories;

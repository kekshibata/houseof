import * as React from 'react';
import { Container, Heading, useColorModeValue } from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Layout>
      <SEO title="About" />
      <Container py={[16, 20, 28]}>
        <Heading as="h1" color={headingColor}>About page</Heading>
      </Container>
    </Layout>
  );
};

export default About;

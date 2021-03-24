import * as React from 'react';
import { graphql } from 'gatsby';

import {
  Container, Box, Heading, Text, Link, useColorModeValue,
} from '@chakra-ui/react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const WriterPage = ({ data }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Layout>
      <SEO title={data.microcmsWriter.name} />
      <Container py={[16, 20, 28]}>
        <Box>
          <Heading color={headingColor}>{data.microcmsWriter.name}</Heading>
          <Text>{data.microcmsWriter.bio}</Text>
          <Link href={`https://twitter.com/${data.microcmsWriter.twitter}`} isExternal>twitter</Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default WriterPage;

export const query = graphql`
    query ($id:String!) {
        microcmsWriter (id: {eq: $id}) {
            bio
            name
            twitter
        }
    }
`;

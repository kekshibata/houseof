import * as React from 'react';
import { graphql, Link } from 'gatsby';
import {
  Container, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Writers = ({ data }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Layout>
      <SEO title="writers" />
      <Container py={[16, 20, 28]}>
        <Heading as="h1">
          Writers Page
        </Heading>

        {data.allMicrocmsWriter.edges.map(({ node }) => (
          <Box key={node.writerId} p={5} w="100%">

            <Heading as="h3" fontSize="lg" color={headingColor}>
              <Link to={`/writers/${node.writerId}`}>
                {node.name}
              </Link>
            </Heading>

          </Box>
        ))}

      </Container>
    </Layout>
  );
};

export default Writers;

export const query = graphql`
  query {
    allMicrocmsWriter {
      edges {
        node {
          name
          writerId
        }
      }
    }
  }
`;

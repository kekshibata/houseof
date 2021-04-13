import * as React from 'react';
import { graphql } from 'gatsby';

import {
  Container, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';

import Layout from '../layout';
import SEO from '../seo';
import Link from '../link';

const Category = ({ data }) => {
  const headingColor = useColorModeValue('headingColor', 'dark.headingColor');

  return (

    <Layout>
      <SEO title="category" />
      <Container py={[16, 20, 28]}>
        <Heading as="h1">
          {/* {data.microcmsCategory.name} */}
          の記事一覧
        </Heading>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <Box key={node.blogId} p={5} w="100%">

            <Heading as="h3" fontSize="lg" color={headingColor}>
              {/* <Link to={`/${node.category.slug}/${node.blogId}`}> */}
              {node.title}
              {/* </Link> */}
            </Heading>

          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query($skip:Int!, $limit: Int!){
    allMicrocmsBlog(skip:$skip, limit:$limit){
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;

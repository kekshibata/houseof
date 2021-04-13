import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
} from '@chakra-ui/react';

import Layout from '../layout';
import SEO from '../seo';
import BlogCard from '../blog-card';

const IndexPage = ({ data, pageContext }) => (

  <Layout>
    <SEO title="Home" />
    <Container px={7} py={[16, 20, 28]}>

      {data.allMicrocmsBlog.edges.map(({ node }) => (

        <BlogCard
          key={node.blogId}
          imageUrl={node.image?.url}
          writer={node.writer.name}
          slug={node.category.slug}
          blogId={node.blogId}
          title={node.title}
          description={node.description}
        />
      ))}

    </Container>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!){
    allMicrocmsBlog(skip: $skip, limit:$limit){
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

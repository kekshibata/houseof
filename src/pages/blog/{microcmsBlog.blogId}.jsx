import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '@chakra-ui/react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <Container py={[16, 20, 28]}>
      <span>{data.microcmsBlog.writer.name}</span>
      <h1>{data.microcmsBlog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${data.microcmsBlog.body}` }} />
    </Container>
  </Layout>
);

export default BlogPage;

export const query = graphql`
    query ($id:String!) {
        microcmsBlog(id:{eq:$id}){
            blogId
            title
            body
            writer {
                name
            }
        }
    }
`;

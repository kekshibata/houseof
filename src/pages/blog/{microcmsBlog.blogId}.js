import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <span>{data.microcmsBlog.writer.name}</span>
    <h1>{data.microcmsBlog.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: `${data.microcmsBlog.body}` }} />
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

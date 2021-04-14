import React from 'react';
import { graphql } from 'gatsby';
import {
  Container, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon,
} from '@chakra-ui/react';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Link from '../../components/link';

const BlogPage = ({ data }) => (

  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <Container px={7} py={{ base: '20', lg: '28' }}>
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb="2">
        <BreadcrumbItem>
          <Link to="/">

            <Icon as={AiFillHome} />
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to={`/${data.microcmsBlog.category.slug}`}>{data.microcmsBlog.category.name}</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            {data.microcmsBlog.title.length > 21 ? `${data.microcmsBlog.title.substr(0, 20)}...` : data.microcmsBlog.title }

          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <span>
        <Link to={`/writers/${data.microcmsBlog.writer.id}`}>
          <Icon as={BsPersonFill} alignSelf="center" />
          {data.microcmsBlog.writer.name}
        </Link>
      </span>
      {data.microcmsBlog.image?.url && <ImgixGatsbyImage src={data.microcmsBlog.image.url} layout="constrained" aspectRatio={16 / 9} /> }
      <Heading mt={4} mb={10}>
        {data.microcmsBlog.title}
      </Heading>
      <div id="blog-content" dangerouslySetInnerHTML={{ __html: `${data.microcmsBlog.body}` }} />
    </Container>
  </Layout>
);

export default BlogPage;

export const query = graphql`
    query ($id:String!) {
        microcmsBlog(id:{eq:$id}){
            blogId
            image {
              url
            }
            title
            body
            writer {
                name
                id
            }
            category {
              name
              slug
            }
        }
    }
`;

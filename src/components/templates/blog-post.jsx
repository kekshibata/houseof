import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import {
  Container,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Grid,
  Box,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

import Layout from '../layout';
import SEO from '../seo';
import Link from '../link';

const BlogPage = ({ data, pageContext }) => (

  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <Container px={7} py={{ base: '20', lg: '28' }}>

      {/* パンクズリスト　*/}
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
      {/* next and previous */}
      <Divider orientation="horizontal" />
      <Grid templateColumns={pageContext.previous && pageContext.next ? { base: 'auto', lg: '1fr auto 1fr' } : 'auto'}>
        {pageContext.previous && (
          <Box fontSize="lg" fontWeight="semibold" _hover={{ background: useColorModeValue('gray.100', 'gray.700') }} transitionDuration="300ms">
            <Flex as={GatsbyLink} to={`/${pageContext.previous.category.slug}/${pageContext.previous.blogId}`} py="4" flexDirection="row" alignItems="center" justifyContent="flex-start" minHeight="100px">
              <ChevronLeftIcon fontSize="xl" mr="5" />
              <Box mr="3">
                {pageContext.previous.title}
              </Box>
            </Flex>
          </Box>
        )}
        <Divider orientation={useBreakpointValue({ base: 'horizontal', lg: 'vertical' })} />
        <Box fontSize="lg" fontWeight="semibold" _hover={{ background: useColorModeValue('gray.100', 'gray.700') }} transitionDuration="300ms">
          {pageContext.next && (
          <Flex as={GatsbyLink} to={`/${pageContext.next.category.slug}/${pageContext.next.blogId}`} py="4" flexDirection="row" alignItems="center" justifyContent="flex-end" minHeight="100px">
            <Box ml="2">
              {pageContext.next.title}
            </Box>
            <ChevronRightIcon fontSize="xl" ml="5" />
          </Flex>
          )}
        </Box>
      </Grid>
      <Divider orientation="horizontal" />
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

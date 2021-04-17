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
  chakra,
  Tag,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import { ChevronRightIcon, ChevronLeftIcon, TimeIcon } from '@chakra-ui/icons';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

import Layout from '../layout';
import SEO from '../seo';
import Link from '../link';

const BlogPage = ({ data, pageContext }) => (

  <Layout>
    <SEO title={data.microcmsBlog.title} />
    {data.microcmsBlog.image?.url && <ChakraImage src={data.microcmsBlog.image.url} layout="constrained" top="70px" aspectRatio={16 / 9} w="full" display={useBreakpointValue({ base: 'block', md: 'none' })} /> }
    <Container py={{ base: '20', lg: '28' }}>
      {data.microcmsBlog.image?.url && <ChakraImage src={data.microcmsBlog.image.url} layout="constrained" aspectRatio={16 / 9} rounded="md" display={useBreakpointValue({ base: 'none', md: 'block' })} /> }
      {/* パンクズリスト　*/}
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mt="10px" mb="2">
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

      <Heading size="lg">
        {data.microcmsBlog.title}
      </Heading>
      <Tag mt="10px" variant="outline" fontWeight="semibold" colorScheme="red" rounded="sm">{data.microcmsBlog.category.name}</Tag>
      <HStack pt="10px" pb="20px" spacing="5" color={useColorModeValue('gray.600', 'gray.300')}>
        <Box as="time" display="flex" flexDirection="row" justify="flex-start" alignItems="center">
          <TimeIcon mr="1" />
          <Text display="inline-block">{data.microcmsBlog.createdAt}</Text>
        </Box>
        <Box as={GatsbyLink} to={`/writers/${data.microcmsBlog.writer.id}`} display="flex" flexDirection="row" justify="flex-start" alignItems="center">
          <Icon as={BsPersonFill} mr="1" />
          <Text display="inline-block">{data.microcmsBlog.writer.name}</Text>
        </Box>
      </HStack>

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

const ChakraImage = chakra(ImgixGatsbyImage, {
  baseStyle: {
    rounded: 'none',
  },
});

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
            createdAt(formatString: "YYYY/MM/DD")
        }
    }
`;

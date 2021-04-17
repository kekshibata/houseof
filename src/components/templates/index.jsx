import * as React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import {
  Container,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

// paginator
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  Container as PaginatorContainer,
} from 'chakra-paginator';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import Layout from '../layout';
import SEO from '../seo';
import BlogCard from '../blog-card';

const IndexPage = ({ data, pageContext }) => {
  // react hooks
  const [currentPage, setCurrentPage] = React.useState(pageContext.humanPageNumber);
  const [isPaginatorDisabled, setIsPaginatorDisabled] = React.useState(false);

  // constants
  const pagesQuantity = pageContext.numberOfPages; // -> calculated or obtained from Backend
  const outerLimit = 2;
  const innerLimit = 2;

  // styles
  const bg = useColorModeValue('bg', 'dark.bg');

  const baseStyles = {
    w: 9,
    fontSize: 'sm',
  };

  const normalStyles = {
    ...baseStyles,
    bg,
  };

  const activeStyles = {
    ...baseStyles,
    bg: 'red.400',
  };

  const separatorStyles = {
    w: 9,
    bg,
  };

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    navigate(nextPage === 1 ? '/' : `/pages/${nextPage}`);
  };

  return (

    <Layout>
      <SEO title="Home" />
      <Container py={{ base: '5', lg: '8' }}>

        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <>
            <BlogCard
              key={node.blogId}
              imageUrl={node.image?.url}
              writer={node.writer.name}
              slug={node.category.slug}
              categoryName={node.category.name}
              blogId={node.blogId}
              title={node.title}
              description={node.description}
              createdAt={node.createdAt}
            />
            <Divider orientation="horizontal" mb="5" />
          </>
        ))}
        {/* pagination */}
        <Paginator
          isDisabled={isPaginatorDisabled}
          activeStyles={activeStyles}
          innerLimit={innerLimit}
          outerLimit={outerLimit}
          currentPage={currentPage}
          normalStyles={normalStyles}
          separatorStyles={separatorStyles}
          pagesQuantity={pagesQuantity}
          onPageChange={handlePageChange}
        >
          <PaginatorContainer align="center" justify="space-between" w="full" p={4}>
            <Previous bg="red.300" as={Link} to={pageContext.previousPagePath} disabled={!pageContext.previousPagePath}>
              <ChevronLeftIcon />
              {/* Or an icon from `react-icons` */}
            </Previous>
            <PageGroup isInline align="center" />
            <Next bg="red.300" as={Link} to={pageContext.nextPagePath}>
              <ChevronRightIcon />
              {/* Or an icon from `react-icons` */}
            </Next>
          </PaginatorContainer>
        </Paginator>

      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!){
    allMicrocmsBlog(sort: {order: DESC, fields: createdAt}, skip: $skip, limit:$limit){
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
          createdAt(formatString: "YYYY/MM/DD")
          writer {
            name
          }
        }
      }
    }
  }
`;

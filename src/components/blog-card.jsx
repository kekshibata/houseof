import * as React from 'react';
import {
  LinkBox, Box, Heading, LinkOverlay, Text, useColorModeValue,
} from '@chakra-ui/react';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import Link from './link';

const BlogCard = ({
  imageUrl, writer, slug, blogId, title, description,
}) => (

  <LinkBox as="article" w="full" borderWidth="1px" rounded="md" pb="5" overflow="hidden" mb="8" boxShadow="lg" bg={useColorModeValue('white', 'gray.800')}>
    <Box>
      { imageUrl && <ImgixGatsbyImage src={imageUrl} layout="constrained" aspectRatio={16 / 9} />}
    </Box>
    <Box as="span" ml="5">
      {writer}
    </Box>
    <Heading size="md" my="2" px="5">

      <LinkOverlay as={Link} to={`/${slug}/${blogId}`}>
        {title}
      </LinkOverlay>

    </Heading>
    <Text px="5">
      {description}
      ...
    </Text>
    <Box textAlign="right" mr="5">
      続きを読む
    </Box>
  </LinkBox>
);

export default BlogCard;

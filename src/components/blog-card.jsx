import * as React from 'react';
import {
  LinkBox, Box, Heading, LinkOverlay, Text, Image,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Link from './link';

const BlogCard = (props) => (

  <LinkBox as="article" w="full" p="5" borderWidth="1px" rounded="md">
    {props.imageUrl && <GatsbyImage image={props.imageUrl} /> }
    <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
      {props.writer}
    </Box>
    <Heading size="md" my="2">

      <LinkOverlay as={Link} to={`/${props.slug}/${props.blogId}`}>
        {props.title}
      </LinkOverlay>

    </Heading>
    <Text>
      {props.description}
      ...
    </Text>
    <Box textAlign="right">
      続きを読む
    </Box>
  </LinkBox>
);

export default BlogCard;

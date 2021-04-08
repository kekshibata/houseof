import * as React from 'react';
import {
  LinkBox, Box, Heading, LinkOverlay, Text, Image,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImgixGatsbyImage, getGatsbyImageData } from '@imgix/gatsby';

import Link from './link';

const BlogCard = (props) => {
  console.log(props.imageUrl);
  return (

    <LinkBox as="article" w="full" borderWidth="1px" rounded="md" pb="5" overflow="hidden">
      {props.children}
      {/* <GatsbyImage image={getGatsbyImageData({ src: props.imageUrl, layout: 'constrained', aspectRatio: 16 / 9 })} /> */}
      { props.imageUrl && <ImgixGatsbyImage src={props.imageUrl} layout="constrained" aspectRatio={16 / 9} />}
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        {props.writer}
      </Box>
      <Heading size="md" my="2" px="5">

        <LinkOverlay as={Link} to={`/${props.slug}/${props.blogId}`}>
          {props.title}
        </LinkOverlay>

      </Heading>
      <Text px="5">
        {props.description}
        ...
      </Text>
      <Box textAlign="right" mr="5">
        続きを読む
      </Box>
    </LinkBox>
  );
};

export default BlogCard;

import * as React from 'react';
import { Link } from 'gatsby';
import {
  LinkBox, Box, Heading, LinkOverlay, Tag, chakra, HStack, Icon, Text, useColorModeValue,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { BsPersonFill } from 'react-icons/bs';
import { ImgixGatsbyImage } from '@imgix/gatsby';

const BlogCard = ({
  imageUrl, writer, slug, blogId, title, createdAt,
}) => (

  <LinkBox as="article" w="full" mt="20px">
    { imageUrl && <ChakraImage src={imageUrl} layout="constrained" aspectRatio={16 / 9} />}
    <Box as="dl">
      <Heading as="dt" size="md" my="2" fontWeight="bold">
        <LinkOverlay as={Link} to={`/${slug}/${blogId}`}>
          {title}
        </LinkOverlay>
      </Heading>
      <Box as="dd">
        <Tag variant="outline" fontWeight="semibold" colorScheme="red" rounded="sm">カテゴリ</Tag>
        <HStack pt="10px" pb="40px" spacing="5" color={useColorModeValue('gray.600', 'gray.300')}>
          <Box as="time" display="flex" flexDirection="row" justify="flex-start" alignItems="center">
            <TimeIcon mr="1" />
            <Text display="inline-block">{createdAt}</Text>
          </Box>
          <Box as="span" display="flex" flexDirection="row" justify="flex-start" alignItems="center">
            <Icon as={BsPersonFill} mr="1" />
            <Text display="inline-block">{writer}</Text>
          </Box>
        </HStack>

      </Box>
    </Box>
  </LinkBox>

);

const ChakraImage = chakra(ImgixGatsbyImage, {
  baseStyle: {
    rounded: 'md',
  },
});

export default BlogCard;

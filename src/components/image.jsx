import * as React from 'react';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import { chakra } from '@chakra-ui/react';

const ChakraImage = chakra(ImgixGatsbyImage, {
  baseStyle: {
    transition: '.3s ease-in-out',
    transform: 'scale(1)',

    _hover: {
      transform: 'scale(1.2)',
    },
  },
});

const Image = (props) => <ChakraImage {...props} />;

export default Image;

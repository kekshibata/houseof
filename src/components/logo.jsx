import * as React from 'react';

import {
  Box,
} from '@chakra-ui/react';

import Link from './link';

const Logo = (props) => (
  <Link
    to="/"
    display="flex"
    alignItems="center"
    justifySelf="flex-start"
    _hover={{
      textDecoration: 'none',
      color: 'red.500',
    }}
    {...props}
  >
    <Box ml={3} fontWeight="medium" height="8" fontSize="2xl" fontFamily='"Dela Gothic One"'>
      GunShooting
    </Box>
  </Link>
);

export default Logo;

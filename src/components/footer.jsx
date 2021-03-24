import * as React from 'react';
import {
  Grid, Container, Stack, Text, Link,
} from '@chakra-ui/react';
import ThemeToggle from './theme-toggle';

const Footer = () => (
  <Container as="footer" py={16}>
    <Text textAlign={['center', 'center', 'left']}>
      Copyright &copy;
      {' '}
      {new Date().getFullYear()}
      . All rights reserved.
    </Text>
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      justifyContent={['center', 'center', 'flex-end']}
    >
      <span>Theme:</span>
      {' '}
      <ThemeToggle />
    </Stack>
  </Container>
);

export default Footer;

import * as React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'gatsby';

const navigationlinks = [
  {
    name: 'HOME',
    slug: '/',
    pActive: false,
  },
  {
    name: 'About',
    slug: '/about',
    pActive: false,
  },
  {
    name: 'Writers',
    slug: '/writers',
    pActive: false,
  },

];

const Navigation = ({ children }) => {
  const linkcolor = useColorModeValue('headingColor', 'dark.headingColor');

  return (
    <Stack as="nav" direction={['column', 'row']} fontSize="lg" align="center" spacing={10} sx={{ 'a.active': { fontWeight: 'medium', color: linkcolor } }}>
      {navigationlinks.map((n) => (
        <Link key={n.slug} p={2} to={n.slug} activeClassName="active" partiallyActive={n.pActive}>
          {n.name}
        </Link>
      ))}
      {children}
    </Stack>
  );
};

export default Navigation;

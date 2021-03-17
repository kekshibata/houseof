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
    name: 'HOME',
    slug: '/',
    pActive: false,
  },
  {
    name: 'HOME',
    slug: '/',
    pActive: false,
  },

];

const Navigation = () => {
  const linkcolor = useColorModeValue('headingColor', 'dark.headingColor');

  return (
    <Stack as="nav" direction={['column', 'row']} fontSize="lg" alignItems="center" sx={{ 'a.active': { fontWeight: 'medium', color: linkcolor } }}>
      {navigationlinks.map((n) => (
        <Link key={n.slug} p={2} to={n.slug} activeClassName="active" partiallyActive={n.pActive}>
          {n.name}
        </Link>
      ))}
    </Stack>
  );
};

export default Navigation;

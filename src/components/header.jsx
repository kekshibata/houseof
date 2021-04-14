import {
  Box,
  Container,

  Menu,
  MenuButton,

  MenuItem, MenuList, useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { isBrowser } from '@chakra-ui/utils';
import * as React from 'react';
import Link from './link';
import MobileMenu from './mobile-menu';
import Navigation from './navigation';

const accordionLinks = [
  {
    name: 'Test Category',
    slug: '/test',
  },
  {
    name: '豆知識',
    slug: '/extra-knowledge',
  },
  {
    name: '攻略',
    slug: '/strategy',
  },
];

const HeaderContent = () => {
  const [isSmallerThan640] = useMediaQuery('(max-width: 640px)');

  const linkColor = useColorModeValue('headingColor', 'dark.headingColor');

  return (
    <Container
      display="grid"
      gridTemplateColumns="1fr 1fr"
      maxW="900px"
    >
      <Link
        to="/"
        display="flex"
        alignItems="center"
        justifySelf="flex-start"
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: 'red.500',
        }}
      >
        <Box ml={3} fontWeight="medium" fontSize="2xl" fontFamily='"Dela Gothic One"'>
          GunShooting
        </Box>
      </Link>

      {isBrowser && isSmallerThan640 ? (
        <MobileMenu />
      ) : (
        <>

          <Navigation>
            <Menu placement="bottom">
              <MenuButton>
                Categories
              </MenuButton>
              <MenuList>
                {accordionLinks.map((n) => (
                  <MenuItem key={n.slug}>
                    <Link to={n.slug}>
                      {n.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Navigation>

        </>

      )}

    </Container>
  );
};

const Header = () => {
  const bg = useColorModeValue('bg', 'dark.bg');

  return (
    <>
      <Box
        w="100%"
        margin={0}
        as="header"
        position="fixed"
        zIndex="docked"
        height="navigationHeight"
        display="flex"
        alignItems="center"
        bg={bg}
        shadow="sm"
        borderTop="6px solid"
        borderTopColor="red.500"
        sx={{ svg: { height: '24px', width: 'auto' } }}
      >
        <HeaderContent />
      </Box>
    </>
  );
};

export default Header;

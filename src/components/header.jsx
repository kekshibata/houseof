import * as React from 'react';
import {
  Box,
  Container,
  useColorModeValue,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Link from './link';
import Navigation from './navigation';
import MobileMenu from './mobile-menu';

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

const Header = () => {
  const [isSmallerThan640] = useMediaQuery('(max-width: 640px)');
  const bg = useColorModeValue('bg', 'dark.bg');
  const logoColor = useColorModeValue('primary', 'dark.primary');
  const linkColor = useColorModeValue('headingColor', 'dark.headingColor');

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
        sx={{ svg: { height: '24px', width: 'auto' } }}
      >
        <Container
          display="grid"
          gridTemplateColumns="1fr 1fr"
        >
          <Link
            to="/"
            display="flex"
            alignItems="center"
            justifySelf="flex-start"
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: logoColor,
            }}
          >

            <Box ml={3} fontWeight="medium" fontSize="xl">
              GunShooting
            </Box>
          </Link>
          {isSmallerThan640 === !null ? (
            <MobileMenu />
          ) : (
            <>
              <Container>

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
              </Container>

            </>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Header;

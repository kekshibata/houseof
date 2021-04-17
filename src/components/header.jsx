import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Flex,
  useColorModeValue,
  useColorMode,
  useUpdateEffect,
  useDisclosure,
  IconButton,
  chakra,
  HStack,
  Text,
} from '@chakra-ui/react';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

import Link from './link';
import Logo from './logo';
import { MobileNavButton, MobileNavContent } from './mobile-menu';

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
  const mobileNav = useDisclosure();
  const headerExpand = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = React.useRef();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const linkColor = useColorModeValue('headingColor', 'dark.headingColor');

  const data = useStaticQuery(graphql`
  query {
    allMicrocmsWriter {
      edges {
        node {
          name
          writerId
        }
      }
    }
    allMicrocmsCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`);
  const writers = data.allMicrocmsWriter.edges;
  const categories = data.allMicrocmsCategory.edges;

  return (
    <>
      <Flex w="100%" h="4.5rem" px="6" align="center" justify="space-between">
        <Flex align="center">
          <Logo display={{ base: 'block', md: 'block' }} />
        </Flex>

        <Flex
          justify="flex-end"
          w="100%"
          maxW="824px"
          align="center"
          color="gray.400"
        >
          <HStack spacing="5" display={{ base: 'none', md: 'flex' }} color={linkColor} sx={{ 'a.active': { color: 'red.500' } }}>
            <Link p={2} to="/" textTransform="uppercase">
              home
            </Link>
            <Link p={2} to="/about" activeClassName="active" partiallyActive="false" textTransform="uppercase">
              about
            </Link>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label="expand menu"
              variant="ghost"
              color="gray.400"
              ml={{ base: '0', md: '3' }}
              onClick={headerExpand.isOpen ? headerExpand.onClose : headerExpand.onOpen}
              icon={<ArrowUpDownIcon />}
            />
          </HStack>

          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: '0', md: '3' }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <AnimatePresence>
        {headerExpand.isOpen && (
          <motion.div
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex w="100%" minHeight="4.5rem" maxHeight="6rem" px="6" justify="center" flexWrap="wrap">
              <HStack spacing="2" align="center" fontWeight="normal" mr="3">
                <Text p={2} fontWeight="bold" fontSize="small" color={useColorModeValue('gray.500', 'gray.400')} textTransform="uppercase">
                  writers:
                </Text>
                {writers.map(({ node }) => (
                  <Link key={node.writerId} p={2} to={`/writers/${node.writerId}`} flexShrink="0" activeClassName="active" partiallyActive="false">
                    {node.name}
                  </Link>
                ))}
              </HStack>
              <HStack spacing="2" align="center" fontWeight="normal">
                <Text p={2} fontWeight="bold" fontSize="small" color={useColorModeValue('gray.500', 'gray.400')} textTransform="uppercase">
                  categories:
                </Text>
                {categories.map(({ node }) => (
                  <Link key={node.slug} p={2} to={`/${node.slug}`} flexShrink="0" activeClassName="active" partiallyActive="false">
                    {node.name}
                  </Link>
                ))}
              </HStack>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  );
};

const Header = (props) => {
  const bg = useColorModeValue('white', 'gray.800');
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;

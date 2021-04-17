import * as React from 'react';
import {
  Flex,
  useColorModeValue,
  useColorMode,
  useUpdateEffect,
  useDisclosure,
  IconButton,
  chakra,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

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

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = React.useRef();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
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

          {/* <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Link
              isExternal
              aria-label="Go to Chakra UI GitHub page"
              href={siteConfig.repo.url}
            >
              <Icon
                as={GithubIcon}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
            </Link>
            <Link aria-label="Go to Chakra UI Discord page" href="/discord">
              <Icon
                as={DiscordIcon}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
            </Link>
            <Link
              isExternal
              aria-label="Go to Chakra UI YouTube channel"
              href={siteConfig.youtube}
            >
              <Icon
                as={FaYoutube}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
            </Link>
          </HStack> */}
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
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;

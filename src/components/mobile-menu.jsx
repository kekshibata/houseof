import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  IconButton,
  Flex,
  useColorModeValue,
  useUpdateEffect,
  CloseButton,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion, useElementScroll } from 'framer-motion';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import { RemoveScroll } from 'react-remove-scroll';
import Navigation from './navigation';
import Link from './link';
import Logo from './logo';

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

export const MobileNavContent = ({ isOpen, onClose }) => {
  const closeBtnRef = React.useRef();

  const [shadow, setShadow] = React.useState();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={useColorModeValue('white', 'gray.800')}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex={20}
              pb="8"
            >
              <Box shadow={shadow}>
                <Flex justify="space-between" align="center" px="6" pt="5" pb="4">
                  <Logo />
                  <CloseButton ref={closeBtnRef} onClick={onClose} />
                </Flex>
              </Box>

              <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? 'md' : undefined);
                }}
              >
                <ScrollContent />
              </ScrollView>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};

const ScrollView = (props) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = React.useState(0);
  const elRef = React.useRef();
  const { scrollY } = useElementScroll(elRef);
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5);
  }, [y]);

  return (
    <Box
      ref={elRef}
      flex="1"
      id="routes"
      overflow="auto"
      px="6"
      py="6"
      {...rest}
    />
  );
};

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

const ScrollContent = () => {
  const linkcolor = useColorModeValue('headingColor', 'dark.headingColor');
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
  console.log('data', data);
  const writers = data.allMicrocmsWriter.edges;
  const categories = data.allMicrocmsCategory.edges;

  return (
    <VStack spacing="6" align="flex-start" fontWeight="normal" sx={{ 'a.active': { color: 'red.500' } }}>
      <Link p={2} to="/" textTransform="uppercase">
        home
      </Link>
      <Link p={2} to="/about" activeClassName="active" partiallyActive="false" textTransform="uppercase">
        about
      </Link>
      <VStack spacing="2" align="flex-start" fontWeight="normal">
        <Text p={2} fontWeight="bold" fontSize="small" color={useColorModeValue('gray.500', 'gray.400')} textTransform="uppercase">
          writers
        </Text>
        {writers.map(({ node }) => (
          <Link key={node.writerId} p={2} to={`/writers/${node.writerId}`} activeClassName="active" partiallyActive="false">
            {node.name}
          </Link>
        ))}
      </VStack>
      <VStack spacing="2" align="flex-start" fontWeight="normal">
        <Text p={2} fontWeight="bold" fontSize="small" color={useColorModeValue('gray.500', 'gray.400')} textTransform="uppercase">
          categories
        </Text>
        {categories.map(({ node }) => (
          <Link key={node.slug} p={2} to={`/${node.slug}`} activeClassName="active" partiallyActive="false">
            {node.name}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

export const MobileNavButton = React.forwardRef(
  (props, ref) => (
    <IconButton
      ref={ref}
      aria-label="Open menu"
      display={{ base: 'flex', md: 'none' }}
      fontSize="20px"
      color={useColorModeValue('gray.800', 'inherit')}
      variant="ghost"
      icon={<AiOutlineMenu />}
      {...props}
    />
  ),
);

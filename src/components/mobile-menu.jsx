import * as React from 'react';
import {
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useColorModeValue,
  useDisclosure,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import Navigation from './navigation';
import Link from './link';

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

const MobileMenu = () => {
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const menuRef = React.useRef();
  const linkColor = useColorModeValue('headingcolor', 'dark.headingcolor');

  return (
    <>
      <Drawer
        isOpen={isOpenMenu}
        placement="top"
        onClose={onCloseMenu}
        finalFocusRef={menuRef}
        size="full"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>

              <Navigation>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg">
                          Categories
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    {accordionLinks.map((n) => (
                      <AccordionPanel key={n.slug} textAlign="center">
                        <Link to={n.slug}>
                          {n.name}
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </Accordion>
              </Navigation>

            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <IconButton
        onClick={onOpenMenu}
        ref={menuRef}
        px={3}
        size="sm"
        aria-label="Open menu"
        justifySelf="flex-end"
        variant="ghost"
        icon={<AiOutlineMenu />}
      />
    </>
  );
};

export default MobileMenu;

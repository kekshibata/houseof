import * as React from 'react';
import {
  Text,
  Button,
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
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import Navigation from './navigation';

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
              <Stack
                as="nav"
                direction="column"
                fontSize="lg"
                /* alignItems="center"
                sx={{
                  'a.active': {
                    fontWeight: 'medium',
                    color: linkColor,
                  },
                }} */
              >
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

                      <AccordionPanel pb={4}>
                        Test Category
                      </AccordionPanel>
                      <AccordionPanel pb={4}>
                        Test Category 2
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Navigation>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Button
        onClick={onOpenMenu}
        ref={menuRef}
        px={3}
        size="sm"
        aria-label={isOpenMenu ? 'Close menu' : 'Open menu'}
        justifySelf="flex-end"
        rightIcon={<FiMenu />}
      >
        Menu
      </Button>
    </>
  );
};

export default MobileMenu;

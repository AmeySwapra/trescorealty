import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Divider,
  Collapse,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../../assets/logo/trescorealty.jpg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openDropdown, setOpenDropdown] = useState({});

  const handleToggleDropdown = (label) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const dropdownItems = {
    Residential: ['Rent', 'Sale'],
    Commercial: ['Rent', 'Sale'],
    Industrial: ['Rent', 'Sale'],
    AboutUs: ['Blogs', 'Real Estate Property Consultant']
  };

  const menuOrder = [
    { label: 'Home', href: '#' },
    { label: 'Listing', href: '#' },
    { label: 'Residential', dropdown: dropdownItems.Residential },
    { label: 'Commercial', dropdown: dropdownItems.Commercial },
    { label: 'Industrial', dropdown: dropdownItems.Industrial },
    { label: 'Pre-leased', href: '#' },
    { label: 'Distress Sale', href: '#' },
    { label: 'Goa', href: '#' },
    { label: 'About Us', dropdown: dropdownItems.AboutUs }
  ];

  return (
    <Box as="header" bg="#004274" boxShadow="sm" h={{ base: '80px', md: '100px' }}>
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          h="100%"
          objectFit="contain"
          position={{ base: 'relative', md: 'absolute' }}
          left={{ base: '50%', md: '0' }}
          transform={{ base: 'translateX(-50%)', md: 'none' }}
        />

        {/* Hamburger Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          position="absolute"
          left="4"
        />

        {/* Desktop Navigation */}
        <Flex
          as="nav"
          display={{ base: 'none', md: 'flex' }}
          ml="auto"
          align="center"
          color="white"
        >
          {menuOrder.map((menuItem, index) => (
            menuItem.dropdown ? (
              <Menu key={index} isLazy trigger="hover">
                <MenuButton mx={4} _hover={{ color: '#0096cb' }} fontSize={'18px'} as={Text} cursor="pointer">
                  {menuItem.label} <ChevronDownIcon />
                </MenuButton>
                <MenuList bg="#004274" borderColor="white">
                  {menuItem.dropdown.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <MenuItem
                        bg="#004274"
                        color="white"
                        _hover={{ bg: '#004274', color: '#0096cb' }}
                      >
                        {item}
                      </MenuItem>
                      {idx < menuItem.dropdown.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <Link key={index} mx={4} _hover={{ color: '#0096cb' }} fontSize={'18px'} href={menuItem.href}>
                {menuItem.label}
              </Link>
            )
          ))}
        </Flex>

        {/* Mobile Drawer Navigation */}
        <Drawer isOpen={isOpen} placement="left"  onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="white">
            <DrawerCloseButton color="black" />
            <DrawerHeader color="black">Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                {menuOrder.map((menuItem, index) => (
                  menuItem.dropdown ? (
                    <Box key={index} w="100%">
                      <Flex
                        justify="space-between"
                        align="center"
                        onClick={() => handleToggleDropdown(menuItem.label)}
                        cursor="pointer"
                      >
                        <Text fontWeight="bold" color="#004274">{menuItem.label}</Text>
                        {openDropdown[menuItem.label] ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </Flex>
                      <Collapse in={openDropdown[menuItem.label]}>
                        <VStack align="start" pl={4} spacing={2}>
                          {menuItem.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href="#"
                              color="gray.700"
                              _hover={{ color: '#0096cb' }}
                            >
                              {item}
                            </Link>
                          ))}
                        </VStack>
                      </Collapse>
                    </Box>
                  ) : (
                    <Link
                      key={index}
                      href={menuItem.href}
                      fontWeight="bold"
                      color="#004274"
                      _hover={{ color: '#0096cb' }}
                      w="100%"
                    >
                      {menuItem.label}
                    </Link>
                  )
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;

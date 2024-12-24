import React, { useState } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Divider,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../assets/logo/trescorealty.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openDropdown, setOpenDropdown] = useState({});

  const handleToggleDropdown = (label) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const dropdownItems = {
    Residential: [
      { label: "Rent", href: "/residential/rent" },
      { label: "Sale", href: "/residential/sale" },
    ],
    Commercial: [
      { label: "Rent", href: "/commercial/rent" },
      { label: "Sale", href: "/commercial/sale" },
    ],
    Industrial: [
      { label: "Rent", href: "/industrial/rent" },
      { label: "Sale", href: "/industrial/sale" },
    ],
    AboutUs: [
      { label: "Blogs", href: "/about-us/blogs" },
      {
        label: "Real Estate Property Consultant",
        href: "/about-us/consultant",
      },
    ],
  };

  const menuOrder = [
    { label: "Home", href: "/" },
    { label: "Listing", href: "/listing" },
    { label: "Residential", dropdown: dropdownItems.Residential },
    { label: "Commercial", dropdown: dropdownItems.Commercial },
    { label: "Industrial", dropdown: dropdownItems.Industrial },
    { label: "Pre-leased", href: "/pre-leased" },
    { label: "Distress Sale", href: "/distress-sale" },
    { label: "Goa", href: "/goa" },
    { label: "About Us", dropdown: dropdownItems.AboutUs },
  ];

  const linkStyles = {
    marginLeft : "20px",  
    fontSize: "18px",  
    _hover: { color: "#0096cb" }, 
    color: "white",  
    _focus: { boxShadow: "none" },  
  };

  return (
    <Box
      as="header"
      bg="#004274"
      boxShadow="sm"
      h={{ base: "80px", md: "100px" }}
      w="100%"
      overflowX="hidden"
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
        w="100%"
        wrap="wrap"
      >
        <Image
          src={logo}
          alt="logo"
          h={{ base: "80px", md: "100px" }}
          objectFit="contain"
          position={{ base: "relative", md: "absolute" }}
          left={{ base: "50%", md: "0" }}
          transform={{ base: "translateX(-50%)", md: "none" }}
          w={{ base: "auto", md: "130px" }}
        />

        {/* Hamburger Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          position="absolute"
          left="4"
        />

        {/* Desktop Navigation */}
        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          ml="auto"
          align="center"
          color="white"
          w="auto"
        >
          {menuOrder.map((menuItem, index) =>
            menuItem.dropdown ? (
              <Menu key={index} isLazy trigger="hover">
                <MenuButton
                  mx={4}
                  _hover={{ color: "#0096cb" }}
                  fontSize={"18px"}
                  as={Text}
                  cursor="pointer"
                >
                  {menuItem.label} <ChevronDownIcon />
                </MenuButton>
                <MenuList bg="#004274" borderColor="white">
                  {menuItem.dropdown.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <Link to={item.href}>
                      <MenuItem
                        key={idx}
                        bg="#004274"
                        color="white"
                        _hover={{ bg: "#004274", color: "#0096cb" }}
                        
                         
                      >
                        {item.label}
                      </MenuItem>
                      </Link>

                      {idx < menuItem.dropdown.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </MenuList>
              </Menu>
            ) : (
                <Link
                to={menuItem.href}
                key={index}
                style={linkStyles}
              >
                {menuItem.label}
              </Link>
            )
          )}
        </Flex>

        {/* Mobile Drawer Navigation */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="white">
            <DrawerCloseButton color="black" />
            <DrawerHeader color="black">Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                {menuOrder.map((menuItem, index) =>
                  menuItem.dropdown ? (
                    <Box key={index} w="100%">
                      <Flex
                        justify="space-between"
                        align="center"
                        onClick={() => handleToggleDropdown(menuItem.label)}
                        cursor="pointer"
                      >
                        <Text fontWeight="bold" color="#004274">
                          {menuItem.label}
                        </Text>
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
                              to={item.href}
                              color="gray.700"
                              _hover={{ color: "#0096cb" }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </VStack>
                      </Collapse>
                    </Box>
                  ) : (
                    <Link
                      key={index}
                      to={menuItem.href}
                      fontWeight="bold"
                      color="#004274"
                      _hover={{ color: "#0096cb" }}
                      w="100%"
                    >
                      {menuItem.label}
                    </Link>
                  )
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;

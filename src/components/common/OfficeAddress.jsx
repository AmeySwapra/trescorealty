import React from 'react';
import { Box, Text, UnorderedList, ListItem, Icon, Link } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const OfficeAddress = () => {
  return (
    <Box
      id="houzez_contact-1"
      p={4}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      maxWidth="300px"
      width="100%"
      margin="auto"
      mt={10}
    >
      <Box className="widget-top" mb={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">Contact Us</Text>
      </Box>
      <Box className="widget-body">
        <UnorderedList spacing={4}>
          <ListItem>
            <Icon as={MdLocationOn} boxSize={5} mr={2} />
            Tresco Realty, Office No. 305, Serene Bay, 389, Lane Number 6, Kavadewadi, Koregaon Park, Pune, Maharashtra 411001
          </ListItem>
          <ListItem>
            <Icon as={MdPhone} boxSize={5} mr={2} />
            +91- 9764551333
          </ListItem>
          <ListItem>
            <Icon as={MdEmail} boxSize={5} mr={2} />
            <Link href="mailto:info@trescorealty.in">info@trescorealty.in</Link>
          </ListItem>
        </UnorderedList>
        <Text mt={4} textAlign="center">
          <Link href="#" color="teal.500">
            Contact us <Icon as={MdPhone} ml={1} />
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default OfficeAddress;

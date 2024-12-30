import React from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const PropertyStatus = () => {
  const statuses = [
    { name: 'Agricultural Land', count: 1, link: 'https://www.trescorealty.in/status/agricultural-land/' },
    { name: 'Commercial', count: 72, link: 'https://www.trescorealty.in/status/commercial/' },
    { name: 'Distress', count: 2, link: 'https://www.trescorealty.in/status/distress/' },
    { name: 'Industrial', count: 15, link: 'https://www.trescorealty.in/status/industrial/' },
    { name: 'Land', count: 29, link: 'https://www.trescorealty.in/status/land/' },
    { name: 'New Construction', count: 1, link: 'https://www.trescorealty.in/status/new-contruction/' },
    { name: 'Outright', count: 2, link: 'https://www.trescorealty.in/status/outright/' },
    { name: 'Plot', count: 29, link: 'https://www.trescorealty.in/status/plot/' },
    { name: 'Preleased Properties', count: 12, link: 'https://www.trescorealty.in/status/prelease-properties/' },
    { name: 'Residential', count: 209, link: 'https://www.trescorealty.in/status/residential/' },
    { name: 'Sold Out', count: 80, link: 'https://www.trescorealty.in/status/sold-out/' },
  ];

  return (
    <Box
      id="houzez_property_taxonomies-7"
      className="widget widget-categories"
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="400px"
      mx="auto"
      mt={10}
      w={'300px'}
    >
      <Box className="widget-top" mb={4}>
        <Heading
          className="widget-title"
          as="h3"
          size="md"
          textAlign="center"
          color={useColorModeValue('gray.700', 'white')}
        >
          Property Status
        </Heading>
      </Box>
      <Box className="widget-body">
        <List spacing={3}>
          {statuses.map((status, index) => (
            <ListItem
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid"
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              pb={2}
            >
              <Link
                href={status.link}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight="medium"
                _hover={{ textDecoration: 'underline' }}
              
              >
                {status.name}
              </Link>
              <Text as="span" color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
                ({status.count})
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PropertyStatus;

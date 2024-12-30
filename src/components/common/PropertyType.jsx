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

const PropertyType = () => {
  const propertyTypes = [
    { name: 'Apartment', count: 123, url: 'https://www.trescorealty.in/property-type/apartment/' },
    { name: 'Bungalow', count: 39, url: 'https://www.trescorealty.in/property-type/bungalow/' },
    { name: 'Club', count: 1, url: 'https://www.trescorealty.in/property-type/club/' },
    { name: 'Commercial Shop', count: 20, url: 'https://www.trescorealty.in/property-type/commercial-shop/' },
    { name: 'Farm', count: 4, url: 'https://www.trescorealty.in/property-type/farm/' },
    { name: 'Flat', count: 121, url: 'https://www.trescorealty.in/property-type/flat/' },
    { name: 'Independent House', count: 3, url: 'https://www.trescorealty.in/property-type/independent-house/' },
    { name: 'Industrial Land', count: 6, url: 'https://www.trescorealty.in/property-type/industrial-land/' },
    { name: 'Industrial Shed', count: 4, url: 'https://www.trescorealty.in/property-type/industrial-shed/' },
    { name: 'Land', count: 70, url: 'https://www.trescorealty.in/property-type/land/' },
    { name: 'Office Space', count: 56, url: 'https://www.trescorealty.in/property-type/office-space/' },
    { name: 'Penthouse', count: 6, url: 'https://www.trescorealty.in/property-type/penthouse/' },
    { name: 'Resort', count: 2, url: 'https://www.trescorealty.in/property-type/resort/' },
    { name: 'Resto Space', count: 7, url: 'https://www.trescorealty.in/property-type/resto-space/' },
    { name: 'Villa', count: 26, url: 'https://www.trescorealty.in/property-type/villa/' },
  ];

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="400px"
      mx="auto"
      mt={10}
      w={'300px'}
    >
      <Box mb={4}>
        <Heading
          as="h3"
          size="md"
          textAlign="center"
          color={useColorModeValue('gray.700', 'white')}
        >
          Property Types
        </Heading>
      </Box>
      <List spacing={3}>
        {propertyTypes.map((type, index) => (
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
              href={type.url}
              color={useColorModeValue('blue.500', 'blue.300')}
              fontWeight="medium"
              _hover={{ textDecoration: 'underline' }}
          
            >
              {type.name}
            </Link>
            <Text as="span" color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
              ({type.count})
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PropertyType;

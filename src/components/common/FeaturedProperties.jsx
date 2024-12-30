import React from 'react';
import { Box, Image, Badge, Heading, Text, Link } from '@chakra-ui/react';

const FeaturedProperties = () => {
  const properties = [
    {
      title: 'Gorgeous Villa Bay View',
      price: 'Rs.45,000',
      image: 'https://www.trescorealty.in/wp-content/uploads/2016/03/WhatsApp-Image-2017-11-21-at-14.46.12.jpeg',
      link: 'https://www.trescorealty.in/property/gorgeous-villa-bay-view/',
      status: 'Not Available, Residential',
    },
    {
      title: 'Ample Apartment at Last Floor',
      price: 'Rs.4,10,00,000',
      image: 'https://www.trescorealty.in/wp-content/uploads/2016/03/WhatsApp-Image-2017-09-04-at-12.41.33.jpeg',
      link: 'https://www.trescorealty.in/property/ample-apartment-at-last-floor-2/',
      status: 'Not Available, Residential',
    },
    // Add more properties here...
  ];

  return (
    <Box>
      <Heading size="md" mb={4}>Featured Properties</Heading>
      {properties.map((property, index) => (
        <Box key={index} mb={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Link href={property.link} isExternal>
            <Image src={property.image} alt={property.title} />
          </Link>
          <Box p={4}>
            <Badge colorScheme="green" mb={2}>Featured</Badge>
            <Text color="gray.500" fontSize="sm">{property.status}</Text>
            <Heading size="sm" mt={2}>
              <Link href={property.link} isExternal>
                {property.title}
              </Link>
            </Heading>
            <Text fontWeight="bold" color="blue.500" mt={2}>{property.price}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FeaturedProperties;

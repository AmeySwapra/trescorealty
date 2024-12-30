import React from 'react';
import { Box, Image, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';  
import h1 from "../../assets/images/h1.jpeg";
import h2 from "../../assets/images/h2.jpeg";
import h3 from "../../assets/images/h3.jpg";
import h4 from "../../assets/images/h4.jpg";
import h5 from "../../assets/images/h5.jpg";

const properties = [
  {
    id: 1,
    title: "Spacious 3BHK Apartment in Bandra, Mumbai",
    address: "Bandra West, Mumbai, Maharashtra, India",
    price: "Rs.3,00,00,000",
    beds: 3,
    baths: 2,
    area: "1500 Sq Ft",
    type: "Apartment, Residential",
    image: h1,
    link: "/property-details",
  },
  {
    id: 2,
    title: "Luxurious 4BHK Villa in Whitefield, Bangalore",
    address: "Whitefield, Bangalore, Karnataka, India",
    price: "Rs.4,50,00,000",
    beds: 4,
    baths: 4,
    area: "3500 Sq Ft",
    type: "Villa, Residential",
    image: h2,
    link: "/property-details",
  },
  {
    id: 3,
    title: "Cozy 2BHK Flat in Sector 62, Noida",
    address: "Sector 62, Noida, Uttar Pradesh, India",
    price: "Rs.90,00,000",
    beds: 2,
    baths: 2,
    area: "1100 Sq Ft",
    type: "Flat, Residential",
    image: h3,
    link: "/property-details",
  },
  {
    id: 4,
    title: "Elegant 5BHK Bungalow in Jubilee Hills, Hyderabad",
    address: "Jubilee Hills, Hyderabad, Telangana, India",
    price: "Rs.20,00,00,000",
    beds: 5,
    baths: 5,
    area: "4500 Sq Ft",
    type: "Bungalow, Residential",
    image: h4,
    link: "/property-details",
  },
  {
    id: 5,
    title: "Modern 3BHK Penthouse in Vashi, Navi Mumbai",
    address: "Vashi, Navi Mumbai, Maharashtra, India",
    price: "Rs.2,50,00,000",
    beds: 3,
    baths: 3,
    area: "2000 Sq Ft",
    type: "Penthouse, Residential",
    image: h5,
    link: "/property-details",
  },
];

const PropertyCards = () => {
  const history = useNavigate();

  const handleClick = (link) => {
    history(link);
  };

  return (
    <Box
      width="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      p="4"
      mt={8}
      ml={3}
       bg={useColorModeValue('white', 'gray.800')}
    >
      <Text fontWeight="bold" fontSize="xl" mb="4">
        Properties
      </Text>
      {properties.map((property) => (
        <Box
          key={property.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          cursor="pointer"
          onClick={() => handleClick(property.link)}
          p="2"
          mb="4"
        >
          <Flex>
            <Image
              src={property.image}
              alt={property.title}
              width="100px"
              height="100px"
              objectFit="cover"
              mr={4}  
            />
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                {property.title}
              </Text>
              <Text fontSize="xs" color="green.500">
                {property.price}
              </Text>
              <Text fontSize="xs" color="gray.600">
                {property.type}
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default PropertyCards;

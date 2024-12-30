import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaHeart, FaList, FaRegHeart, FaTh } from "react-icons/fa";
import Pagination from "./Pagination";

import h1 from "../../assets/images/h1.jpeg";
import h2 from "../../assets/images/h2.jpeg";
import h3 from "../../assets/images/h3.jpg";
import h4 from "../../assets/images/h4.jpg";
import h5 from "../../assets/images/h5.jpg";
import h6 from "../../assets/images/h6.jpeg";
import h7 from "../../assets/images/h7.jpeg";
import h8 from "../../assets/images/h8.jpeg";
import h9 from "../../assets/images/h9.jpeg";
import h10 from "../../assets/images/h10.jpeg";

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
  {
    id: 6,
    title: "Luxury 6BHK Farmhouse in Chhatarpur, Delhi",
    address: "Chhatarpur, Delhi, India",
    price: "Rs.40,00,00,000",
    beds: 6,
    baths: 7,
    area: "8000 Sq Ft",
    type: "Farmhouse, Residential",
    image: h6,
    link: "/property-details",
  },
  {
    id: 7,
    title: "Premium 2BHK Flat in BTM Layout, Bangalore",
    address: "BTM Layout, Bangalore, Karnataka, India",
    price: "Rs.75,00,000",
    beds: 2,
    baths: 2,
    area: "950 Sq Ft",
    type: "Flat, Residential",
    image: h7,
    link: "/property-details",
  },
  {
    id: 8,
    title: "Cozy 3BHK House in Andheri East, Mumbai",
    address: "Andheri East, Mumbai, Maharashtra, India",
    price: "Rs.1,75,00,000",
    beds: 3,
    baths: 3,
    area: "1200 Sq Ft",
    type: "House, Residential",
    image: h8,
    link: "/property-details",
  },
  {
    id: 9,
    title: "Elegant 4BHK Duplex in Salt Lake, Kolkata",
    address: "Salt Lake, Kolkata, West Bengal, India",
    price: "Rs.2,80,00,000",
    beds: 4,
    baths: 4,
    area: "2100 Sq Ft",
    type: "Duplex, Residential",
    image: h9,
    link: "/property-details",
  },
  {
    id: 10,
    title: "Charming 1BHK Studio Apartment in MG Road, Pune",
    address: "MG Road, Pune, Maharashtra, India",
    price: "Rs.50,00,000",
    beds: 1,
    baths: 1,
    area: "600 Sq Ft",
    type: "Studio Apartment, Residential",
    image: h10,
    link: "/property-details",
  },
  {
    id: 11,
    title: "Stylish 2BHK Flat in Koramangala, Bangalore",
    address: "Koramangala, Bangalore, Karnataka, India",
    price: "Rs.1,20,00,000",
    beds: 2,
    baths: 2,
    area: "950 Sq Ft",
    type: "Flat, Residential",
    image: h1,
    link: "/property-details",
  },
  {
    id: 12,
    title: "Modern 5BHK Villa in Gachibowli, Hyderabad",
    address: "Gachibowli, Hyderabad, Telangana, India",
    price: "Rs.6,00,00,000",
    beds: 5,
    baths: 5,
    area: "4200 Sq Ft",
    type: "Villa, Residential",
    image: h2,
    link: "/property-details",
  },
  {
    id: 13,
    title: "Elegant 3BHK Penthouse in Alwarpet, Chennai",
    address: "Alwarpet, Chennai, Tamil Nadu, India",
    price: "Rs.3,00,00,000",
    beds: 3,
    baths: 3,
    area: "1800 Sq Ft",
    type: "Penthouse, Residential",
    image: h3,
    link: "/property-details",
  },
  {
    id: 14,
    title: "Luxurious 4BHK Bungalow in DLF Phase 5, Gurgaon",
    address: "DLF Phase 5, Gurgaon, Haryana, India",
    price: "Rs.12,00,00,000",
    beds: 4,
    baths: 4,
    area: "3500 Sq Ft",
    type: "Bungalow, Residential",
    image: h4,
    link: "/property-details",
  },
  {
    id: 15,
    title: "Affordable 1BHK Flat in Kandivali East, Mumbai",
    address: "Kandivali East, Mumbai, Maharashtra, India",
    price: "Rs.60,00,000",
    beds: 1,
    baths: 1,
    area: "500 Sq Ft",
    type: "Flat, Residential",
    image: h5,
    link: "/property-details",
  },
  {
    id: 16,
    title: "Spacious 3BHK House in Rajarhat, Kolkata",
    address: "Rajarhat, Kolkata, West Bengal, India",
    price: "Rs.2,20,00,000",
    beds: 3,
    baths: 3,
    area: "1500 Sq Ft",
    type: "House, Residential",
    image: h6,
    link: "/property-details",
  },
  {
    id: 17,
    title: "Modern 2BHK Flat in Thane West, Mumbai",
    address: "Thane West, Mumbai, Maharashtra, India",
    price: "Rs.1,00,00,000",
    beds: 2,
    baths: 2,
    area: "950 Sq Ft",
    type: "Flat, Residential",
    image: h7,
    link: "/property-details",
  },
  {
    id: 18,
    title: "Elegant 4BHK Villa in ECR, Chennai",
    address: "ECR, Chennai, Tamil Nadu, India",
    price: "Rs.4,50,00,000",
    beds: 4,
    baths: 4,
    area: "3000 Sq Ft",
    type: "Villa, Residential",
    image: h8,
    link: "/property-details",
  },
  {
    id: 19,
    title: "Stylish 3BHK Apartment in Kalyani Nagar, Pune",
    address: "Kalyani Nagar, Pune, Maharashtra, India",
    price: "Rs.1,90,00,000",
    beds: 3,
    baths: 3,
    area: "1400 Sq Ft",
    type: "Apartment, Residential",
    image: h9,
    link: "/property-details",
  },
  {
    id: 20,
    title: "Luxurious 5BHK Farmhouse in Manesar, Gurgaon",
    address: "Manesar, Gurgaon, Haryana, India",
    price: "Rs.25,00,00,000",
    beds: 5,
    baths: 5,
    area: "6000 Sq Ft",
    type: "Farmhouse, Residential",
    image: h10,
    link: "/property-details",
  },
];

const PropertyList = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarked, setBookmarked] = useState([]);
  const itemsPerPage = 9;

  const toggleBookmark = (propertyId) => {
    setBookmarked((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const [randomizedProperties, setRandomizedProperties] = useState([]);

  useEffect(() => {
    const shuffledProperties = [...properties].sort(() => Math.random() - 0.5);
    setRandomizedProperties(shuffledProperties);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = randomizedProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(randomizedProperties.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Properties
        </Text>
        <Flex>
          <IconButton
            icon={<FaTh />}
            aria-label="Grid View"
            onClick={() => setIsGridView(true)}
            colorScheme={isGridView ? "blue" : "gray"}
            mr={2}
          />
          <IconButton
            icon={<FaList />}
            aria-label="List View"
            onClick={() => setIsGridView(false)}
            colorScheme={!isGridView ? "blue" : "gray"}
          />
        </Flex>
      </Flex>

      {isGridView ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {currentProperties.map((property) => (
            <Box
              key={property.id}
              position="relative"
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
            >
              <IconButton
                icon={
                  bookmarked.includes(property.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )
                }
                position="absolute"
                top={2}
                right={2}
                colorScheme={bookmarked.includes(property.id) ? "red" : "gray"}
                aria-label="Bookmark"
                onClick={() => toggleBookmark(property.id)}
                zIndex={1}
              />
              <Image src={property.image} alt={property.title} />
              <Box p={5}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {property.title}
                </Text>
                <Text color="gray.500" mb={2}>
                  {property.address}
                </Text>
                <Text fontWeight="bold" color="blue.600" mb={2}>
                  {property.price}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {property.beds} Beds • {property.baths} Baths •{" "}
                  {property.area}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {property.type}
                </Text>
                <Button
                  mt={3}
                  as="a"
                  href={property.link}
                  colorScheme="blue"
                  size="sm"
                >
                  Details
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          {currentProperties.map((property) => (
            <Flex
              key={property.id}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              mb={4}
              boxShadow="md"
              p={5}
              alignItems="center"
              direction={["column", "row"]}
            >
              <IconButton
                icon={
                  bookmarked.includes(property.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )
                }
                position="absolute"
                top={2}
                right={2}
                colorScheme={bookmarked.includes(property.id) ? "red" : "gray"}
                aria-label="Bookmark"
                onClick={() => toggleBookmark(property.id)}
                zIndex={1}
              />

              {/* Image with Heart Icon */}
              <Box position="relative">
                <Image
                  src={property.image}
                  alt={property.title}
                  boxSize={["150px", "200px"]}
                  objectFit="cover"
                  borderRadius="md"
                  mb={[4, 0]}
                  mr={[0, 4]}
                />
                <IconButton
                  icon={
                    bookmarked.includes(property.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )
                  }
                  position="absolute"
                  top={2}
                  right={4}
                  colorScheme={
                    bookmarked.includes(property.id) ? "red" : "gray"
                  }
                  aria-label="Bookmark"
                  onClick={() => toggleBookmark(property.id)}
                  variant="ghost"
                />
              </Box>

              {/* Property Details */}
              <Box>
                <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                  {property.title}
                </Text>
                <Text color="gray.500" mb={2}>
                  {property.address}
                </Text>
                <Text fontWeight="bold" color="blue.600" mb={2}>
                  {property.price}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {property.beds} Beds • {property.baths} Baths •{" "}
                  {property.area}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {property.type}
                </Text>
                <Button
                  mt={3}
                  as="a"
                  href={property.link}
                  colorScheme="blue"
                  size="sm"
                >
                  Details
                </Button>
              </Box>
            </Flex>
          ))}
        </Box>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default PropertyList;

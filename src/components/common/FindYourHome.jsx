import React, { useState } from "react";
import {
  Box,
  Input,
  Select,
  Button,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Flex,
} from "@chakra-ui/react";

const FindYourHome = () => {
  const [priceRange, setPriceRange] = useState(3000);
  const [areaRange, setAreaRange] = useState(1000);
  const maharashtraCities = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Kolhapur",
    "Thane",
  ];

  const puneAreas = [
    "Shivajinagar",
    "Kothrud",
    "Hinjewadi",
    "Wakad",
    "Baner",
    "Aundh",
    "Hadapsar",
    "Viman Nagar",
  ];

  const landTypes = ["Rent", "Agricultural", "Commercial", "Residential"];
  const buildingTypes = ["House", "Flat", "Villa", "Bungalow"];
  const numbersUpToTen = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Box w="300px" mt={10} p={4} bg="gray.50" borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="stretch">
        {/* Search Input */}
        <Input
          placeholder="Address, Town, Street, ZIP, PIN"
          size="sm"
          bg="white"
          border="1px solid"
          borderColor="gray.300"
        />

        {/* Maharashtra Cities Dropdown */}
        <Select
          placeholder="Select City"
          size="sm"
          bg="white"
          border="1px solid"
          borderColor="gray.300"
        >
          {maharashtraCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </Select>

        {/* Pune Areas Dropdown */}
        <Select
          placeholder="Select Area"
          size="sm"
          bg="white"
          border="1px solid"
          borderColor="gray.300"
        >
          {puneAreas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </Select>

        {/* Land Type Dropdown */}
        <Select
          placeholder="All Status"
          size="sm"
          bg="white"
          borderColor="gray.300"
        >
          {landTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </Select>

        {/* Building Type Dropdown */}
        <Select
          placeholder="All Types"
          size="sm"
          bg="white"
          borderColor="gray.300"
        >
          {buildingTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </Select>

        {/* Bedrooms and Bathrooms in a Row */}
        <Flex gap={2}>
          <Select placeholder="Bedrooms" size="sm" bg="white" borderColor="gray.300" flex={1}>
            {numbersUpToTen.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Select>
          <Select placeholder="Bathrooms" size="sm" bg="white" borderColor="gray.300" flex={1}>
            {numbersUpToTen.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Select>
        </Flex>

        {/* Area Slider */}
        <Box>
          <Text fontSize="sm" mb={1}>
            Area Range: {areaRange.toLocaleString()} sqft
          </Text>
          <Slider
            defaultValue={1000}
            min={1}
            max={600000}
            step={100}
            onChange={(val) => setAreaRange(val)}
          >
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Box>

        {/* Price Slider */}
        <Box>
          <Text fontSize="sm" mb={1}>
            Price Range: {priceRange.toLocaleString()} INR
          </Text>
          <Slider
            defaultValue={3000}
            min={3000}
            max={5000000000}
            step={1000}
            onChange={(val) => setPriceRange(val)}
          >
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Box>

        {/* Search Button */}
        <Button colorScheme="blue" size="sm" w="full">
          Search
        </Button>
      </VStack>
    </Box>
  );
};

export default FindYourHome;

import React, { useState } from "react";
import {
  Box,
  Input,
  Select,
  IconButton,
  Button,
  Flex,
  Text,
  Icon,
  VStack,
  Collapse,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import MapComponent from "./Map";
import { useLocation } from "react-router-dom";

const SearchBox = () => {
  const location = useLocation();
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(3000);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

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

  const features = [
    "Air Conditioning",
    "Barbeque",
    "Bed",
    "Car Parking",
    "CCTV",
    "Child Play Area",
    "Club House",
    "Cupboard",
    "Dryer",
    "Gym",
    "Laundry",
    "Lawn",
    "Lift",
    "Microwave",
    "Moduler Kitchen",
    "Outdoor Shower",
    "Refrigerator",
    "Sauna",
    "Secuirty",
    "Swimming Pool",
    "TV Cable",
    "Washer",
    "Washing Machine",
    "Water Purifier",
    "WiFi",
    "Window Coverings",
  ];

  return (
    <>
      <Box w="100%" p={4} bg="gray.50">
        <Flex
          gap={4}
          align="center"
          wrap={{ base: "wrap", md: "nowrap" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Input
            placeholder="Address, Town, Street, ZIP, PIN"
            flex="1"
            size="lg"
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            mb={{ base: 4, md: 0 }}
          />

          <Select
            placeholder="Select City"
            flex="1"
            size="lg"
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            mb={{ base: 4, md: 0 }}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {maharashtraCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Select Area"
            flex="1"
            size="lg"
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            mb={{ base: 4, md: 0 }}
          >
            {puneAreas.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </Select>

          <Flex
            align="center"
            gap={2}
            flex="0.3"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            mb={{ base: 4, md: 0 }}
          >
            <IconButton
              aria-label="Advanced Settings"
              icon={<FiSettings />}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
            />
            <Text fontSize="lg" fontWeight="medium" cursor="pointer">
              Advanced
            </Text>
          </Flex>

          <Button colorScheme="blue" size="lg">
            Search
          </Button>
        </Flex>

        <Collapse in={isAdvancedOpen} animateOpacity>
          <VStack
            align="stretch"
            spacing={4}
            mt={4}
            bg="white"
            p={4}
            borderRadius="md"
            shadow="md"
          >
            {/* Update this Flex to display two items per row on mobile */}
            <Flex
              gap={4}
              wrap={{ base: "wrap", md: "nowrap" }} // Make it wrap on mobile
            >
              <Select placeholder="All Status" size="lg" flex="1">
                {landTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Select>

              <Select placeholder="All Types" size="lg" flex="1">
                {buildingTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Flex>

            {/* Update this Flex for Bedrooms and Bathrooms, too */}
            <Flex
              gap={4}
              wrap={{ base: "wrap", md: "nowrap" }} // Make it wrap on mobile
            >
              <Select placeholder="Bedrooms" size="lg" flex="1">
                {numbersUpToTen.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>

              <Select placeholder="Bathrooms" size="lg" flex="1">
                {numbersUpToTen.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex gap={4} wrap="wrap">
              <Input
                placeholder="Min Area (sq.ft)"
                size="lg"
                type="number"
                flex="1"
                borderColor="gray.300"
              />

              <Input
                placeholder="Max Area (sq.ft)"
                size="lg"
                type="number"
                flex="1"
                borderColor="gray.300"
              />
            </Flex>
            <Box flex="1" px={4} width="100%">
              <Flex
                direction={{ base: "row", md: "column" }}
                justify="space-between"
                align="center"
                wrap="wrap"
              >
                <Text mb={2} width={{ base: "auto", md: "100%" }}>
                  Price Range: {priceRange.toLocaleString()} INR
                </Text>
                <Box width={{ base: "70%", md: "100%" }}>
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
                    <SliderThumb boxSize={6} />
                  </Slider>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium" mb={2}>
                Other Features
              </Text>
              <Wrap spacing={4}>
                {features.map((feature, index) => (
                  <WrapItem key={index}>
                    <Checkbox value={feature}>{feature}</Checkbox>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </VStack>
        </Collapse>
      </Box>

      {location.pathname === "/" && (
        <Box padding="50px">
          <MapComponent
            selectedCity={selectedCity}
            style={{ width: "100%", height: "500px", position: "relative" }}
          />
        </Box>
      )}
    </>
  );
};

export default SearchBox;

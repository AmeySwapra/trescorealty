import React from 'react';
import { Box, Image, Text, Flex, Heading, Icon, Button } from '@chakra-ui/react';
import { FaPaperPlane, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import fb from '../assets/images/fb.png'
const GeneralAbout = () => {
  return (
    <Box maxW="1280px" mx="auto" p={5}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={5}>
        {/* Image Section */}
        <Box flex="1">
          <Image
            src={fb}
            alt="Real Estate"
            w="100%"
            h="auto"
            objectFit="cover"
          />
        </Box>

        {/* Text Section */}
        <Box flex="1" textAlign="left">
          <Heading as="h3" fontSize="3xl" mb={4}>
            The best quality in the Real Estate market
          </Heading>

          <Box mb={6}>
            <Flex align="center" mb={4}>
              <Icon as={FaPaperPlane} w={6} h={6} color="blue.500" mr={3} />
              <Text fontSize="xl" fontWeight="bold">
                Quality Support
              </Text>
            </Flex>
            <Text fontSize="md">
              Every aspect of buying a property needs the best support. Our team is
              dedicated to help you have a hassle-free transition.
            </Text>
          </Box>

          <Box mb={6}>
            <Flex align="center" mb={4}>
              <Icon as={FaGraduationCap} w={6} h={6} color="blue.500" mr={3} />
              <Text fontSize="xl" fontWeight="bold">
                Highly Skilled Employees
              </Text>
            </Flex>
            <Text fontSize="md">
              Our highly experienced employees provide you with the best hassle-free
              solutions.
            </Text>
          </Box>

          <Box mb={6}>
            <Flex align="center" mb={4}>
              <Icon as={FaBuilding} w={6} h={6} color="blue.500" mr={3} />
              <Text fontSize="xl" fontWeight="bold">
                28 years experience
              </Text>
            </Flex>
            <Text fontSize="md">
              The Journey of Tresco and the Saanjay Mulay Group goes back 28 years. A
              group that is led by Mr. Saanjay Mulay believes in the ethics of work
              culture to provide the best solutions for complex projects.
            </Text>
          </Box>

          <Button
            as="a"
            href="http://www.trescorealty.in/index.php/contact/"
            colorScheme="blue"
            size="lg"
            borderRadius="full"
          >
            Get In Touch
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralAbout;

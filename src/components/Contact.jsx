import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  Icon,
  Image,
  FormLabel,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import logo from '../assets/logo/trescorealty.jpg'

const Contact = () => {
  return (
    <Box maxW="1200px" mx="auto" p={{ base: 4, md: 6 }}>
      {/* Page Title */}
      <Box mb={8} textAlign={{ base: 'center', md: 'left' }}>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="gray.700">
          Contact Us
        </Text>
      </Box>

      {/* Form Section */}
      <Grid
        bg="#ffd210"
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        gap={{ base: 4, md: 6 }}
      >
        {/* Contact Form */}
        <GridItem>
          <Box p={6}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
              Get In Touch
            </Text>
            <form>
              <Stack spacing={4}>
                <Box>
                  <FormLabel htmlFor="yourName">Your Name</FormLabel>
                  <Input
                    id="yourName"
                    name="your-name"
                    type="text"
                    placeholder="Enter your name"
                    variant="outline"
                    bg="gray.50"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="yourEmail">Your Email</FormLabel>
                  <Input
                    id="yourEmail"
                    name="your-email"
                    type="email"
                    placeholder="Enter your email"
                    variant="outline"
                    bg="gray.50"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="yourPhone">Your Phone</FormLabel>
                  <Input
                    id="yourPhone"
                    name="your-phone"
                    type="tel"
                    placeholder="Enter your phone"
                    variant="outline"
                    bg="gray.50"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="yourSubject">Subject</FormLabel>
                  <Input
                    id="yourSubject"
                    name="your-subject"
                    type="text"
                    placeholder="Enter the subject"
                    variant="outline"
                    bg="gray.50"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="yourMessage">Your Message</FormLabel>
                  <Textarea
                    id="yourMessage"
                    name="your-message"
                    placeholder="Enter your message"
                    rows={6}
                    variant="outline"
                    bg="gray.50"
                  />
                </Box>
                <Button colorScheme="blue" size="lg" type="submit">
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </GridItem>

        {/* Contact Details and We Are Open */}
        <GridItem>
          <Grid templateColumns="1fr" mt={'50px'} gap={6}>
            {/* For Enquiries Card */}
            <Box
              bg="#e5cf26"
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
                For Enquiries
              </Text>
              <Text>
                <Icon as={FaLocationArrow} mr={2} />
                Tresco Realty, 305, Serene Bay, Plot No.- 389, Lane No. 6, Koregaon Park,
                Pune- 411001, Maharashtra (INDIA)
              </Text>
              <Text mt={2}>
                <Icon as={FaPhone} mr={2} />
                Call us on +91- 8551991800
              </Text>
              <Text mt={2}>
                <Icon as={FaEnvelope} mr={2} />
                info@trescorealty.in
              </Text>
            </Box>

            {/* We Are Open Card */}
            <Box
              bg="#e5cf26"
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Text fontWeight="bold">WE ARE OPEN</Text>
              <Text>Monday-Sunday: 9am to 8pm</Text>
            </Box>
          </Grid>
        </GridItem>

        {/* Company Logo Image */}
        <GridItem>
          <Box
            mt={{ base: 0, md: 6 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={logo}
              alt="Tresco Realty"
              maxW="200px"
              mx="auto"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;

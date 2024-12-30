import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Icon,
  Stack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import maha from "../../assets/logo/maha.png";

const Footer = () => {
  return (
    <Box as="footer" bg="#004274" color="white" w="100%" mt="0" p="0">
      {/* Main Footer Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        px={{ base: 6, md: 16 }}
        py={{ base: 8, md: 12 }}
        gap={{ base: 8, md: 12 }}
        overflowX="hidden"  // Prevent horizontal scrolling
      >
        {/* About Us Section */}
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <GridItem>
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                About Us
              </Text>
              <Text fontSize="md">
                A venture by A S Mulay &amp; Sons promoted by Sannjay A. Mulay
                Group. The group has experience of 30 years in Hospitality,
                Service Apartments’ &amp; Resto Lounge Business, Film
                Production, Media, Land Trading, and Industrial Oil.
              </Text>
            </Box>
            <Box mt={6}>
              <Link
                href="https://www.trescorealty.in/wp-content/uploads/2017/12/Rera-certificate.pdf"
                isExternal
              >
                <Image src={maha} w={"70px"} h={"70px"} />
              </Link>
            </Box>
          </GridItem>
        </Box>

        {/* Contact Us Section */}
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <GridItem>
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Contact Us
              </Text>
              <Stack spacing={3}>
                <Text fontSize="md">
                  <Icon as={FaLocationArrow} mr={2} />
                  Tresco Realty, 305, Serene Bay, Plot No.- 389, Lane No. 6,
                  Koregaon Park, Pune- 411001
                </Text>
                <Text fontSize="md">
                  <Icon as={FaPhone} mr={2} /> Call us +91- 8551991800
                </Text>
                <Text fontSize="md">
                  <Icon as={FaEnvelope} mr={2} />
                  <Link
                    href="mailto:info@trescorealty.in"
                    color="white"
                    textDecor="underline"
                  >
                    info@trescorealty.in
                  </Link>
                </Text>
              </Stack>
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                mt={6}
                borderWidth="2px"
                w={'90px'}
                h={'50px'}
                _hover={{ bg: "transparent", borderColor: "white", color:"#007bb5" }}
              >
                <Link
                  to="/blogs"
                  isExternal
                >
                  Blog
                </Link>
              </Button>
            </Box>
          </GridItem>
        </Box>

        {/* Stay Updated Section */}
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Stay Updated
          </Text>
          <Stack direction="row" spacing={2} mb={4}>
            <Input placeholder="Enter your email" bg="white" color="black" />
            <Button bg="#1a1d52" color="white" _hover={{ bg: "purple.600" }}>
              Submit
            </Button>
          </Stack>
          <Text fontSize="sm" mb={3}>
            Don’t forget to follow us on:
          </Text>
          <Stack direction="row" spacing={4}>
            <Icon as={FaFacebook} boxSize={5} />
            <Icon as={FaTwitter} boxSize={5} />
            <Icon as={FaGoogle} boxSize={5} />
            <Icon as={FaLinkedin} boxSize={5} />
          </Stack>
        </Box>

        {/* Enquiry Form */}
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Enquiry Form
          </Text>
          <Stack spacing={3}>
            <Input placeholder="Name" bg="white" color="black" />
            <Input placeholder="Email" bg="white" color="black" />
            <Input placeholder="Mobile No" bg="white" color="black" />
          </Stack>
          <Button
            mt={4}
            bg="#1a1d52"
            color="white"
            _hover={{ bg: "#bf631d" }}
          >
            Enquire Now
          </Button>
        </Box>
      </Flex>

      {/* Bottom Footer Content */}
      <Box bg="#00335a" color="white" py={10} textAlign="center" mt="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={4} textAlign="center">
          <GridItem>
            <Text fontSize="md">Copyright @2017 and Tresco</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="md">
              <Link to={'/privacy'}>
                Privacy
              </Link>{" "}
              |{" "}
              <Link
                to={'/terms'}
               
              >
                Terms and Conditions
              </Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="md">
              Managed by{" "}
              <Link
                href="/"
                isExternal
                color="white"
                textDecor="underline"
              >
                xcedo digital
              </Link>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;

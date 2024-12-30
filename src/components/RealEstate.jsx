import React from "react";
import { Box, Container, Flex, Heading, Text, List, ListItem, Image, VStack, HStack } from "@chakra-ui/react";
import conslutant from '../assets/images/conslutant.png'
const RealEstate = () => {
  return (
    <Box id="section-body" py={12}>
      <Container maxW="container.xl">
        {/* Page Title */}
        <Flex justify="center" mb={10}>
          <Heading size="lg" fontWeight="bold" textAlign="center">
            Top Real Estate Property Consultant and Agents in Pune
          </Heading>
        </Flex>

        {/* Main Content */}
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          {/* Main Content Section */}
          <Box flex="1" mr={{ lg: 8 }}>
            <Box mb={6}>
              <Image
                src={conslutant}
                alt="Real estate property in Pune"
                boxSize="100%" // Adjust image size
                objectFit="cover"
              />
            </Box>
            <VStack spacing={4} align="start">
              <Text fontSize="lg">
                Over the last few decades, Pune has grown into one of the most important IT hubs in the
                country. With the city offering the best career opportunities, many people who are seeking
                to make a good fortune here are now striving to have their own properties in Pune. If you
                are also exploring properties via top{" "}
                <Text as="span" fontWeight="bold" color="blue.500">
                  Real Estate Agents in Pune
                </Text>
                , then get in touch with us at Tresco Realty. Our team of expert real estate agents is here
                to serve you and cater to all your property requirements.
              </Text>

              <Text fontSize="lg">
                At Tresco, we specialize in all types of properties, whether affordable or premium, at
                different locations in and around Pune. We have strategic tie-ups with some of the top builders
                and developers in the city who offer smart schemes, best amenities, and competitive prices to
                potential buyers. As a reliable{" "}
                <Text as="span" fontWeight="bold" color="blue.500">
                  property consultant in Pune
                </Text>
                , we provide the best professional advice and support services both before and after the
                property transaction. We strive to make your real estate dealings a pleasurable experience with
                us! With our wealth of knowledge and in-depth understanding of the real estate market, we are
                committed to offering you the best advice.
              </Text>

              <Text fontSize="lg">
                We have one of the largest databases of verified real estate properties in Pune with which you
                can buy, sell, rent, or lease properties quickly and easily. As one of the trusted{" "}
                <Text as="span" fontWeight="bold" color="blue.500">
                  Pune Property Dealers
                </Text>
                , we offer the right solutions to our customers for all kinds of residential, commercial,
                industrial, or agricultural properties. With our local knowledge, market expertise, personalized
                services, and post-deal support, we are confident that you will come back to us for all your future
                real estate needs.
              </Text>

              <Text fontSize="lg">
                Leveraging our know-how of all types of marketing channels used in the industry today, we can help
                builders and developers to sell their current and upcoming real-estate projects faster.
              </Text>

              <Heading size="md" mt={6} mb={4}>
                Why Choose Us?
              </Heading>
              <List spacing={2}>
                <ListItem>We have a highly-experienced team of real estate agents, consultants, and advisors.</ListItem>
                <ListItem>We have professional expertise and up-to-date knowledge of the local market as well as the latest trends in the real estate industry.</ListItem>
                <ListItem>We hold one of the largest databases of verified properties ranging from low-cost to ultra-luxurious properties with accurate information on amenities, neighborhood, actual site pictures, and more.</ListItem>
                <ListItem>We provide the best possible deal from our side.</ListItem>
                <ListItem>We offer personalized services and support, both before and after the transaction.</ListItem>
                <ListItem>Our end-to-end real estate services begin from sourcing to property verification, shortlisting, arranging site visits, negotiations, due diligence, and deal closure.</ListItem>
                <ListItem>We also provide financial advice for loan approvals and sanctions and assist you with property registrations.</ListItem>
                <ListItem>We function on the fundamentals of trust, integrity, and transparency in all dealings.</ListItem>
                <ListItem>We follow a customer-centric approach to ensure full customer satisfaction and build long-term customer relationships.</ListItem>
              </List>
              <Text fontSize="lg" mt={6}>
                If you are looking for the best{" "}
                <Text as="span" fontWeight="bold" color="blue.500">
                  real estate agents in Pune
                </Text>{" "}
                to find suitable property solutions, then contact Tresco Realty or call us on{" "}
                <Text as="span" fontWeight="bold">
                  +91- 8551991800
                </Text>{" "}
                to schedule an appointment today!
              </Text>
            </VStack>
          </Box>

          {/* Sidebar */}
          
        </Flex>
      </Container>
    </Box>
  );
};

export default RealEstate;

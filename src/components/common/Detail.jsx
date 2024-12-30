import React from 'react';
import { Box, Flex, Text, Grid, GridItem, Heading } from '@chakra-ui/react';

const Detail = () => {
  return (
    <Box id="detail" className="detail-list detail-block" p={4} boxShadow="md" borderRadius="lg">
      {/* Title Section */}
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" size="lg" fontWeight="bold">
          Detail
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Updated on May 6, 2024 at 8:56 am
        </Text>
      </Flex>

      {/* Information Section - Using Grid for rows */}
      <Box p={4} borderWidth={1} borderRadius="md" bg="blue.50" mb={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem>
            <Text fontWeight="bold">Price:</Text>
            <Text>Rs. 1,45,00,000</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="bold">Property Size:</Text>
            <Text>1250 Sq Ft</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="bold">Bedrooms:</Text>
            <Text>2</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="bold">Bathrooms:</Text>
            <Text>2</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="bold">Garage:</Text>
            <Text>1</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Detail;

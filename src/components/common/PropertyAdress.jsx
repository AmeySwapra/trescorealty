import React from 'react';
import { Box, Heading, Grid, GridItem, Text } from '@chakra-ui/react';

const PropertyAddress = () => {
  return (
    <Box id="address" p={4} boxShadow="md" borderRadius="lg">
      {/* Title Section */}
      <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
        Address
      </Heading>

      {/* Address Grid */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem>
          <Text fontWeight="bold">City:</Text>
          <Text>Pune</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">State/County:</Text>
          <Text>India, Maharashtra</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">Neighborhood:</Text>
          <Text>Koregaon Park, Mundhwa</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">Country:</Text>
          <Text>India</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PropertyAddress;

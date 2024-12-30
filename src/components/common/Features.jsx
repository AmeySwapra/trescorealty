import React from 'react';
import { Box, Heading, Grid, GridItem, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Features = () => {
  return (
    <Box id="features" p={4} boxShadow="md" borderRadius="lg">
      {/* Title Section */}
      <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
        Features
      </Heading>

      {/* Features Grid */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Air Conditioning
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Bed
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Car Parking
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Child Play Area
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Club House
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Cupboard
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Gym
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Lawn
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Lift
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Microwave
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Modular Kitchen
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Refrigerator
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Security
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Swimming Pool
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          TV Cable
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Washing Machine
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Water Purifier
        </GridItem>
        <GridItem>
          <Icon as={CheckIcon} color="green.500" mr={2} />
          Window Coverings
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Features;

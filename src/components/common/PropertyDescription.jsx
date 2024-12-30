import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const PropertyDescription = () => {
  return (
    <Box id="description" p={4} boxShadow="md" borderRadius="lg">
      <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
        Description
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="md">
          New Property Alert by Tresco Realty! Discover comfort and convenience in a semifinished 2 BHK flat located in the serene locality of Mundhwa, near the passport office, Koregaon Park Annexe, Pune.
        </Text>
        <Text fontSize="md">
          <Image
            draggable="false"
            alt="👉"
            src="https://s.w.org/images/core/emoji/11/svg/1f449.svg"
            display="inline"
            boxSize="16px"
            mr={2}
          />{' '}
          Size: 1250 sqft
        </Text>
        <Text fontSize="md">
          <Image
            draggable="false"
            alt="👉"
            src="https://s.w.org/images/core/emoji/11/svg/1f449.svg"
            display="inline"
            boxSize="16px"
            mr={2}
          />{' '}
          Features: One covered car park
        </Text>
        <Text fontSize="md">
          <Image
            draggable="false"
            alt="👉"
            src="https://s.w.org/images/core/emoji/11/svg/1f449.svg"
            display="inline"
            boxSize="16px"
            mr={2}
          />{' '}
          Price: ₹1.45 crore
        </Text>
        <Text fontSize="md">
          Ideal for families looking for a blend of luxury and convenience. Schedule a visit today and take the first step towards owning your dream home!
        </Text>
        <Text fontSize="md">
          <Image
            draggable="false"
            alt="📞"
            src="https://s.w.org/images/core/emoji/11/svg/1f4de.svg"
            display="inline"
            boxSize="16px"
            mr={2}
          />{' '}
          Contact us now on +91 9764551333!
        </Text>
        <Text fontSize="md">
          <strong>#HomeForSale #PuneProperty #TrescoRealty #SpaciousHome</strong>
        </Text>
      </VStack>
    </Box>
  );
};

export default PropertyDescription;

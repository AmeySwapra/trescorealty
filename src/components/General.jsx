import React from 'react';
import { Box, Text, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import bg1 from '../assets/bg/bg1.jpg'

const General = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgImage={`url(${bg1})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py={{ base: 12, md: 24 }}
    >
      <Box textAlign="center" mb={12}>
        <Heading color="white" fontSize={{ base: '3xl', md: '4xl' }} mb={2}>
          General Features
        </Heading>
        <Text color="white" fontSize={{ base: 'lg', md: 'xl' }}>
          WHAT CAN WE OFFER?
        </Text>
      </Box>

      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align="center"
        wrap="wrap"
        gap={8}
        px={4}
      >
        <Feature
          icon="https://www.trescorealty.in/wp-content/uploads/2017/12/1-1-copy.png"
          title="Smart Design"
          description="We give life to ideas that have enduring impact."
        />
        <Feature
          icon="https://www.trescorealty.in/wp-content/uploads/2017/12/2-copy.png"
          title="Effective Solutions"
          description="We can help you get the most from your Act implementation."
        />
        <Feature
          icon="https://www.trescorealty.in/wp-content/uploads/2017/12/3-copy.png"
          title="Technical Perfection"
          description="We believe Human perfection and technical perfection are compatible."
        />
        <Feature
          icon="https://www.trescorealty.in/wp-content/uploads/2017/12/4-copy.png"
          title="Great Result"
          description="More than just your average leadership, Beyond Expectation."
        />
      </Flex>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <VStack
      align="center"
      spacing={4}
      maxW="240px"
      flex="1"
      textAlign="center"
      mb={{ base: 8, sm: 0 }}
    >
      <Image src={icon} alt={title} boxSize="60px" mb={4} />
      <Heading size="md" color="white">{title}</Heading>
      <Text color="white" fontSize="sm">{description}</Text>
    </VStack>
  );
};

export default General;

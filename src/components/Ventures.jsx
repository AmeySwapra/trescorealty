import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";
import client from '../assets/images/client.png'
const Ventures = () => {
  return (
    <Box py={12} bg="#f9f9f9">
      <Center mb={6}>
        <Heading size="lg" color="gray.800" fontWeight="bold">
          Our Other Ventures
        </Heading>
      </Center>

      <Center>
        <Image
          src={client}
          alt="Ventures Image"
          boxSize="150px" 
          objectFit="cover" 
        />
      </Center>
    </Box>
  );
};

export default Ventures;

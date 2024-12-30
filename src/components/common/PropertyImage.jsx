import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import h1 from '../../assets/images/h1.jpeg';

const PropertyImage = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      width="100%"
    >
      <Image 
        src={h1} 
        alt="Property Image" 
        boxSize="95%" 
        objectFit="cover" 
      />
    </Box>
  );
};

export default PropertyImage;

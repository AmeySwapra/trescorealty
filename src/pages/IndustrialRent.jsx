import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SearchBox from '../components/common/SearchBox';
import FindYourHome from '../components/common/FindYourHome';
import PropertyStatus from '../components/common/PropertyStatus';
import PropertyType from '../components/common/PropertyType';
import PropertyList from '../components/common/PropertyList';
import PropertyCards from '../components/common/PropertyCards';

function IndustrialRent() {
  return (
    <>
      <Header />
      <SearchBox />
 <Heading pl={10} pt={5}>Industrial Rent</Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }} 
        justify="space-between"
        p={4}
      >
        {/* Sidebar */}
        <Box
          w={{ base: '100%', md: '20%' }} 
          p={4}
        >
          <FindYourHome />
          <PropertyStatus />
          <PropertyType />
          <PropertyCards />
        </Box>

        {/* Property List */}
        <Box
          w={{ base: '100%', md: '75%' }} 
          p={4}
        >
          <PropertyList />
        </Box>
      </Flex>

      <Footer />
    </>
  );
}

export default IndustrialRent;

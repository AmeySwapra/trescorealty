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
import { Helmet } from 'react-helmet-async';

function ResidentialSale() {
  return (
    <>
     <Helmet>
        <title>Residential for Sale-Trescorealty</title>
        </Helmet>
      <Header />
      <SearchBox />
      <Heading pl={{ base: 4, md: 10 }} pt={{ base: 3, md: 5 }} textAlign={{ base: 'center', md: 'left' }}>
        Residential Sale
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        p={{ base: 2, md: 4 }}
        gap={{ base: 4, md: 6 }} // Add spacing between items
      >
        {/* Sidebar */}
        <Box
          w={{ base: '100%', md: '25%' }}
          p={{ base: 2, md: 4 }}
          bg={{ base: 'gray.50', md: 'white' }} // Background color for better visibility
          borderRadius="md" // Add rounded corners for mobile
          boxShadow={{ base: 'sm', md: 'none' }} // Add shadow for mobile
        >
          <FindYourHome />
          <PropertyStatus />
          <PropertyType />
          <PropertyCards />
        </Box>

        {/* Property List */}
        <Box
          w={{ base: '100%', md: '70%' }}
          p={{ base: 2, md: 4 }}
          bg="white"
          borderRadius="md"
        >
          <PropertyList />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default ResidentialSale;

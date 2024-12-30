import React from 'react';
import { Box, Container, Grid, Heading, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';

const Terms = () => {
  return (
    <Box id="section-body" py={8}>
      <Container maxW="container.lg">
        {/* Page Title */}
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" color="gray.700">
            Terms and Conditions
          </Heading>
        </Box>

        {/* Content Section */}
        <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={8}>
          {/* Main Content */}
          <Box>
            <Box border="1px" borderColor="gray.200" borderRadius="md" p={6}>
              <Text mb={4}>
                If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Tresco Realty’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
              </Text>
              <Text mb={4}>
                The term ‘us’ or ‘we’ refers to the owner of the website whose registered office is Tresco Realty, A-201, Rajat Complex, Opp. Bank of India, Lane no.6, Koregoan Park, Pune 41101, Maharashtra, India. The term ‘you’ refers to the user or viewer of our website.
              </Text>

              <Heading as="h2" size="lg" mb={4}>
                The use of this website is subject to the following terms of use:
              </Heading>
              <UnorderedList spacing={3} mb={4}>
                <ListItem>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</ListItem>
                <ListItem>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</ListItem>
                <ListItem>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</ListItem>
                <ListItem>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</ListItem>
                <ListItem>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</ListItem>
                <ListItem>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</ListItem>
                <ListItem>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</ListItem>
                <ListItem>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the Union of India.</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/* Sidebar (optional) */}
          <Box display={{ base: 'none', lg: 'block' }}>
            {/* Sidebar content can be added here */}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;

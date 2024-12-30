import { Box, Container, Grid, Heading, Text, UnorderedList, ListItem, Link, VStack } from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Box id="section-body">
      <Container maxW="container.lg" py={8}>
        <Box className="page-title breadcrumb-top">
          <Grid templateColumns="1fr" gap={6}>
            <Box>
              <Heading as="h1" size="xl" className="title-head">
                Privacy
              </Heading>
            </Box>
          </Grid>
        </Box>

        <Box className="section-detail-content default-page" py={8}>
          <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={8}>
            <Box className="container-contentbar">
              <Box className="page-main">
                <Box className="article-detail">
                  <Box as="article" id="post-748" className="post-748 page">
                    <Box className="entry-content">
                      <Text>
                        This privacy policy sets out how Tresco Realty uses and protects any information that you give Tresco Realty when you use this website. Tresco Realty is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Tresco Realty may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 21 December 2017.
                      </Text>

                      <Heading as="h2" size="lg" mt={6}>
                        What we collect
                      </Heading>
                      <Text fontWeight="bold">We may collect the following information:</Text>
                      <UnorderedList pl={4}>
                        <ListItem>Name and job title</ListItem>
                        <ListItem>Contact information including email address</ListItem>
                        <ListItem>Demographic information such as postcode, preferences, and interests</ListItem>
                        <ListItem>Other information relevant to customer surveys and/or offers</ListItem>
                      </UnorderedList>

                      <Heading as="h2" size="lg" mt={6}>
                        What we do with the information we gather
                      </Heading>
                      <Text fontWeight="bold">
                        We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                      </Text>
                      <UnorderedList pl={4}>
                        <ListItem>Internal record keeping.</ListItem>
                        <ListItem>We may use the information to improve our products and services.</ListItem>
                        <ListItem>We may periodically send promotional emails about new products, special offers, or other information which we think you may find interesting using the email address which you have provided.</ListItem>
                        <ListItem>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax, or mail. We may use the information to customize the website according to your interests.</ListItem>
                      </UnorderedList>

                      <Heading as="h2" size="lg" mt={6}>
                        Security
                      </Heading>
                      <Text>
                        We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
                      </Text>

                      <Heading as="h2" size="lg" mt={6}>
                        How we use cookies
                      </Heading>
                      <UnorderedList pl={4}>
                        <ListItem>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site.</ListItem>
                        <ListItem>Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.</ListItem>
                        <ListItem>We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</ListItem>
                        <ListItem>Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</ListItem>
                        <ListItem>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</ListItem>
                      </UnorderedList>

                      <Heading as="h2" size="lg" mt={6}>
                        Links to other websites
                      </Heading>
                      <Text>
                        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                      </Text>

                      <Heading as="h2" size="lg" mt={6}>
                        Controlling your personal information
                      </Heading>
                      <Text fontWeight="bold">
                        You may choose to restrict the collection or use of your personal information in the following ways:
                      </Text>
                      <UnorderedList pl={4}>
                        <ListItem>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</ListItem>
                        <ListItem>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <Link href="mailto:unsubscribe@trescorealty.in">unsubscribe@trescorealty.in</Link>.</ListItem>
                        <ListItem>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</ListItem>
                        <ListItem>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.</ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="container-sidebar">
              <Box id="sidebar" className="sidebar-white">
                {/* Sidebar content can go here */}
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;

import { Box, Container, Flex, Heading, Text, Link, SimpleGrid, VStack, Image, Icon, GridItem, HStack } from '@chakra-ui/react';
import { FaCalendar, FaBookmark, FaCaretRight } from 'react-icons/fa';

const PostCard = ({ post }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={6} height="400px">
    <Box position="relative" height="200px">
      <Image
        src={post.image}
        alt={post.title}
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box position="absolute" top={2} left={2} backgroundColor="rgba(0,0,0,0.5)" p={2} borderRadius="md">
        <Icon as={FaBookmark} color="white" />
      </Box>
    </Box>
    <Box p={4} height="200px" display="flex" flexDirection="column" justifyContent="space-between">
      <VStack align="start" spacing={2} height="100%">
        <HStack spacing={2}>
          <Text fontSize="sm" color="gray.500">
            <Icon as={FaCalendar} mr={1} />
            {post.date}
          </Text>
          <Text fontSize="sm" color="gray.500">
            <Icon as={FaBookmark} mr={1} />
            <Link href={post.categoryLink} color="teal.500">{post.category}</Link>
          </Text>
        </HStack>
        <Heading size="md" as="h3">{post.title}</Heading>
        <Text fontSize="md" color="gray.600">{post.excerpt}</Text>
        <Link href={post.link} color="teal.500" fontSize="sm">
          Continue reading <Icon as={FaCaretRight} />
        </Link>
      </VStack>
    </Box>
  </Box>
);

const Blogs = () => {
  const posts = [
    {
      image: "https://www.trescorealty.in/wp-content/uploads/2020/06/Fully-Furnished-Office-Commercial-Space-for-rent-in-Baner-Pune-385x258.jpg",
      title: "Best Property Consultant in Pune | Top Real Estate Agents in Pune",
      date: "June 28, 2020",
      category: "Real Estate Pune",
      categoryLink: "https://www.trescorealty.in/category/real-estate-pune/",
      excerpt: "Best Real Estate Property Agents and Consultant in Pune Tresco Realty is one of the leading real...",
      link: "https://www.trescorealty.in/best-real-estate-property-agents-and-consultant-in-pune/"
    },
    {
      image: "https://www.trescorealty.in/wp-content/uploads/2018/08/WhatsApp-Image-2018-08-08-at-7.09.48-AM-385x258.jpeg",
      title: "For all your Real Estate searches in Pune",
      date: "August 27, 2018",
      category: "Real Estate Pune",
      categoryLink: "https://www.trescorealty.in/category/real-estate-pune/",
      excerpt: "A venture by A S Mulay &amp; Sons promoted by Saanjay Mulay Group. With over 28 years of experience we...",
      link: "https://www.trescorealty.in/real-estate-consultant-in-pune/"
    },
    {
      image: "https://www.trescorealty.in/wp-content/uploads/2018/04/WhatsApp-Image-2018-04-28-at-2.02.15-PM-385x258.jpeg",
      title: "The Rising Facts About Pune Real Estate",
      date: "August 21, 2018",
      category: "Real Estate Pune",
      categoryLink: "https://www.trescorealty.in/category/real-estate-pune/",
      excerpt: "The real estate is vibrant with activity. As the requirement for apartments and houses are...",
      link: "https://www.trescorealty.in/rising-facts-pune-real-estate/"
    }
  ];

  return (
    <Box py={10} bg="gray.50">
      <Container maxW="container.xl">
      <Heading as="h1" size="2xl" mb={4} textTransform="uppercase">Blogs</Heading>
        <Heading as="h2" size="xl" mb={4}>Tresco</Heading>
        <Text fontSize="lg" mb={8} color="gray.600">Business</Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {posts.map((post, index) => (
            <GridItem key={index}>
              <PostCard post={post} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;

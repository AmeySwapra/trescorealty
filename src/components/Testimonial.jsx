import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    quote: "I got really good property investment advice from Mr. Saanjay. Very knowledgeable. Highly recommended if you looking to buy property in east of Pune.",
    author: "Sujata Mehta",
  },
  {
    quote: "Mr. Saanjay and his team at Trescorealty helped us immensely for looking at our commercial lease requirement in Kharadi area. He spent a lot of time in understanding our needs and showing us properties exactly matching our needs.",
    author: "Viral Shah",
  },
  {
    quote: "Thank You Tresco for finding me a tenant in such a short span of time and meeting my expected rent and deposit requirement. Very professional and efficient team.",
    author: "Deepak Arora",
  },
  {
    quote: "Thank you for your great service, will definitely recommend to my friends!",
    author: "Ravi Jadhav",
  },
];

const Testimonial = () => {
  return (
    <Box py={12} bg="#00a3e4">
      <Box textAlign="center" mb={10}>
        <Heading
          size="lg"
          color="white"
          mb="20px"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="58px"
        >
          Our Testimonials
        </Heading>
      </Box>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Flex
              justify="center"
              align="center"
              height="100%" 
              direction="column"
            >
              <VStack
                bg="white"
                p={8}
                gap={8}
                borderRadius="lg"
                boxShadow="lg"
                align="start"
                width={{ base: "80%", sm: "70%", md: "50%" }}
                height="350px"
                justify="center"
              >
                <Text color="gray.600" textAlign="center" fontSize="xl">
                  "{testimonial.quote}"
                </Text>
                
                {/* Center the Author Name */}
                <Heading size="md" color="gray.700" textAlign="center">
                  - {testimonial.author}
                </Heading>
              </VStack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonial;

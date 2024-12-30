import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Flex justifyContent="center" mt={4}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        mr={2}
      >
        Previous
      </Button>
      <Text>
        {currentPage} of {totalPages}
      </Text>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        ml={2}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;

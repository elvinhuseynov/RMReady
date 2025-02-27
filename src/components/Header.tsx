import { Flex, Heading, Link, HStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export function Header() {
  return (
    <Flex
      as="header"
      bg="blue.500"
      color="white"
      p={4}
      align="center"
      justify="space-between"
    >
      <Heading size="lg">Pet Gallery</Heading>
      <HStack gap={4}>
        <Link as={RouterLink} _hover={{ textDecoration: "underline" }}>
          <RouterLink to="/dogs">Dogs</RouterLink>
        </Link>
        <Link as={RouterLink} _hover={{ textDecoration: "underline" }}>
          <RouterLink to="/cats">Cats</RouterLink>
        </Link>
      </HStack>
    </Flex>
  );
}

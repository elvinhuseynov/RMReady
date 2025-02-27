import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
      <Text>© 2025 Pet Gallery. All rights reserved.</Text>
    </Box>
  );
}

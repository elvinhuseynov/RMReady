import React, { useState, useEffect } from 'react';
import { Grid, Box, Image, Button, Spinner, Container, Heading } from '@chakra-ui/react';

export function DogGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
      const data = await response.json();
      setImages(data.message);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={5}>Dogs Gallery</Heading>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {images.map((img) => (
            <Box key={img} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={img} alt="Dog" objectFit="cover" />
            </Box>
          ))}
        </Grid>
      )}
      <Button mt={8} onClick={fetchDogs}>
        Load More Dogs
      </Button>
    </Container>
  );
}

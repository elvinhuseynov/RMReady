import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Image,
  Button,
  Spinner,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export const CatGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=6"
      );
      const data = await response.json();
      setImages(data.map((item) => item.url));
    } catch (error) {
      console.error("Error fetching cat images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={5}>Cats Gallery</Heading>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={img} alt="Cat" objectFit="cover" />
            </Box>
          ))}
        </Grid>
      )}
      <Button mt={8} onClick={fetchCats}>
        Load More Cats
      </Button>
    </Container>
  );
};

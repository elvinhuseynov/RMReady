// components/PokemonCard.jsx
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  // Compute the Pokémon ID from the URL provided by the API
  const id = pokemon.url.split('/').filter(Boolean).pop();
  // Construct an image URL. This is one common way; you can adjust as needed.
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${id}`}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} _hover={{ boxShadow: 'lg' }}>
        <Image src={imageUrl} alt={pokemon.name} mx="auto" />
        <Text mt={2} textAlign="center" fontWeight="bold" textTransform="capitalize">
          {pokemon.name}
        </Text>
      </Box>
    </Link>
  );
}

export default PokemonCard;

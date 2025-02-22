// pages/PokemonDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Image, Text, Stack, Button, Spinner, Center } from '@chakra-ui/react';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch Pokémon details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh">
        <Text fontSize="xl" color="red.500">{error}</Text>
      </Center>
    );
  }

  return (
    <Box p={6}>
      <Link to="/">
        <Button mb={4}>Back to List</Button>
      </Link>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          boxSize="200px"
          objectFit="cover"
        />
        <Box>
          <Heading textTransform="capitalize">{pokemon.name}</Heading>
          <Text mt={2}><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</Text>
          <Text mt={2}><strong>Abilities:</strong> {pokemon.abilities.map((a) => a.ability.name).join(', ')}</Text>
          <Text mt={2}><strong>Stats:</strong></Text>
          {pokemon.stats.map((stat, index) => (
            <Text key={index}>
              {stat.stat.name}: {stat.base_stat}
            </Text>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default PokemonDetail;

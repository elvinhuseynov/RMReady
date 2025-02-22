// pages/PokemonList.jsx
import { useEffect, useState } from 'react';
import { Grid, Spinner, Center, Text } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      });
  }, []);

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
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} p={6}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </Grid>
  );
}

export default PokemonList;

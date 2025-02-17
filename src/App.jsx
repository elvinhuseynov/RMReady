import { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Spinner,
  Center,
  Heading,
  Toast
} from '@chakra-ui/react';

const CharacterCard = ({ character }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      _hover={{ boxShadow: 'xl' }}
    >
      <Center>
        <Image
          src={character.image}
          alt={character.name}
          borderRadius="full"
          boxSize="150px"
          mb={4}
        />
      </Center>
      <Heading as="h3" size="md" textAlign="center" mb={2}>
        {character.name}
      </Heading>
      <Text textAlign="center">Species: {character.species}</Text>
      <Text textAlign="center">Status: {character.status}</Text>
    </Box>
  );
};

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message || 'An error occurred');
        Toast.toaster.create({
          title: 'Error',
          description: err.message || 'An error occurred while fetching data.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="teal" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh">
        <Text color="red.500" fontSize="xl">
          Error: {error}
        </Text>
      </Center>
    );
  }

  return (
    <Box p={8}>
      <Heading mb={8} textAlign="center">
        Rick and Morty Characters
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default App;

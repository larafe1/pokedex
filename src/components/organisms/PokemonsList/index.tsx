import { Flex, Text } from '@chakra-ui/react';

import PokemonDashboardCard from '@/components/organisms/PokemonDashboardCard';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsList() {
  const { pokemons, hasReachedEnd } = usePokemons();

  return (
    <Flex wrap="wrap" position="absolute" justify="center">
      {pokemons.map((pokemon) => (
        <PokemonDashboardCard key={pokemon.name} {...pokemon} />
      ))}

      {hasReachedEnd && (
        <Text
          fontStyle="italic"
          my="4rem"
          fontSize="xl"
          w="full"
          textAlign="center"
        >
          No more pokémons to show
        </Text>
      )}
    </Flex>
  );
}

export default PokemonsList;

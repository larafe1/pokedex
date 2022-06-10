import { Flex, Text } from '@chakra-ui/react';

import PokemonProfileCardIndex from '@/components/atoms/PokemonProfileCardIndex';
import { usePokemons } from '@/hooks/usePokemons';
import { Colors } from '@/styles/theme';

function PokemonProfileCardHeader() {
  const { pokemon } = usePokemons();

  return (
    <Flex
      w="100%"
      h="10%"
      px="30px"
      direction="row"
      justify="space-between"
      align="center"
      bg={Colors.lightGray}
      border={`2px solid ${Colors.text}`}
    >
      <PokemonProfileCardIndex dexIndex={pokemon.dexIndex} />
      {pokemon.isLegendary && (
        <Flex
          w="6.5rem"
          h="1.8rem"
          justify="center"
          align="center"
          borderRadius="5px"
          bg="yellow.200"
        >
          <Text fontWeight="600">Legendary</Text>
        </Flex>
      )}
    </Flex>
  );
}

export default PokemonProfileCardHeader;

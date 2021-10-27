import { Flex, Text } from '@chakra-ui/react';

import PokemonProfileCardIndex from '@/components/atoms/PokemonProfileCardIndex';
import { usePokemons } from '@/hooks/usePokemons';
import { palette } from '@/styles/theme';

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
      borderBottom={`1px solid ${palette.border}`}
      borderRadius="10px 10px 0 0"
      bg={palette.darkGray}
    >
      <PokemonProfileCardIndex>{pokemon.dexIndex}</PokemonProfileCardIndex>
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

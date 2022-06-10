import { Flex } from '@chakra-ui/react';

import PokemonProfileCardArtwork from '@/components/atoms/PokemonProfileCardArtwork';
import PokemonProfileCardName from '@/components/atoms/PokemonProfileCardName';
import PokemonProfileCardStatsProgress from '@/components/atoms/PokemonProfileCardStatsProgress';
import { usePokemons } from '@/hooks/usePokemons';
import { Colors } from '@/styles/theme';

function PokemonProfileCardBody() {
  const { pokemon } = usePokemons();

  return (
    <Flex
      w="100%"
      h="55%"
      direction="row"
      bg={Colors.lightGray}
      borderLeft={`2px solid ${Colors.text}`}
      borderRight={`2px solid ${Colors.text}`}
    >
      <PokemonProfileCardArtwork artworkUrl={pokemon.artworkUrl} />
      <Flex w="70%" direction="column">
        <PokemonProfileCardName name={pokemon.name} />
        <Flex h="85%" direction="column" justify="space-evenly">
          <PokemonProfileCardStatsProgress
            label="HP"
            value={pokemon.hp}
            colorScheme="whatsapp"
          />
          <PokemonProfileCardStatsProgress
            label="Attack"
            value={pokemon.attack}
            colorScheme="red"
          />
          <PokemonProfileCardStatsProgress
            label="Defense"
            value={pokemon.defense}
            colorScheme="twitter"
          />
          <PokemonProfileCardStatsProgress
            label="Speed"
            value={pokemon.speed}
            colorScheme="yellow"
          />
          <PokemonProfileCardStatsProgress
            label="Sp. Attack"
            value={pokemon.specialAttack}
            colorScheme="orange"
          />
          <PokemonProfileCardStatsProgress
            label="Sp. Defense"
            value={pokemon.specialDefense}
            colorScheme="purple"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PokemonProfileCardBody;

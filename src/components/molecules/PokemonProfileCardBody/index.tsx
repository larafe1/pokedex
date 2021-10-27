import { Flex } from '@chakra-ui/react';
import { usePalette } from 'react-palette';

import PokemonProfileCardArtwork from '@/components/atoms/PokemonProfileCardArtwork';
import PokemonProfileCardName from '@/components/atoms/PokemonProfileCardName';
import PokemonProfileCardStatsProgress from '@/components/atoms/PokemonProfileCardStatsProgress';
import { usePokemons } from '@/hooks/usePokemons';
import { palette } from '@/styles/theme';

function PokemonProfileCardBody() {
  const { pokemon } = usePokemons();
  const { data: mainColor } = usePalette(pokemon.artworkUrl);

  return (
    <Flex
      w="100%"
      h="55%"
      direction="row"
      bgGradient={`linear(to-r, ${mainColor.lightVibrant}, ${palette.darkGray})`}
    >
      <PokemonProfileCardArtwork artworkUrl={pokemon.artworkUrl} />
      <Flex w="70%" direction="column">
        <PokemonProfileCardName>{pokemon.name}</PokemonProfileCardName>
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

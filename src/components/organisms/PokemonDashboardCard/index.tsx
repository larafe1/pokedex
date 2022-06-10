import { memo } from 'react';

import { Flex } from '@chakra-ui/react';

import PokemonDashboardCardIndex from '@/components/atoms/PokemonDashboardCardIndex';
import PokemonDashboardCardName from '@/components/atoms/PokemonDashboardCardName';
import PokemonDashboardCardArtwork from '@/components/molecules/PokemonDashboardCardArtwork';
import { Colors, BoxShadow } from '@/styles/theme';
import { IPokemonEssentials } from '@/types';

function PokemonDashboardCard({ name, url }: IPokemonEssentials) {
  const dexIndex = +url.split('/')[url.split('/').length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexIndex}.png`;

  return (
    <Flex>
      <Flex
        w="15rem"
        h="14rem"
        m="3rem"
        position="relative"
        direction="column"
        border={`1px solid ${Colors.text}`}
        bg={Colors.lightGray}
        cursor="pointer"
        transition="all 0.3s ease"
        _hover={{
          boxShadow: BoxShadow.pink,
          transform: 'translateY(-6px)'
        }}
      >
        <PokemonDashboardCardIndex dexIndex={dexIndex} />
        <PokemonDashboardCardArtwork
          artworkUrl={artworkUrl}
          dexIndex={dexIndex}
        />
        <PokemonDashboardCardName name={name.toUpperCase()} />
      </Flex>
    </Flex>
  );
}

export default memo(PokemonDashboardCard);

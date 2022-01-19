import { memo } from 'react';

import { Flex } from '@chakra-ui/react';
import { usePalette } from 'react-palette';

import PokemonDashboardCardIndex from '@/components/atoms/PokemonDashboardCardIndex';
import PokemonDashboardCardName from '@/components/atoms/PokemonDashboardCardName';
import PokemonDashboardCardArtwork from '@/components/molecules/PokemonDashboardCardArtwork';
import { palette } from '@/styles/theme';
import { IPokemonEssentials } from '@/types';

function PokemonDashboardCard({ name, url }: IPokemonEssentials) {
  const dexIndex = +url.split('/')[url.split('/').length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexIndex}.png`;

  const { data: mainColor, loading: isArtworkBgLoading } =
    usePalette(artworkUrl);

  return (
    <Flex w="20rem" m="1rem">
      <Flex
        w="100%"
        h="15rem"
        m="38.5px"
        position="relative"
        direction="column"
        border={`2px solid ${palette.lightGray}`}
        borderRadius="8px"
        bgGradient={`linear(to-b, ${mainColor.lightVibrant}, ${palette.lightGray})`}
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
        transition="all .2s"
        _hover={{
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px',
          transform: 'translateY(-6px)'
        }}
      >
        <PokemonDashboardCardIndex
          isArtworkBgLoading={isArtworkBgLoading}
          dexIndex={dexIndex}
        />
        <PokemonDashboardCardArtwork
          isArtworkBgLoading={isArtworkBgLoading}
          artworkUrl={artworkUrl}
          dexIndex={dexIndex}
        />
        <PokemonDashboardCardName
          isArtworkBgLoading={isArtworkBgLoading}
          name={name.toUpperCase()}
        />
      </Flex>
    </Flex>
  );
}

export default memo(PokemonDashboardCard);

import Link from 'next/link';

import { Flex, Image } from '@chakra-ui/react';

import { IPokemonDashboardCardArtworkProps } from '@/types';

function PokemonDashboardCardArtwork({
  artworkUrl,
  dexIndex
}: IPokemonDashboardCardArtworkProps) {
  return (
    <Flex w="100%" h="10.5rem" mt="12px" justify="center">
      <Link href={`/pokemon/${dexIndex}`} passHref={true}>
        <Image src={artworkUrl} alt={artworkUrl} maxW="75%" />
      </Link>
    </Flex>
  );
}

export default PokemonDashboardCardArtwork;

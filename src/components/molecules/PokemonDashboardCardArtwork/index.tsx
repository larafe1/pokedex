import Link from 'next/link';

import { Flex, Image } from '@chakra-ui/react';

import SkeletonLoader from '@/components/atoms/SkeletonLoader';
import { IPokemonDashboardCardArtworkProps } from '@/types';

function PokemonDashboardCardArtwork({
  isArtworkBgLoading,
  artworkUrl,
  dexIndex
}: IPokemonDashboardCardArtworkProps) {
  return (
    <>
      {isArtworkBgLoading ? (
        <SkeletonLoader w="100%" h="194px" />
      ) : (
        <Flex w="100%" h="194px" mt="12px" justify="center">
          <Link href={`/pokemon/${dexIndex}`} passHref={true}>
            <Image src={artworkUrl} alt="" maxW="75%" />
          </Link>
        </Flex>
      )}
    </>
  );
}

export default PokemonDashboardCardArtwork;

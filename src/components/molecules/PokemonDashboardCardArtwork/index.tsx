import { useState } from 'react';

import Link from 'next/link';

import { Flex, Image } from '@chakra-ui/react';

import Loader from '@/components/atoms/Loader';
import { IPokemonDashboardCardArtworkProps } from '@/types';

function PokemonDashboardCardArtwork({
  dexIndex,
  artworkUrl
}: IPokemonDashboardCardArtworkProps) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <Flex w="100%" justify="center">
      {isImgLoading && <Loader />}
      <Link href={`/pokemon/${dexIndex}`} passHref={true}>
        <Image
          src={artworkUrl}
          alt=""
          maxW="75%"
          onLoad={() => setIsImgLoading(false)}
        />
      </Link>
    </Flex>
  );
}

export default PokemonDashboardCardArtwork;

import { Heading } from '@chakra-ui/react';

import { IPokemonCardProps } from '@/types';

function PokemonProfileCardIndex({ dexIndex }: IPokemonCardProps) {
  return (
    <Heading as="h3" size="lg">
      {dexIndex}
    </Heading>
  );
}

export default PokemonProfileCardIndex;

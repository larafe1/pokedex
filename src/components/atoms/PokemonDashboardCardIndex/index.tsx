import { Flex, Text } from '@chakra-ui/react';

import { palette } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardIndex({
  isArtworkBgLoading,
  dexIndex
}: IPokemonCardProps) {
  return (
    <Flex
      w="2.5rem"
      h="1.5rem"
      m="-1px"
      top="0"
      left="0"
      position="absolute"
      direction="row"
      align="center"
      justify="center"
      fontWeight="600"
      borderRadius="5px 0 5px 0"
      bg={palette.lightGray}
    >
      {!isArtworkBgLoading && <Text>{dexIndex}</Text>}
    </Flex>
  );
}

export default PokemonDashboardCardIndex;

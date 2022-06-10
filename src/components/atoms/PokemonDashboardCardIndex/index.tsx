import { Flex, Text } from '@chakra-ui/react';

import { Colors } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardIndex({ dexIndex }: IPokemonCardProps) {
  return (
    <Flex
      w="2.5rem"
      h="1.5rem"
      top="0"
      left="0"
      position="absolute"
      align="center"
      justify="center"
      fontWeight="600"
      bg={Colors.lightGray}
    >
      <Text>{dexIndex}</Text>
    </Flex>
  );
}

export default PokemonDashboardCardIndex;

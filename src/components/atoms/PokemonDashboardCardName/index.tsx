import { Flex, Text } from '@chakra-ui/react';

import { Colors } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardName({ name }: IPokemonCardProps) {
  return (
    <Flex
      w="100%"
      h="3rem"
      justify="center"
      align="center"
      bg={Colors.lightGray}
    >
      <Text fontWeight="600">{name}</Text>
    </Flex>
  );
}

export default PokemonDashboardCardName;

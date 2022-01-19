import { Flex, Text } from '@chakra-ui/react';

import SkeletonLoader from '@/components/atoms/SkeletonLoader';
import { palette } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardName({
  isArtworkBgLoading,
  name
}: IPokemonCardProps) {
  return (
    <Flex
      w="100%"
      h="3rem"
      justify="center"
      align="center"
      bg={palette.lightGray}
    >
      {isArtworkBgLoading ? (
        <SkeletonLoader w="90%" h="1.3rem" />
      ) : (
        <Text fontWeight="600">{name}</Text>
      )}
    </Flex>
  );
}

export default PokemonDashboardCardName;

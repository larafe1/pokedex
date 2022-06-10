import { Flex, Text, Progress } from '@chakra-ui/react';

import { Colors } from '@/styles/theme';
import { IPokemonProfileCardStatsProgressProps } from '@/types';

function PokemonProfileCardStatsProgress({
  label,
  value,
  colorScheme
}: IPokemonProfileCardStatsProgressProps) {
  return (
    <Flex
      mx="4rem"
      justify="space-between"
      align="center"
      animation="grow-bounce .35s ease-in"
    >
      <Text fontWeight="bold">{label}</Text>
      <Progress
        hasStripe
        isAnimated
        value={+value}
        w="md"
        h="1.3rem"
        border={`1px solid ${Colors.border}`}
        colorScheme={colorScheme}
      />
    </Flex>
  );
}

export default PokemonProfileCardStatsProgress;

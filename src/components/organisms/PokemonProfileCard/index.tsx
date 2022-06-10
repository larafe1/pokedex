import { Flex } from '@chakra-ui/react';

import PokemonProfileCardBody from '@/components/molecules/PokemonProfileCardBody';
import PokemonProfileCardFooter from '@/components/molecules/PokemonProfileCardFooter';
import PokemonProfileCardHeader from '@/components/molecules/PokemonProfileCardHeader';
import { BoxShadow } from '@/styles/theme';

function PokemonProfileCard() {
  return (
    <Flex h="100vh">
      <Flex
        w="65rem"
        h="45rem"
        m="auto"
        direction="column"
        justify="space-between"
        boxShadow={BoxShadow.rainbow}
      >
        <PokemonProfileCardHeader />
        <PokemonProfileCardBody />
        <PokemonProfileCardFooter />
      </Flex>
    </Flex>
  );
}

export default PokemonProfileCard;

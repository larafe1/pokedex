import { Flex } from '@chakra-ui/react';

import PokemonProfileCardBody from '@/components/molecules/PokemonProfileCardBody';
import PokemonProfileCardFooter from '@/components/molecules/PokemonProfileCardFooter';
import PokemonProfileCardHeader from '@/components/molecules/PokemonProfileCardHeader';
import { palette } from '@/styles/theme';

function PokemonProfileCard() {
  return (
    <Flex h="100vh" pt="70px">
      <Flex
        w="60%"
        h="90%"
        m="auto"
        direction="column"
        justify="space-between"
        border={`1px solid ${palette.border}`}
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
      >
        <PokemonProfileCardHeader />
        <PokemonProfileCardBody />
        <PokemonProfileCardFooter />
      </Flex>
    </Flex>
  );
}

export default PokemonProfileCard;

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Heading } from '@chakra-ui/react';

import { usePokemons } from '@/hooks/usePokemons';
import { palette } from '@/styles/theme';

function PokedexButton() {
  const router = useRouter();
  const { renderCount, setIsFirstLoad } = usePokemons();

  const handleClick = () => {
    if (router.pathname !== '/') {
      renderCount.current = renderCount.current - 50;
      setIsFirstLoad(true);
    }
  };

  return (
    <Link href="/" passHref={true}>
      <Flex
        w="10rem"
        h="55px"
        ml="3.5rem"
        direction="column"
        align="center"
        justify="center"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        cursor="pointer"
        borderBottom={`2px solid ${palette.darkRed}`}
        bg={palette.darkRed}
        transition="all .2s"
        _hover={{
          borderColor: '#fff'
        }}
        onClick={() => handleClick()}
      >
        <Heading as="h2" size="lg" color="#fff" fontFamily="Chakra Petch">
          Pokédex
        </Heading>
      </Flex>
    </Link>
  );
}

export default PokedexButton;

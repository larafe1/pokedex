import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Heading } from '@chakra-ui/react';

function PokedexButton() {
  const { pathname, push } = useRouter();

  const handleClick = () => {
    if (pathname === '/') return;
    push('/');
  };

  return (
    <Link href="/" passHref={true}>
      <Flex
        w="10rem"
        h="55px"
        direction="column"
        align="center"
        justify="center"
        cursor="pointer"
        transition="all .2s"
        onClick={handleClick}
      >
        <Heading as="h2" size="md" color="#fff" fontFamily="Chakra Petch">
          Pokédex
        </Heading>
      </Flex>
    </Link>
  );
}

export default PokedexButton;

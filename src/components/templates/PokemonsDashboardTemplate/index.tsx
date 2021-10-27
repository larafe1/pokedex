import { useCallback, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import Loader from '@/components/atoms/Loader';
import PokemonDashboardCard from '@/components/organisms/PokemonDashboardCard';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const { getPokemons, pokemons, isFirstLoad } = usePokemons();

  const hasReachedPageBottom = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      getPokemons();
    }
  }, [getPokemons]);

  useEffect(() => {
    if (isFirstLoad) {
      getPokemons();
    } else {
      window.addEventListener('scroll', hasReachedPageBottom);

      return () => window.removeEventListener('scroll', hasReachedPageBottom);
    }
  }, [isFirstLoad, getPokemons, hasReachedPageBottom]);

  return isFirstLoad ? (
    <Loader fullWidth />
  ) : (
    <Flex pt="3rem" wrap="wrap" justify="center">
      {pokemons.map((pokemon, index) => {
        return (
          <Flex w="20rem" m="1rem" key={index}>
            <PokemonDashboardCard {...pokemon} />
          </Flex>
        );
      })}
    </Flex>
  );
}

export default PokemonsDashboardTemplate;

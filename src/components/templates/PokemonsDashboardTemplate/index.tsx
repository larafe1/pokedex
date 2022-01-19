import { useCallback, useEffect, useRef } from 'react';

import Loader from '@/components/atoms/Loader';
import PokemonsList from '@/components/organisms/PokemonsList';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstRender } = usePokemons();
  const isWaiting = useRef(false);

  const onApproxPageBottom = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.body.offsetHeight - window.innerHeight;

    if (scrollPosition > windowHeight * 0.75 && !isWaiting.current) {
      getPokemons();
      isWaiting.current = true;

      setTimeout(() => {
        isWaiting.current = false;
      }, 600);
    }
  }, [getPokemons]);

  useEffect(() => {
    window.addEventListener('wheel', onApproxPageBottom);
    window.addEventListener('scroll', onApproxPageBottom);

    return () => {
      window.removeEventListener('wheel', onApproxPageBottom);
      window.removeEventListener('scroll', onApproxPageBottom);
    };
  }, [onApproxPageBottom]);

  return isFirstRender ? <Loader fullWidth /> : <PokemonsList />;
}

export default PokemonsDashboardTemplate;

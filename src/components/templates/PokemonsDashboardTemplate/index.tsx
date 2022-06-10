import { useCallback, useEffect, useRef } from 'react';

import Loader from '@/components/atoms/Loader';
import PokemonsList from '@/components/organisms/PokemonsList';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstRender } = usePokemons();
  const isWaiting = useRef(false);

  const onApproxPageBottom = useCallback(() => {
    const windowHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (window.innerHeight + window.scrollY >= windowHeight) {
      getPokemons();
      isWaiting.current = true;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
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

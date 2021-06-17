import { useState, useRef, useCallback, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/pages/Home.module.css';
import { IPokemonEssentials } from '../types';
import { PokemonContainer } from '../components/PokemonContainer';

function Home() {
  const [pokemons, setPokemons] = useState<IPokemonEssentials[]>([]);
  const renderCount = useRef(100);

  const handleFetchPokemons = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${renderCount.current}`)
      .then(async (res: AxiosResponse) => {
        const allPokemons: IPokemonEssentials[] = res.data.results;
        setPokemons([...pokemons, ...allPokemons]);
        renderCount.current += 50;
      })
      .catch((err: AxiosError) => console.error(err));
  }

  const hasReachedPageBottom = useCallback(async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
      await handleFetchPokemons();
    }
  }, []);

  useEffect(() => {
    hasReachedPageBottom();
    window.addEventListener('scroll', hasReachedPageBottom);
  }, [hasReachedPageBottom]);

  return (
    <main>
      <div className={styles.loadingState}>
        {pokemons.length === 0 && (<h3>Loading Pokédex...</h3>)}
      </div>

      <div className={styles.mainContent}>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonContainer key={index} {...pokemon} />
          );
        })}
      </div>
    </main>
  );
}

export { Home };

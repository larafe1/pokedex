import { useState, useRef, useCallback, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/pages/Home.module.css';
import { IPokemon } from '../types';
import { Menu } from '../components/Menu';
import { PokemonContainer } from '../components/PokemonContainer';

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const renderCount = useRef(60);

  const handleFetchPokemons = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${renderCount.current}`)
      .then(async (res: AxiosResponse) => {
        const allPokemons: IPokemon[] = res.data.results;

        const getPokemonsData = await Promise.all(
          allPokemons.map(async pokemon => {
            return await axios
              .get(pokemon.url)
              .then(({ data }: AxiosResponse) => { return data })
              .catch((err: AxiosError) => console.error(err));
          })
        );
        setPokemons(getPokemonsData);
      })
      .catch((err: AxiosError) => console.error(err));
  }

  const hasReachedPageBottom = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
      handleFetchPokemons();
      renderCount.current += 20;
    }
  }, []);

  useEffect(() => {
    hasReachedPageBottom();
    window.addEventListener('scroll', hasReachedPageBottom);
  }, [hasReachedPageBottom]);

  return (
    <>
      <Menu />
      <main>
        <div className={styles.loadingState}>
          {pokemons.length === 0 && (<h3>Loading Pokédex...</h3>)}
        </div>

        {pokemons.map((pokemon, index) => {
          return (
            <PokemonContainer key={index} {...pokemon} />
          );
        })}
      </main>
    </>
  );
}

export { Home };

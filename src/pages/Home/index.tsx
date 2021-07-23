import { useState, useRef, useCallback, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import './styles.css';
import PokemonCard from '../../components/PokemonCard';
import { IPokemonEssentials } from '../../types';

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemonEssentials[]>([]);
  const renderCount = useRef(80);

  async function handleFetchPokemons() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${renderCount.current}`)
      .then((res: AxiosResponse) => {
        const allPokemons: IPokemonEssentials[] = res.data.results;
        setPokemons([...pokemons, ...allPokemons]);
        renderCount.current += 80;
      })
      .catch((err: AxiosError) => console.error(err.message));
  }

  const hasReachedPageBottom = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
      handleFetchPokemons();
    }
  }, []);

  useEffect(() => {
    handleFetchPokemons();
    window.addEventListener('scroll', hasReachedPageBottom);

    return () => {
      window.removeEventListener('scroll', hasReachedPageBottom);
    }
  }, [hasReachedPageBottom]);

  return (
    <main>
      <div className="div__loading-state">
        {pokemons.length === 0 && (<h3>Loading Pokédex</h3>)}
      </div>

      <div className="div__main-content">
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard key={index} {...pokemon} />
          );
        })}
      </div>
    </main>
  );
}

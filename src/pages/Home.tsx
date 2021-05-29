import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { IPokemon } from '../types';
import { Menu } from '../components/Menu';
import { PokemonContainer } from '../components/PokemonContainer';

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  let value = 0;

  const handleFetchPokemons = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${value}`)
      .then(async (res: AxiosResponse) => {
        const allPokemons: IPokemon[] = res.data.results;

        const getPokemonsData = await Promise.all(
          allPokemons.map(async pokemon => {
            return await axios
              .get(pokemon.url)
              .then(({ data }: AxiosResponse<IPokemon>) => { return data })
              .catch((err: AxiosError) => console.error(err)) as IPokemon;
          })
        );
        setPokemons(getPokemonsData);
      })
      .catch((err: AxiosError) => console.error(err));
  }

  const hasReachedPageBottom = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
      value += 20;
      handleFetchPokemons();
    }
  }, []);

  useEffect(() => {
    hasReachedPageBottom();
    window.addEventListener('scroll', hasReachedPageBottom);
  }, [hasReachedPageBottom]);

  return (
    <main>
      <Menu />

      {pokemons.length === 0 && (<div><h3>Loading Pokédex...</h3></div>)}

      {pokemons.map((pokemon, index) => {
        return (
          <PokemonContainer key={index} {...pokemon} />
        );
      })}
    </main>
  );
}

export { Home };

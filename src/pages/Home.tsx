import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { Menu } from '../components/Menu';
import { IPokemon, PokemonContainer } from '../components/PokemonContainer';

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  
  async function fetchPokemons() {
    await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res: AxiosResponse) => {
        const allPokemons: IPokemon[] = res.data.results;
        setPokemons(allPokemons);
      })
      .catch((err: AxiosError) => console.error(err));
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Menu />

      {pokemons.length === 0 && (<div>Loading Pokédex...</div>)}

      {pokemons.map((pokemon, index) => {
        return (
          <PokemonContainer key={index} {...pokemon} />
        );
      })}
    </>
  );
}

export { Home };

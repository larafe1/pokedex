import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import styles from '../styles/components/PokemonContainer.module.css';

export interface IPokemon {
  name: string;
  url: string;
  id: number;
  types: [{
    slot: number;
    type: string;
  }]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      } 
    }
  }
}

function PokemonContainer(props: IPokemon) {
  const { url } = props;

  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    async function fetchPokemonData() {
      await axios
        .get(url)
        .then((res: AxiosResponse<IPokemon>) => {
          setPokemon(res.data);
        })
        .catch((err: AxiosError) => console.error(err));
    }
    fetchPokemonData();
  }, [url]);

  const pokemonName = pokemon?.name.toUpperCase();
  const pokemonIndex = pokemon?.id;
  const pokemonArtwork = pokemon?.sprites.other['official-artwork'].front_default;

  return (
    <div className={styles.pokemonContainer}>
      <span>{pokemonIndex}</span>

      <a href="/">
        <img src={pokemonArtwork} alt={pokemonName} />
      </a>

      <span>{pokemonName}</span>
    </div>
  );
}

export { PokemonContainer };

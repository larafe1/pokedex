import { useLocation } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/pages/Pokemon.module.css';
import { IPokemonEssentials, IPokemonStats } from '../types';

function Pokemon() {
  const { state } = useLocation<IPokemonEssentials>();
  const [pokemonStats, setPokemonStats] = useState<IPokemonStats>();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFetchPokemonStats = useCallback(async () => {
    await axios
      .get(state.url)
      .then(async ({ data: baseData }: AxiosResponse<IPokemonStats>) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${state.index}`)
          .then(({ data: specieData }: AxiosResponse<IPokemonStats>) => {
            setPokemonStats({...baseData, ...specieData});
            setIsLoaded(true);
          })
          .catch((err: AxiosError) => console.error(err));
      })
      .catch((err: AxiosError) => console.error(err));
  }, [state.index, state.url]);

  useEffect(() => {
    handleFetchPokemonStats();
  }, [handleFetchPokemonStats]);

  return (
    <main>
      <div className={styles.loadingState}>
        {isLoaded === false && (<h3>Loading page...</h3>)}
      </div>

      <div className={styles.pokemonStatsContainer}>
        <span>{state.name}</span>
        <span>Global Index: {state.index}</span>
        <img src={state.artworkUrl} alt={state.name} />
        <span>Weight: {pokemonStats?.weight}</span>
        <span>Height: {pokemonStats?.height}</span>
        <span>Capture Rate: {pokemonStats?.capture_rate}</span>
        <ul>
          {pokemonStats?.types.map(({ type }, index) => {
            return (
              <li key={index}>{type.name}</li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export { Pokemon };

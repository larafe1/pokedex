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

  console.log(pokemonStats);
  return (
    <main>
      <div className={styles.loadingState}>
        {isLoaded === false && (<h3>Loading page...</h3>)}
      </div>

      <div className={styles.pokemonStatsContainer}>
        <div className={styles.statsHeader}>
          <h3>{state.index}</h3>
          <ul>
            {pokemonStats?.types.map(({ type }, index) => {
              return (
                <li key={index}>{type.name}</li>
              );
            })}
          </ul>
        </div>
        <div className={styles.statsBody}>
          <img src={state.artworkUrl} alt={state.name} />
          <div className={styles.basicInfoName}>
            <h3>{state.name}</h3>
            <span>HP</span>
            <span>Attack</span>
            <span>Defense</span>
            <span>Speed</span>
            <span>Sp Atk</span>
            <span>Sp Def</span>
          </div>
          <div className={styles.basicInfoValue}>

          </div>
        </div>
        <div className={styles.statsFooter}>
          <span>Height: {pokemonStats?.height}</span>
          <span>Weight: {pokemonStats?.weight}</span>
        </div>
      </div>
    </main>
  );
}

export { Pokemon };

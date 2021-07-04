import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePalette } from 'react-palette';
import axios, { AxiosResponse, AxiosError } from 'axios';

import './styles.css';
import parsePokemonData from '../../utils/parsePokemonData';
import { IPokemonEssentials, IPokemonParsedStats, IPokemonRawStats } from '../../types';

function Pokemon() {
  const { state } = useLocation<IPokemonEssentials>();
  const [pokemonStats, setPokemonStats] = useState<IPokemonParsedStats>();
  const [isLoaded, setIsLoaded] = useState(false);
  const { data } = usePalette(state.pokemonArtworkUrl);

  const handleFetchPokemonStats = useCallback(async () => {
    await axios
      .get(state.url)
      .then(async ({ data: baseData }: AxiosResponse<IPokemonRawStats>) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${state.pokemonIndex}`)
          .then(({ data: specieData }: AxiosResponse<IPokemonRawStats>) => {
            const parsedStats = parsePokemonData({...baseData, ...specieData});
            console.log(parsedStats);
            setPokemonStats({...parsedStats});
            setIsLoaded(true);
          })
          .catch((err: AxiosError) => console.error(err.message));
      })
      .catch((err: AxiosError) => console.error(err.message));
  }, [state.url, state.pokemonIndex]);

  useEffect(() => {
    handleFetchPokemonStats();
  }, [handleFetchPokemonStats]);

  return (
    <main>
      <div className="loading-state">
        {isLoaded === false && (<h3>Loading page...</h3>)}
      </div>

      <div className="pokemon-stats-container">
        <div className="container-header">
          <h3>{state.pokemonIndex}</h3>
          {pokemonStats?.isLegendary && (
            <span>Legendary</span>
          )}
        </div>
        <div
          className="container-main-content"
          style={{backgroundColor: data.lightVibrant}}
        >
          <img src={state.pokemonArtworkUrl} alt={state.name} />

          <div className="container-main-content-stats">
            <h3>{state.name.toUpperCase()}</h3>


            <div className="hp-section">
              <span>HP</span>
              <div className="hp-progress-container">
                <div
                  className="hp-progressbar"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.hp}</small>
                </div>
              </div>
            </div>


            <span>Attack: {pokemonStats?.attack}</span>
          </div>
        </div>
        <div className="container-footer">
          <span>Height: {pokemonStats?.height} ft.</span>
          <span>Weight: {pokemonStats?.weight} lbs.</span>
          <span>Gender Ratio: {pokemonStats?.genderRatioMale}{pokemonStats?.genderRatioFemale}</span>
          <span>Catch Rate: {pokemonStats?.captureRate}</span>
          <span>Abilities:</span>
          <ul>
            {pokemonStats?.abilities.map(ability => {
              return (
                <li>{ability}</li>  
              );
            })}
          </ul>
          <ul>
            {pokemonStats?.types.map((type, index) => {
              return (
                <li key={index}>{type}</li>
                );
              })}
          </ul>
          <span>Habitat: {pokemonStats?.habitat}</span>
          <span>Hatch Steps: {pokemonStats?.hatchCounter}</span>
          <span>Capture Rate: {pokemonStats?.captureRate}</span>
        </div>
      </div>
    </main>
  );
}

export default Pokemon;

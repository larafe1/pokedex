import { useState, useCallback, useEffect } from 'react';
import { usePalette } from 'react-palette';
import axios, { AxiosResponse, AxiosError } from 'axios';

import './styles.css';
import loadingGif from '../../assets/loading.gif';
import { usePokemon } from '../../hooks/usePokemon';
import parsePokemonData from '../../utils/parsePokemonData';
import { IPokemonParsedStats, IPokemonRawStats } from '../../types';

export default function Pokemon() {
  const { pokemon } = usePokemon();
  const [pokemonStats, setPokemonStats] = useState<IPokemonParsedStats>();
  const [isLoading, setIsLoading] = useState(true);
  const { data } = usePalette(pokemon!.artworkUrl);

  const handleFetchPokemonStats = useCallback(async () => {
    await axios
      .get(pokemon!.url)
      .then(async ({ data: baseData }: AxiosResponse<IPokemonRawStats>) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon!.pokedexIndex}`)
          .then(({ data: specieData }: AxiosResponse<IPokemonRawStats>) => {
            const parsedStats = parsePokemonData({...baseData, ...specieData});
            setPokemonStats({...parsedStats});
            setIsLoading(false);
          })
          .catch((err: AxiosError) => console.error(err.message));
      })
      .catch((err: AxiosError) => console.error(err.message));
  }, [pokemon]);

  useEffect(() => {
    handleFetchPokemonStats();
  }, [handleFetchPokemonStats]);

  return (
    <main>
      <div className="div__pokemon-stats">
        <div className="pokemon-stats__header">
          <h3>{pokemon!.pokedexIndex}</h3>
          {pokemonStats?.isLegendary && (
            <span>Legendary</span>
          )}
        </div>
        <div
          className="pokemon-stats__body"
          style={{backgroundColor: data.lightVibrant}}
        >
          {isLoading && (
            <img src={loadingGif} alt="Loading" />
          )}
          <img
            src={pokemon!.artworkUrl}
            alt={pokemon!.name}
            style={{display: isLoading ? 'none' : 'initial'}}
            onLoad={() => setIsLoading(false)}
          />

          <div className="pokemon-stats__body--main-stats">
            <h3>{pokemon!.name.toUpperCase()}</h3>

            <div className="main-stats__hp">
              <span>HP</span>
              <div className="main-stats__hp-container">
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
        <div className="pokemon-stats__footer">
          <span>Height: {pokemonStats?.height} ft.</span>
          <span>Weight: {pokemonStats?.weight} lbs.</span>
          <span>Gender Ratio: {pokemonStats?.genderRatioMale}{pokemonStats?.genderRatioFemale}</span>
          <span>Catch Rate: {pokemonStats?.captureRate}</span>
          <span>Abilities:</span>
          <ul>
            {pokemonStats?.abilities.map((ability, index) => {
              return (
                <li key={index}>{ability}</li>
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

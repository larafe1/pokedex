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
            <em>Legendary</em>
          )}
        </div>
        <div
          className="pokemon-stats__body"
          style={{backgroundColor: data.lightVibrant}}
        >
          {isLoading && (
            <img 
              src={loadingGif} 
              alt="Loading" 
              style={{maxWidth: '75%'}} 
            />
          )}
          <div className="pokemon-stats__body--img-container">
            <img
              src={pokemon!.artworkUrl}
              alt={pokemon!.name}
              style={{display: isLoading ? 'none' : 'initial'}}
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="pokemon-stats__body--main-stats">
            <h2>{pokemon!.name.toUpperCase()}</h2>

            <div className="main-stats">
              <strong>HP</strong>
              <div className="main-stats__progress-container">
                <div
                  className="progressbar"
                  role="progressbar"
                  style={{width: `${pokemonStats?.hp}%`}}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.hp}</small>
                </div>
              </div>
            </div>
            <div className="main-stats">
              <strong>Attack</strong>
              <div className="main-stats__progress-container">
                <div
                  className="progressbar"
                  role="progressbar"
                  style={{width: `${pokemonStats?.attack}%`}}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.attack}</small>
                </div>
              </div>
            </div>
            <div className="main-stats">
              <strong>Defense</strong>
              <div className="main-stats__progress-container">
                <div
                  className="progressbar"
                  role="progressbar"
                  style={{width: `${pokemonStats?.defense}%`}}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.defense}</small>
                </div>
              </div>
            </div>
            <div className="main-stats">
              <strong>Special Attack</strong>
              <div className="main-stats__progress-container">
                <div
                  className="progressbar"
                  role="progressbar"
                  style={{width: `${pokemonStats?.specialAttack}%`}}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.specialAttack}</small>
                </div>
              </div>
            </div>
            <div className="main-stats">
              <strong>Special Defense</strong>
              <div className="main-stats__progress-container">
                <div
                  className="progressbar"
                  role="progressbar"
                  style={{width: `${pokemonStats?.specialDefense}%`}}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{pokemonStats?.specialDefense}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pokemon-stats__footer">
          <div className="pokemon-stats__footer--first-section">
            <span><strong>Height:</strong> {pokemonStats?.height} ft.</span>
            <span><strong>Weight:</strong> {pokemonStats?.weight} lbs.</span>
            <span><strong>Gender Ratio:</strong> {pokemonStats?.genderRatioMale}% / {pokemonStats?.genderRatioFemale}%</span>
            <span><strong>Catch Rate:</strong> {pokemonStats?.captureRate}%</span>
          </div>
          <div className="pokemon-stats__footer--second-section">
            <div className="second-section__list">
              <strong>Abilities:</strong>
              <ul>
                {pokemonStats?.abilities.map((ability, index) => {
                  return (
                    <li key={index}>{ability}</li>
                  );
                })}
              </ul>
            </div>
            <div className="second-section__list">
              <strong>Types:</strong>
              <ul>
                {pokemonStats?.types.map((type, index) => {
                  return (
                    <li key={index}>{type}</li>
                    );
                  })}
              </ul>
            </div>
            <span><strong>Habitat:</strong> {pokemonStats?.habitat}</span>
            <span><strong>Hatch Steps:</strong> {pokemonStats?.hatchCounter} step(s)</span>
          </div>
        </div>
      </div>
    </main>
  );
}

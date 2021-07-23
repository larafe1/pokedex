import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePalette } from 'react-palette';

import './styles.css';
import { usePokemon } from '../../hooks/usePokemon';
import loadingGif from '../../assets/loading.gif';
import { IPokemonEssentials } from '../../types';

export default function PokemonCard({
  name,
  url
}: IPokemonEssentials) {
  const { setPokemon } = usePokemon();
  const [isLoading, setIsLoading] = useState(true);

  const pokedexIndex = +url.split('/')[url.split('/').length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexIndex}.png`;
  const { data } = usePalette(artworkUrl);

  const pokemon = {
    name,
    url,
    pokedexIndex,
    artworkUrl
  };

  return (
    <div
      className="div__pokemon-card"
      style={{backgroundColor: data.lightVibrant}}
    >
      <span>{pokedexIndex}</span>
      <Link
        to={`pokemon/${pokedexIndex}`}
        onClick={() => setPokemon(pokemon)}
      >
        {isLoading && (
          <img src={loadingGif} alt="Loading" />
        )}
        <img 
          src={artworkUrl} 
          alt={name}
          style={{display: isLoading ? 'none' : 'initial'}}
          onLoad={() => setIsLoading(false)}
        />
      </Link>
      <h4>{name.toUpperCase()}</h4>
    </div>
  );
}

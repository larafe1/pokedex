import { Link } from 'react-router-dom';
import { usePalette } from 'react-palette';

import './styles.css';
import { IPokemonEssentials } from '../../types';

export default function PokemonCard({
  name,
  url
}: IPokemonEssentials) {
  const pokemonIndex = +url.split('/')[url.split('/').length - 2];
  const pokemonArtworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;
  const { data } = usePalette(pokemonArtworkUrl);

  return (
    <div
      className="pokemon-card"
      style={{backgroundColor: data.lightVibrant}}
    >
      <span>{pokemonIndex}</span>
      <Link to={{
        pathname: `pokemon/${pokemonIndex}`,
        state: {
          name,
          url,
          pokemonIndex,
          pokemonArtworkUrl
        } as IPokemonEssentials
      }}
      >
        <img src={pokemonArtworkUrl} alt={name} />
      </Link>
      <h4>{name.toUpperCase()}</h4>
    </div>
  );
}

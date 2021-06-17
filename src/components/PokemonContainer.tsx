import { Link } from 'react-router-dom';
import { usePalette } from 'react-palette';

import styles from '../styles/components/PokemonContainer.module.css';
import { IPokemonEssentials } from '../types';

function PokemonContainer(props: IPokemonEssentials) {
  let pokemon: IPokemonEssentials = {
    name: props.name.toUpperCase(),
    url: props.url,
    index: props.url!.split('/')[props.url!.split('/').length - 2],
    artworkUrl: ''
  }

  pokemon.artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.index}.png`;
  const { data } = usePalette(pokemon.artworkUrl);

  return (
    <div
      className={styles.pokemonContainer}
      style={{backgroundColor: data.lightVibrant}}
    >
      <span>{pokemon.index}</span>

      <Link 
        to={{ 
          pathname: `pokemon/${pokemon.index}`, 
          state: {...pokemon}
        }}
      >
        <img src={pokemon.artworkUrl} alt={pokemon.artworkUrl} />
      </Link>

      <span>{pokemon.name}</span>
    </div>
  );
}

export { PokemonContainer };

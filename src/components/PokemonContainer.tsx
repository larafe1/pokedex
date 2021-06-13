import { usePalette } from 'react-palette';

import styles from '../styles/components/PokemonContainer.module.css';
import { IPokemon } from '../types';

function PokemonContainer(props: IPokemon) {
  const {
    name,
    id,
    types,
    sprites
  } = props;

  const pokemonName = name.toUpperCase();
  const pokemonArtwork = sprites.other['official-artwork'].front_default;
  const { data } = usePalette(pokemonArtwork);
  const pokemonUrl = 'pokemon/' + id;

  return (
    <div
    className={styles.pokemonContainer} 
    style={{backgroundColor: data.lightVibrant}}
    >
      <span>{id}</span>

      <a href={pokemonUrl}>
        <img src={pokemonArtwork} alt={pokemonName} />
      </a>

      <div className={styles.pokemonInfo}>
        <span>{pokemonName}</span>
        <ul>
          {types.map(({ type }) => {
            return (
              <li>{type.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { PokemonContainer };

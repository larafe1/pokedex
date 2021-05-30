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

  return (
    <div className={styles.pokemonContainer} style={{backgroundColor: data.lightVibrant}}>
      <span>{id}</span>

      <a href="/">
        <img src={pokemonArtwork} alt={pokemonName} />
      </a>

      <div className={styles.pokemonInfo}>
        <span>{pokemonName}</span>
        {types.map(({ type }) => {
          return (
            <li id={styles.list}>{type.name}</li>
          );
        })}
      </div>
    </div>
  );
}

export { PokemonContainer };

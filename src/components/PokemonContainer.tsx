import styles from '../styles/components/PokemonContainer.module.css';
import { IPokemon } from '../types';

function PokemonContainer(props: IPokemon) {
  const {
    name,
    id,
    sprites
  } = props;

  const pokemonName = name.toUpperCase();
  const pokemonIndex = id;
  const pokemonArtwork = sprites.other['official-artwork'].front_default;

  return (
    <div className={styles.pokemonContainer}>
      <span>{pokemonIndex}</span>

      <a href="/">
        <img src={pokemonArtwork} alt={pokemonName} />
      </a>

      <span>{pokemonName}</span>
    </div>
  );
}

export { PokemonContainer };

import styles from '../styles/components/Menu.module.css';
import pokedexIcon from '../assets/pokedex-icon.png';

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <a href="/">
        <img src={pokedexIcon} alt="Pokédex Icon" />
        <h3>Pokédex</h3>
      </a>
    </div>
  );
}

export { Menu };

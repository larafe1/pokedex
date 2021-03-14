import styles from '../styles/components/Menu.module.css';

import pokedexLogo from '../assets/pokedex-logo.png';

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <a href="/">
        <img src={pokedexLogo} alt="Pokédex Logo" />
      </a>
    </div>
  );
}

export { Menu };

import './styles.css';
import pokedexIcon from '../../assets/pokedex.png';

export default function Menu() {
  return (
    <nav>
      <a href="/">
        <img src={pokedexIcon} alt="Pokédex Icon" />
        <h2>Pokédex</h2>
      </a>
    </nav>
  );
}

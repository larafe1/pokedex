import './styles.css';
import pokedexIcon from '../../assets/pokedex.png';

export default function Menu() {
  return (
    <nav>
      <a href="/">
        <img src={pokedexIcon} alt="Pokédex Icon" />
        <h3>Pokédex</h3>
      </a>
    </nav>
  );
}

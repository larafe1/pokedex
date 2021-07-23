import './styles/global.css';
import Menu from './components/Menu';
import Routes from './routes';
import { PokemonContextProvider } from './contexts/PokemonContext';

function App() {
  return (
    <PokemonContextProvider>
      <Menu />
      <Routes />
    </PokemonContextProvider>
  );
}

export default App;

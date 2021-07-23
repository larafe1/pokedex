import { useContext } from 'react';

import { PokemonContext } from '../contexts/PokemonContext';

export function usePokemon() {
  return useContext(PokemonContext);
}

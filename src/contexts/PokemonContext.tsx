import { createContext, useState } from 'react';

import { IPokemonContext, ContextProviderProps } from '../types';

const PokemonContext = createContext({} as IPokemonContext);

function PokemonContextProvider(props: ContextProviderProps) {
  const [pokemon, setPokemon] = useState<any>();

  return (
    <PokemonContext.Provider value={{pokemon, setPokemon}}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonContextProvider };

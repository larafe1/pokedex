import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback
} from 'react';

import { AxiosResponse, AxiosError } from 'axios';

import api from '@/services/api';
import {
  IPokemonEssentials,
  IPokemonRawStats,
  IPokemonParsedStats,
  IPokemonProps,
  IPokemonsProviderProps
} from '@/types';
import parsePokemonData from '@/utils/parsePokemonData';

export const PokemonsContext = createContext({} as IPokemonProps);

function PokemonsProvider({ children }: IPokemonsProviderProps) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([] as IPokemonEssentials[]);
  const [pokemon, setPokemon] = useState({} as IPokemonParsedStats);
  const renderCount = useRef(50);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);
    await api
      .get(`/pokemon?limit=${renderCount.current}`)
      .then((res: AxiosResponse) => {
        const pokemonsData: IPokemonEssentials[] = res.data.results;
        setPokemons(pokemonsData);
        renderCount.current += 50;
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      });
  }, []);

  const getPokemonStatsById = useCallback(async (id: string | number) => {
    setIsLoading(true);
    await api
      .get(`/pokemon/${id}`)
      .then(async ({ data: baseData }: AxiosResponse<IPokemonRawStats>) => {
        await api
          .get(`/pokemon-species/${id}`)
          .then(({ data: specieData }: AxiosResponse<IPokemonRawStats>) => {
            const parsedPokemonStats = parsePokemonData({
              ...baseData,
              ...specieData
            });
            setPokemon(parsedPokemonStats);
          })
          .catch((err: AxiosError) => {
            throw err;
          });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      });
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        pokemon,
        getPokemons,
        getPokemonStatsById,
        isFirstLoad,
        setIsFirstLoad,
        isLoading,
        renderCount
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}

export { PokemonsProvider, usePokemons };

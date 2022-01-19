import { ReactNode } from 'react';

export interface IPokemonsProviderProps {
  children: ReactNode;
}

export interface IPokemonProps {
  isLoading: boolean;
  isFirstRender: boolean;
  getPokemons: () => Promise<void>;
  getPokemonStatsById: (id: string | number) => Promise<void>;
  pokemons: IPokemonEssentials[];
  pokemon: IPokemonParsedStats;
  hasReachedEnd: boolean;
}

export interface ILoaderProps {
  fullWidth?: boolean;
}

export interface ISkeletonProps {
  w: string;
  h: string;
}

export interface IPokemonCardProps {
  isArtworkBgLoading?: boolean;
  name?: string;
  dexIndex?: number;
}

export interface IPokemonCardArtworkProps {
  artworkUrl: string;
}

export interface IPokemonDashboardCardArtworkProps
  extends IPokemonCardArtworkProps {
  dexIndex: number;
  isArtworkBgLoading: boolean;
}

export interface IPokemonProfileCardStatsProps {
  label: string;
  value: string | number;
}

export interface IPokemonProfileCardStatsProgressProps
  extends IPokemonProfileCardStatsProps {
  colorScheme: string;
}

export interface IPokemonProfileCardTemplateProps {
  pokemonId: string;
}

export interface IPokemonEssentials {
  name: string;
  dexIndex: number;
  url: string;
  artworkUrl: string;
}

export interface IPokemonRawStats {
  name: string;
  id: number;
  artworkUrl: string;
  height: number;
  weight: number;
  capture_rate: number;
  gender_rate: number;
  base_happiness: number;
  base_experience: number;
  hatch_counter: number;
  is_legendary: boolean;
  is_mythical: boolean;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  habitat: {
    name: string;
  };
}

export interface IPokemonParsedStats {
  name: string;
  hp: number;
  dexIndex: number;
  artworkUrl: string;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  genderRatioFemale: number;
  genderRatioMale: number;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  baseHappiness: number;
  baseExperience: number;
  habitat: string;
}

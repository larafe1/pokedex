export interface IPokemonEssentials {
  name: string;
  url: string;
  index: string;
  artworkUrl: string;
}

export interface IPokemonStats extends IPokemonEssentials {
  height: number;
  weight: number;
  capture_rate: number;
  base_happiness: number;
  hatch_counter: number;
  is_legendary: boolean;
  is_mythical: boolean;
  stats: [{
    base_stat: number;
    stat: {
      name: string;
    }
  }]
  types: [{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }]
  abilities: [{
    ability: {
      name: string;
    }
  }]
  habitat: {
    name: string;
  }
  flavor_text_entries: [{
    flavor_text: string;
    language: {
      name: string;
    }
  }]
}

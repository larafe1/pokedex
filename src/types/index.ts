export interface IPokemon {
  name: string;
  url: string;
  id: number;
  types: [{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      } 
    }
  }
}

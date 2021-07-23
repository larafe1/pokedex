import { IPokemonRawStats, IPokemonParsedStats } from '../types';

export default function parsePokemonData({
  stats,
  types: rawTypes,
  abilities: rawAbilities,
  height: rawHeight,
  weight: rawWeight,
  gender_rate,
  flavor_text_entries,
  capture_rate: captureRate,
  is_legendary: isLegendary,
  is_mythical: isMythical,
  hatch_counter: hatchCounter,
  base_happiness: baseHappiness,
  habitat: rawHabitat
}: IPokemonRawStats) {
  let hp = 0;
  let attack = 0;
  let defense = 0;
  let speed = 0;
  let specialAttack = 0;
  let specialDefense = 0;

  const height = Math.round((rawHeight * 0.328084 + 0.00001) * 100) / 100;
  const weight = Math.round((rawWeight * 0.220462 + 0.00001) * 100) / 100;
  const genderRatioFemale = 12.5 * gender_rate;
  const genderRatioMale = 12.5 * (8 - gender_rate);
  const habitat = rawHabitat.name;

  const types = rawTypes.map(({ type }) => {
    return type.name;
  });

  const abilities = rawAbilities.map(ability => {
    return ability.ability.name
      .toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  });

  const flavorTextFiltered = flavor_text_entries.filter(txt => {
    if (txt.language.name === 'en') {
      return txt.flavor_text;
    } else return '';
  });

  stats.forEach(stat => {
    switch (stat.stat.name) {
      case 'hp':
        hp = stat['base_stat'];
        break;
      case 'attack':
        attack = stat['base_stat'];
        break;
      case 'defense':
        defense = stat['base_stat'];
        break;
      case 'speed':
        speed = stat['base_stat'];
        break;
      case 'special-attack':
        specialAttack = stat['base_stat'];
        break;
      case 'special-defense':
        specialDefense = stat['base_stat'];
        break;
      default:
        break;
    }
  });

  return {
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense,
    types,
    abilities,
    height,
    weight,
    genderRatioFemale,
    genderRatioMale,
    flavorTextFiltered,
    captureRate,
    isLegendary,
    isMythical,
    hatchCounter,
    baseHappiness,
    habitat
  } as IPokemonParsedStats;
}

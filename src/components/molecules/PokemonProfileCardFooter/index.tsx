import { Flex } from '@chakra-ui/react';

import PokemonProfileCardStatsText from '@/components/atoms/PokemonProfileCardStatsText';
import { usePokemons } from '@/hooks/usePokemons';
import { Colors } from '@/styles/theme';

function PokemonProfileCardFooter() {
  const { pokemon } = usePokemons();

  return (
    <Flex
      w="100%"
      h="35%"
      bg={Colors.lightGray}
      border={`2px solid ${Colors.text}`}
    >
      <Flex
        w="50%"
        pl="12.5%"
        direction="column"
        justify="space-evenly"
        align="flex-start"
      >
        <PokemonProfileCardStatsText
          label="Weight"
          value={`${pokemon.weight} lbs.`}
        />
        <PokemonProfileCardStatsText
          label="Height"
          value={`${pokemon.height} ft.`}
        />
        <PokemonProfileCardStatsText
          label="Catch Rate"
          value={`${pokemon.captureRate}%`}
        />
        <PokemonProfileCardStatsText
          label="Gender Ratio"
          value={`♂ ${pokemon.genderRatioMale}% | ♀${pokemon.genderRatioFemale}%`}
        />
        <PokemonProfileCardStatsText
          label="Base Happiness"
          value={pokemon.baseHappiness}
        />
      </Flex>
      <Flex
        w="50%"
        pl="12.5%"
        direction="column"
        justify="space-evenly"
        align="flex-start"
      >
        {pokemon.types && (
          <Flex direction="row">
            <strong>Type(s):</strong>
            <ul className="ul__pokemon-stats">
              {pokemon.types.map((type, index) => {
                return <li key={index}>{type}</li>;
              })}
            </ul>
          </Flex>
        )}
        <PokemonProfileCardStatsText
          label="Hatch Steps"
          value={`${pokemon.hatchCounter} steps`}
        />
        <PokemonProfileCardStatsText label="Habitat" value={pokemon.habitat} />
        {pokemon.abilities && (
          <Flex direction="row">
            <strong>Abilities:</strong>
            <ul className="ul__pokemon-stats">
              {pokemon.abilities.map((ability, index) => {
                return <li key={index}>{ability}</li>;
              })}
            </ul>
          </Flex>
        )}
        <PokemonProfileCardStatsText
          label="Base Experience"
          value={pokemon.baseExperience}
        />
      </Flex>
    </Flex>
  );
}

export default PokemonProfileCardFooter;

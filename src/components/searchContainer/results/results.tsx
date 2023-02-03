import React, { memo } from "react";
import PokemonCard from "components/pokemonCard";
import { Pokemon } from "types/AppTypes";

import useStyles from "./resultsStyles";

interface ResultsProps {
  pokemonSearchResults: Pokemon;
  setSelectedPokemon: (pokemon: Pokemon | undefined) => void;
}

const Results = (props: ResultsProps) => {
  const { pokemonSearchResults, setSelectedPokemon } = props;

  const styles = useStyles();

  const returnEvolutionCards = () => {
    if (pokemonSearchResults.evolutions) {
      return pokemonSearchResults.evolutions.map((evolution: Pokemon, index: number) => {
        return (
          <span style={styles.evolutionContainer} key={index}>
            <PokemonCard pokemon={evolution} setSelectedPokemon={setSelectedPokemon} height={100} width={110} />
          </span>
        );
      });
    }
  };

  const PokemonCardsList = memo((props: any) => {
    const { pokemonSearchResults } = props;
    return (
      <div style={styles.pokemonCardsList}>
        <PokemonCard pokemon={pokemonSearchResults} setSelectedPokemon={setSelectedPokemon} height={300} width={320} />
        <div style={styles.evolutions}>{returnEvolutionCards()}</div>
      </div>
    );
  });

  return (
    <div style={styles.container}>
      <div style={styles.pokemonCardsContainer}>
        <PokemonCardsList pokemonSearchResults={pokemonSearchResults} />
      </div>
    </div>
  );
};

export default memo(Results);

import React, { memo } from "react";
import PokemonCard from "components/pokemonCard";
import { Pokemon } from "pokenode-ts";

import useStyles from "./resultsStyles";

interface ResultsProps {
  searchText: string;
  pokemonSearchResults: Pokemon;
}

const Results = (props: ResultsProps) => {
  const { pokemonSearchResults } = props;

  const styles = useStyles();

  const PokemonCardsList = memo((props: any) => {
    const { pokemonSearchResults } = props;
    return (
      <div style={styles.pokemonCardsList}>
        <PokemonCard pokemon={pokemonSearchResults} height={300} width={320} />
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

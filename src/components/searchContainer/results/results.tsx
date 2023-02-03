import React, { memo } from "react";
import PokemonCard from "components/pokemonCard";
import { Pokemon } from "types/AppTypes";

import useStyles from "./resultsStyles";

interface ResultsProps {
  searchText: string;
  pokemonSearchResults: Pokemon;
  setSelectedPokemon: (pokemon: Pokemon | undefined) => void;
}

const Results = (props: ResultsProps) => {
  const { pokemonSearchResults, setSelectedPokemon } = props;

  const styles = useStyles();

  const PokemonCardsList = memo((props: any) => {
    const { pokemonSearchResults } = props;
    return (
      <div style={styles.pokemonCardsList}>
        <PokemonCard pokemon={pokemonSearchResults} setSelectedPokemon={setSelectedPokemon} height={300} width={320} />
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

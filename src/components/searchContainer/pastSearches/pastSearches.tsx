import React, { memo, useCallback, useEffect, useState } from "react";
import PokemonCard from "components/pokemonCard";
import { Pokemon } from "pokenode-ts";
import { useSelector } from "react-redux";
import { RootState } from "reduxStore/store";

import useStyles from "./pastSearchesStyles";

const PastSearches = () => {
  const pastSearches = useSelector((state: RootState) => state.pokemonSearchData.pastSearches);

  const styles = useStyles();

  const PokemonCardsList = memo((props: any) => {
    const { pastSearches } = props;
    return (
      <div style={styles.pokemonCardsList}>
        {pastSearches.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    );
  });

  return (
    <div style={styles.container}>
      <div style={styles.pokemonCardsContainer}>
        <PokemonCardsList pastSearches={pastSearches} />
      </div>
    </div>
  );
};

export default memo(PastSearches);

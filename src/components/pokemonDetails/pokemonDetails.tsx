import React, { memo } from "react";
import { Pokemon } from "pokenode-ts";

import useStyles from "./pokemonDetailsStyles";

interface PokemonDetailsProps {
  pokemon: Pokemon | undefined;
}

const PokemonDetails = (props: PokemonDetailsProps) => {
  const { pokemon } = props;

  const styles = useStyles();

  return <div style={styles.pokemonDetailsContainer}>hey</div>;
};

export default memo(PokemonDetails);

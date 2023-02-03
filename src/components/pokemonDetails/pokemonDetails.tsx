import React, { memo, useCallback, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Pokemon } from "pokenode-ts";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const PokemonDetails = (props: PokemonCardProps) => {
  const { pokemon } = props;

  return <div style={styles.pokemonDetailsContainer}></div>;
};

export default memo(PokemonDetails);

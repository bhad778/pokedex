import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Pokemon } from "pokenode-ts";

import useStyles from "./pokemonCardStyles";

interface PokemonCardProps {
  pokemon: any;
  //   pokemon: Pokemon;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  // if the pokemon only has one type, just copy it so
  // its in the array twice so the gradient will work
  //   const pokemonTypes = pokemon.types;
  //   if (pokemonTypes.length < 2) {
  //     pokemonTypes.push(pokemonTypes[0]);
  //   }
  const styles = useStyles(["fire", "flying"]);

  return (
    <Card style={styles.pokemonCard}>
      <img src={pokemon.img} width="100%" height="100%" />
    </Card>
  );
};

export default PokemonCard;

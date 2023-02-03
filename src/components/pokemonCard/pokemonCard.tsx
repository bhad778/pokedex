import React, { memo, useCallback, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Pokemon } from "pokenode-ts";
import { types } from "types/AppTypes";
import { Spinner } from "@chakra-ui/react";

import useStyles from "./pokemonCardStyles";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  const [loading, setLoading] = useState(true);

  // convert type to just array of strings
  const pokemonTypes: Array<types> = [];
  pokemon.types.map((item: any) => {
    pokemonTypes.push(item.type.name);
  });
  // if the pokemon only has one type, just copy it so
  // its in the array twice so the gradient will work
  if (pokemon.types.length < 2) {
    pokemonTypes.push(pokemonTypes[0]);
  }

  const styles = useStyles(pokemonTypes);

  const capitalizeFirstLetter = useCallback((name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }, []);

  const onImageLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <Card style={styles.pokemonCard}>
      <span style={styles.pokemonName}>{capitalizeFirstLetter(pokemon.name)}</span>
      {loading && <Spinner />}
      <img src={pokemon?.sprites?.front_default || undefined} onLoad={onImageLoaded} width="100%" height="100%" />
    </Card>
  );
};

export default memo(PokemonCard);

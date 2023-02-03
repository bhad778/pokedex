import React, { memo, useCallback, useState } from "react";
import { Pokemon } from "pokenode-ts";
import { capitalizeFirstLetter } from "utils/commonUtils";
import { Spinner } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { typeColors, types } from "types/AppTypes";

import useStyles from "./pokemonDetailsStyles";

interface PokemonDetailsProps {
  pokemon: Pokemon | undefined;
}

const PokemonDetails = (props: PokemonDetailsProps) => {
  const { pokemon } = props;

  const [loading, setLoading] = useState(true);

  const styles = useStyles();

  const onImageLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  const returnTypeTags = () => {
    return pokemon?.types.map((item: any) => {
      console.log("typeColors[item.type.name as types]", typeColors[item.type.name as types]);
      return (
        <Tag marginLeft="1" backgroundColor={typeColors[item.type.name as types]}>
          {item.type.name}
        </Tag>
      );
    });
  };

  return (
    <div style={styles.pokemonDetailsContainer}>
      <div style={styles.pokemonName}>{capitalizeFirstLetter(pokemon?.name || "")}</div>
      <div style={styles.types}>{returnTypeTags()}</div>
      {loading && <Spinner />}
      <div style={styles.sprites}>
        <img src={pokemon?.sprites?.front_default || undefined} onLoad={onImageLoaded} width="250px" height="250px" />
        <img src={pokemon?.sprites?.back_default || undefined} width="250px" height="250px" />
        <img src={pokemon?.sprites?.front_shiny || undefined} width="250px" height="250px" />
      </div>
      <div style={styles.details}>
        <div style={styles.abilities}>abilities</div>
        <div style={styles.moves}>moves</div>
        <div style={styles.species}>species</div>
      </div>
    </div>
  );
};

export default memo(PokemonDetails);

import React, { memo, useCallback, useEffect, useState } from "react";
import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
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
  const [speciesData, setSpeciesData] = useState<PokemonSpecies | undefined>();

  const styles = useStyles();

  const api = new PokemonClient();

  const onImageLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    getSpecies();
  }, []);

  const getSpecies = async () => {
    const response = await api.getPokemonSpeciesByName(pokemon?.name || "");
    setSpeciesData(response);
  };

  const returnTypeTags = () => {
    return pokemon?.types.map((item: any) => {
      return (
        <Tag marginLeft="1" backgroundColor={typeColors[item.type.name as types]}>
          {item.type.name}
        </Tag>
      );
    });
  };

  const returnAbilities = () => {
    return pokemon?.abilities.map((item: any) => {
      return <div>{item.ability.name}</div>;
    });
  };

  const returnMoves = () => {
    return pokemon?.moves.map((item: any) => {
      return <div>{item.move.name}</div>;
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
        <div style={styles.abilities}>
          <div style={styles.statTitle}>Abilities</div>
          <div>{returnAbilities()}</div>
        </div>
        <div style={styles.moves}>
          <div style={styles.statTitle}>Moves</div>
          <div>{returnMoves()}</div>
        </div>
        <div style={styles.species}>
          <div style={styles.statTitle}>Species</div>
          <div>Is baby: {speciesData?.is_baby ? "true" : "false"}</div>
          <div>Is legendary: {speciesData?.is_legendary ? "true" : "false"}</div>
          <div>Happiness: {speciesData?.base_happiness}</div>
          <div>Capture Rate: {speciesData?.capture_rate}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonDetails);

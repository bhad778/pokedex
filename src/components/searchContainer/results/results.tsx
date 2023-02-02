import React from "react";
import PokemonCard from "components/pokemonCard";

import useStyles from "./resultsStyles";

const Results = () => {
  const styles = useStyles();

  const pokemonData = [
    {
      name: "Charizard",
      type: ["Fire", "Flying"],
      number: 6,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "Pika",
      type: ["Fire", "Flying"],
      number: 25,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "Squirtle",
      type: ["Fire", "Flying"],
      number: 9,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "Bulba",
      type: ["Fire", "Flying"],
      number: 5,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  ];

  const PokemonCardsList = () => {
    return (
      <div style={styles.pokemonCardsList}>
        {pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.pokemonCardsContainer}>
        <PokemonCardsList />
      </div>
    </div>
  );
};

export default Results;

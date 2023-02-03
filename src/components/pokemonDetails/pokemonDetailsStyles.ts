import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";
import { typeColors, types } from "types/AppTypes";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    pokemonName: {
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "bold",
    },
    types: {
      textAlign: "center",
    },
    pokemonDetailsContainer: {},
    details: {
      display: "flex",
    },
    sprites: {
      display: "flex",
    },
    abilities: {
      flex: 1,
      textAlign: "center",
    },
    moves: {
      flex: 1,
      textAlign: "center",
    },
    species: {
      flex: 1,
      textAlign: "center",
    },
    statTitle: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  };
};

export default useStyles;

import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";
import { typeColors, types } from "types/AppTypes";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    pokemonName: {
      textAlign: "center",
      fontSize: "30px",
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
  };
};

export default useStyles;

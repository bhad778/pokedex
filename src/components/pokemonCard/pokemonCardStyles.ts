import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";
import { typeColors, types } from "types/AppTypes";

const useStyles = (typesArray: Array<types>): StyleSheet => {
  const { theme } = useTheme();

  return {
    pokemonCard: {
      width: "320px",
      height: "300px",
      justifyContent: "center",
      background: `linear-gradient(135deg, ${typeColors[typesArray[0]]}, ${typeColors[typesArray[1]]})`,
    },
    pokemonName: {
      position: "absolute",
      top: -20,
    },
  };
};

export default useStyles;

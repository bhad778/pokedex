import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";
import { typeColors, types } from "types/AppTypes";

const useStyles = (typesArray: Array<types>, height: number, width: number): StyleSheet => {
  const { theme } = useTheme();

  return {
    pokemonDetailsContainer: {
      width: `${width}px`,
      height: `${height}px`,
      justifyContent: "center",
      alignItems: "center",
      background: `linear-gradient(135deg, ${typeColors[typesArray[0]]}, ${typeColors[typesArray[1]]})`,
    },
  };
};

export default useStyles;

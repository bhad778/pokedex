import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";
import { typeColors, types } from "types/AppTypes";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    pokemonDetailsContainer: {},
  };
};

export default useStyles;

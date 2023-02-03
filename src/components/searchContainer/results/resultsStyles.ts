import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    container: {
      width: "100%",
      marginTop: 30,
      display: "flex",
      justifyContent: "center",
    },
    pokemonCardsContainer: {
      width: "1000px",
    },
    pokemonCardsList: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px 15px",
      paddingBottom: "10px",
    },
    evolutionContainer: {
      marginRight: "10px",
    },
  };
};

export default useStyles;

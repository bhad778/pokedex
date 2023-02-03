import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    container: {
      width: "100%",
      minHeight: "500px",
      marginTop: 30,
      display: "flex",
      justifyContent: "center",
    },
    pokemonCardsContainer: {
      width: "1000px",
      minHeight: "500px",
    },
    pokemonCardsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px 15px",
      paddingBottom: "100px",
      justifyContent: "center",
    },
  };
};

export default useStyles;

import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    searchInputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 200,
    },
    title: {
      position: "absolute",
      top: "100px",
      fontSize: "50px",
      color: theme.color.fairy,
    },
    resultsContainer: {
      // paddingBottom: "40px",
    },
  };
};

export default useStyles;

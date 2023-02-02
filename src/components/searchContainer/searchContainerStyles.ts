import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    searchInputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 400,
    },
  };
};

export default useStyles;

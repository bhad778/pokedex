import { StyleSheet } from "types/AppTypes";
import { useTheme } from "theme/theme.context";

const useStyles = (): StyleSheet => {
  const { theme } = useTheme();

  return {
    container: {
      backgroundColor: theme.color.backgroundColor,
      minWidth: "100vw",
      minHeight: "100vh",
    },
  };
};

export default useStyles;

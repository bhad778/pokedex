import { Theme, ThemeName } from "theme/types";

export const DEFAULT_COLORS = {
  backgroundColor: "#ff8267",
};

export enum DEFAULT_SPACING {
  base = 0,
}

export const DEFAULT_THEME: Theme = {
  name: ThemeName.Default,
  color: DEFAULT_COLORS,
  spacing: DEFAULT_SPACING,
};

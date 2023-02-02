import { DEFAULT_COLORS, DEFAULT_SPACING } from "theme/default.theme";

export enum ThemeName {
  Default = "default",
}
export interface Theme {
  name: ThemeName;
  color: typeof DEFAULT_COLORS;
  spacing: typeof DEFAULT_SPACING;
}

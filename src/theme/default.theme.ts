import { Theme, ThemeName } from "theme/types";

export const DEFAULT_COLORS = {
  backgroundColor: "#F8F0E3",
  // todo remove
  // normal: "#A8A878",
  // fire: "#F08030",
  // water: "#6890F0",
  // grass: "#78C850",
  // electric: "#F8D030",
  // ice: "#98D8D8",
  // fighting: "#C03028",
  // poison: "#A040A0",
  // ground: "#E0C068",
  // flying: "#A890F0",
  // psychic: "#F85888",
  // bug: "#A8B820",
  // rock: "#B8A038",
  // ghost: "#705898",
  // dark: "#705848",
  // dragon: "#7038F8",
  // steel: "#B8B8D0",
  // fairy: "#EE99AC",
};

export enum DEFAULT_SPACING {
  base = 0,
}

export const DEFAULT_THEME: Theme = {
  name: ThemeName.Default,
  color: DEFAULT_COLORS,
  spacing: DEFAULT_SPACING,
};

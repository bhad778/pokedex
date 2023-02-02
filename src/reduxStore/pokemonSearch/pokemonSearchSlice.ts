import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TPokemonSearchData } from "./pokemonSearchTypes";

const initialState: TPokemonSearchData = {
  pokemonSearchResults: [],
};

export const pokemonSearchSlice = createSlice({
  name: "pokemonSearch",
  initialState,
  reducers: {
    resetPokemonSearchResults: () => initialState,
    setPokemonSearchResults: (state, action: PayloadAction<any>) => {
      state.pokemonSearchResults = action.payload;
    },
  },
});

export const { resetPokemonSearchResults, setPokemonSearchResults } = pokemonSearchSlice.actions;

export default pokemonSearchSlice.reducer;

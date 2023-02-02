import { configureStore } from "@reduxjs/toolkit";
import PokemonSearchData from "./pokemonSearch/pokemonSearchSlice";

export const store = configureStore({
  reducer: {
    PokemonSearchData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

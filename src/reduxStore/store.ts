import { configureStore } from "@reduxjs/toolkit";
import pokemonSearchData from "./pokemonSearch/pokemonSearchSlice";

export const store = configureStore({
  reducer: {
    pokemonSearchData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

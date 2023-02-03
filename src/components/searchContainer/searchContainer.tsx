import React, { useCallback, useEffect, useState } from "react";
import Search from "components/searchContainer/search";
import Results from "components/searchContainer/results";
import { PokemonClient } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
import { RootState } from "reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonSearchResults } from "reduxStore/pokemonSearch/pokemonSearchSlice";
import useDebounce from "utils/useDebounce";

import useStyles from "./searchContainerStyles";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");

  const debouncedValue = useDebounce<string>(searchText, 500);

  const pokemonSearchResults = useSelector((state: RootState) => state.pokemonSearchData.pokemonSearchResults);

  const api = new PokemonClient();

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText) {
      getPokemon(searchText);
    }
  }, [debouncedValue]);

  const getPokemon = async (searchText: string) => {
    const pokemonResponse: Pokemon = await api.getPokemonByName(searchText);

    dispatch(setPokemonSearchResults(pokemonResponse));
  };

  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.searchInputContainer}>
        <div style={styles.title}>Clefairydex</div>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <Results pokemonSearchResults={pokemonSearchResults} searchText={searchText} />
    </div>
  );
};

export default SearchContainer;

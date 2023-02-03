import React, { useCallback, useEffect, useState } from "react";
import Search from "components/searchContainer/search";
import Results from "components/searchContainer/results";
import { debounce } from "utils/commonUtils";
import { PokemonClient } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
import { RootState } from "reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonSearchResults } from "reduxStore/pokemonSearch/pokemonSearchSlice";

import useStyles from "./searchContainerStyles";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");

  const pokemonSearchResults = useSelector((state: RootState) => state.pokemonSearchData.pokemonSearchResults);

  const api = new PokemonClient();

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText) {
      debounceGetPokemon(searchText);
    }
  }, [searchText]);

  const getPokemon = async () => {
    const pokemonResponse: Pokemon = await api.getPokemonByName(searchText);

    dispatch(setPokemonSearchResults(pokemonResponse));
  };

  const debounceGetPokemon = useCallback(
    debounce(() => getPokemon(), 500),
    [searchText]
  );

  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.searchInputContainer}>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      {pokemonSearchResults && <Results pokemonSearchResults={pokemonSearchResults} searchText={searchText} />}
    </div>
  );
};

export default SearchContainer;

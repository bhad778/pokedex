import React, { useCallback, useEffect, useState } from "react";
import Search from "components/searchContainer/search";
import Results from "components/searchContainer/results";
import PastSearches from "components/searchContainer/pastSearches";
import { PokemonClient } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
import { RootState } from "reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonSearchResults, addPastSearch } from "reduxStore/pokemonSearch/pokemonSearchSlice";
import useDebounce from "utils/useDebounce";
import PokemonDetails from "components/pokemonDetails";

import useStyles from "./searchContainerStyles";
import { Modal, ModalOverlay } from "@chakra-ui/react";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();
  // const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] = useState(false);

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
    dispatch(addPastSearch(pokemonResponse));
  };

  const closePokemonDetailsModal = useCallback(() => {
    setSelectedPokemon(undefined);
  }, []);

  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.searchInputContainer}>
        <div style={styles.title}>Clefairydex</div>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div style={styles.resultsContainer}>
        <Results pokemonSearchResults={pokemonSearchResults} searchText={searchText} setSelectedPokemon={setSelectedPokemon} />
      </div>
      <div style={styles.resultsContainer}>
        <PastSearches setSelectedPokemon={setSelectedPokemon} />
      </div>
      <Modal isOpen={!!selectedPokemon} onClose={closePokemonDetailsModal}>
        <ModalOverlay />
        <PokemonDetails pokemon={selectedPokemon} />
      </Modal>
    </div>
  );
};

export default SearchContainer;

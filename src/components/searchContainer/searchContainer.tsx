import React, { useCallback, useEffect, useState } from "react";
import Search from "components/searchContainer/search";
import Results from "components/searchContainer/results";
import PastSearches from "components/searchContainer/pastSearches";
import { PokemonClient, EvolutionClient, ChainLink } from "pokenode-ts";
import { Pokemon } from "types/AppTypes";
import { RootState } from "reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonSearchResults, addPastSearch, setEvolutionData } from "reduxStore/pokemonSearch/pokemonSearchSlice";
import useDebounce from "utils/useDebounce";
import PokemonDetails from "components/pokemonDetails";

import useStyles from "./searchContainerStyles";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();

  const debouncedValue = useDebounce<string>(searchText, 500);

  const pokemonSearchResults = useSelector((state: RootState) => state.pokemonSearchData.pokemonSearchResults);

  const pokemonApi = new PokemonClient();
  const evolutionApi = new EvolutionClient(); // create a EncounterClient

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText) {
      getPokemon(searchText);
    }
  }, [debouncedValue]);

  const getPokemon = async (searchText: string) => {
    const getPokemonPromise = pokemonApi.getPokemonByName(searchText);
    const getSpeciesPromise = pokemonApi.getPokemonSpeciesByName(searchText);

    Promise.all([getPokemonPromise, getSpeciesPromise]).then((values) => {
      // extract evolutionId from url
      let evolutionChainUrl = values[1].evolution_chain.url;
      evolutionChainUrl = evolutionChainUrl.slice(0, -1);
      let n = evolutionChainUrl.lastIndexOf("/");
      let chainId = evolutionChainUrl.substring(n + 1);

      // call this once getPokemonByName is done
      // because  we need id to make this call
      getEvolutions(parseInt(chainId));

      dispatch(setPokemonSearchResults(values[0]));
      dispatch(addPastSearch(values[0]));
    });
  };

  const getEvolutions = async (id: number) => {
    const pokemonResponse = await evolutionApi.getEvolutionChainById(id);

    let evolutionNames: string[] = [];

    const buildEvolvePokemonArray = (chainLink: ChainLink) => {
      evolutionNames.push(chainLink?.species.name);
      if (chainLink?.evolves_to[0]?.evolves_to) {
        // recursively call until all evolution names are extracted
        buildEvolvePokemonArray(chainLink.evolves_to[0]);
      }
    };

    // if pokemon has evolution, get evolution data
    if (pokemonResponse?.chain?.evolves_to) {
      buildEvolvePokemonArray(pokemonResponse.chain);
    }

    // remove searched pokemon from evolution list
    evolutionNames = evolutionNames.filter((e) => e !== searchText);

    let pokemonPromises: any[] = [];
    evolutionNames.map((evolution: string) => {
      pokemonPromises.push(pokemonApi.getPokemonByName(evolution));
    });

    Promise.all(pokemonPromises).then((evolutions) => {
      dispatch(setEvolutionData(evolutions));
    });
  };

  const closePokemonDetailsModal = useCallback(() => {
    setSelectedPokemon(undefined);
  }, []);

  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.searchInputContainer}>
        <div style={styles.title}>Clefairypedia</div>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div style={styles.resultsContainer}>
        <Results pokemonSearchResults={pokemonSearchResults} setSelectedPokemon={setSelectedPokemon} />
      </div>
      <div style={styles.resultsContainer}>
        <PastSearches setSelectedPokemon={setSelectedPokemon} />
      </div>
      <Modal isOpen={!!selectedPokemon} size="xl" onClose={closePokemonDetailsModal}>
        <ModalOverlay />
        <ModalContent>
          <PokemonDetails pokemon={selectedPokemon} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SearchContainer;

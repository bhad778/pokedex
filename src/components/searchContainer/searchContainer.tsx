import React from "react";
import Search from "components/searchContainer/search";
import Results from "components/searchContainer/results";

import useStyles from "./searchContainerStyles";

const SearchContainer = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.searchInputContainer}>
        <Search />
      </div>
      <Results />
    </div>
  );
};

export default SearchContainer;

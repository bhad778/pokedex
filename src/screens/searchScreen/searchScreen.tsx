import React from "react";
import SearchContainer from "components/searchContainer";

import useStyles from "./searchScreenStyles";

const SearchScreen = () => {
  const styles = useStyles();
  return (
    <div style={styles.container}>
      <SearchContainer />
    </div>
  );
};

export default SearchScreen;

import React from "react";
import { Input } from "@chakra-ui/react";

import useStyles from "./searchStyles";

const Search = () => {
  const styles = useStyles();

  return (
    <div>
      <Input placeholder="Search any pokemon" />
    </div>
  );
};

export default Search;

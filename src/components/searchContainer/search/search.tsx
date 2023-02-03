import React, { useCallback } from "react";
import { Input } from "@chakra-ui/react";

import useStyles from "./searchStyles";

interface SearchProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const Search = (props: SearchProps) => {
  const { setSearchText, searchText } = props;
  const styles = useStyles();

  const onSearchTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }, []);

  return (
    <div>
      <Input value={searchText} onChange={onSearchTextChange} placeholder="Search any pokemon" />
    </div>
  );
};

export default Search;

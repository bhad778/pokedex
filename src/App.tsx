import React from "react";
import { Provider } from "react-redux";
import { store } from "reduxStore/store";
import { ThemeProvider } from "theme/theme.context";
import { DEFAULT_THEME } from "theme/default.theme";
import SearchContainer from "components/searchContainer";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider initial={DEFAULT_THEME}>
        <SearchContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

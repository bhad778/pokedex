import React from "react";
import { Provider } from "react-redux";
import { store } from "reduxStore/store";
import { ThemeProvider } from "theme/theme.context";
import { DEFAULT_THEME } from "theme/default.theme";
import SearchScreen from "screens/searchScreen/searchScreen";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ThemeProvider initial={DEFAULT_THEME}>
          <SearchScreen />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;

import React from "react";
import { Provider } from "react-redux";
import { store } from "reduxStore/store";
import { ThemeProvider } from "theme/theme.context";
import { DEFAULT_THEME } from "theme/default.theme";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider initial={DEFAULT_THEME}>
        <div style={{ backgroundColor: "red" }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

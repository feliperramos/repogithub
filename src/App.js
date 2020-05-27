import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

import Routes from "./Routes";
import theme from "./theme";

const History = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={History}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

import Routes from "./Routes";
import theme from "./theme";
import { IssuesProvider } from "./components/RepoIssues";

const History = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <IssuesProvider>
        <Router history={History}>
          <Routes />
        </Router>
      </IssuesProvider>
    </ThemeProvider>
  );
};

export default App;

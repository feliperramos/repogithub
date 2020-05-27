import React from "react";
import { Switch } from "react-router-dom";

import { RouterLayout } from "./components";
import { SearchRepo, IssuesPage } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouterLayout component={SearchRepo} exact path="/" />
      <RouterLayout component={IssuesPage} exact path="/issues" />
    </Switch>
  );
};

export default Routes;

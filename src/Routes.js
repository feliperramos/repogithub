import React from "react";
import { Switch } from "react-router-dom";

import { RouterLayout } from "./components";
import { SearchRepo } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouterLayout component={SearchRepo} exact path="/" />
    </Switch>
  );
};

export default Routes;

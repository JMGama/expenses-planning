import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { NotFound } from "../../pages/NotFound";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

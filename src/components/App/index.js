import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { LayoutRouter } from "../../components/Layout";
import { NotFound } from "../../pages/NotFound";

import { UserProvider } from '../../context/user-context'

export const App = () => (
  <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LayoutRouter} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </UserProvider>
);

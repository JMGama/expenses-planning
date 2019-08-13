import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Home } from "../../pages/Home";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component={Home} />
    </Layout>
  </BrowserRouter>
);

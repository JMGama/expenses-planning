import React from "react";
import { Title, Paragraph } from "./styles";
import { Navbar } from "../Navbar";

export const App = () => (
  <div>
    <Navbar />
    <Title>
      <span className="mx-1" role="img" aria-label="money-with-wings">
        💸
      </span>
      Expenses Planning
      <span role="img" aria-label="money-with-wings">
        💸
      </span>
    </Title>
    <Paragraph>
      Welcome to what will be the future application to manage your money and
      plan your expenses the right way.
    </Paragraph>
  </div>
);

import React from "react";
import { Navbar } from "../Navbar";
import { Card } from "../Card";
import { StatusBar } from "../StatusBar";
import { ExpensesCard } from "../ExpensesCard";

export const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <Card />
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <StatusBar />
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <ExpensesCard />
        </div>
        <div className="col">
          <ExpensesCard />
        </div>
      </div>
    </div>
  </div>
);

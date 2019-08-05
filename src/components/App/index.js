import React from "react";
import { Navbar } from "../Navbar";
import { Card } from "../Card";
import { StatusBar } from "../StatusBar";
import { ExpensesCard } from "../ExpensesCard";

export const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <Card />
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <StatusBar />
        </div>
      </div>

      <div className="row my-4 card-deck ">
        {/* This div can have a max of 3 Expenses cards, if there are more you need to create another div */}
        <ExpensesCard
          month="August"
          values={{
            income: "10,000.00",
            outcome: "3,000.00",
            balance: "7,000.00"
          }}
        />
        <ExpensesCard
          month="July"
          values={{
            income: "10,000.00",
            outcome: "5,000.00",
            balance: "5,000.00"
          }}
        />
        <ExpensesCard
          month="June"
          values={{
            income: "10,000.00",
            outcome: "8,000.00",
            balance: "2,000.00"
          }}
        />
      </div>
    </div>
  </div>
);

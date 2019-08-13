import React from "react";

import { ExpensesCard } from "../../components/ExpensesCard";

import Row from "react-bootstrap/Row";

export const Home = () => (
  <div>
    <Row className="card-deck my-3">
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
    </Row>
  </div>
);

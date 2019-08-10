import React from "react";
import { NavigationBar } from "../NavigationBar";
import { StatusBar } from "../StatusBar";
import { ExpensesCard } from "../ExpensesCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const App = () => (
  <div>
    <NavigationBar />
    <Container>
      <Row>
        <Col>
          <StatusBar />
        </Col>
      </Row>

      <Row className="card-deck my-sm-4">
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
    </Container>
  </div>
);

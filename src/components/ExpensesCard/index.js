import React from "react";
import { ExpensesCardHeader } from "../ExpensesCardHeader";
import { ExpensesTable } from "../ExpensesTable";
import Card from "react-bootstrap/Card";

export const ExpensesCard = props => (
  <Card className="shadow mx-3 mx-sm-3">
    <ExpensesCardHeader month={props.month} values={props.values} />

    <Card.Body className="p-2">
      <h6 className="ml-3">Incomes</h6>
      <ExpensesTable />
    </Card.Body>

    <Card.Body className="p-2">
      <h6 className="ml-3">Outcomes</h6>
      <ExpensesTable />
    </Card.Body>
  </Card>
);

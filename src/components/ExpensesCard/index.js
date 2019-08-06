import React from "react";
import { ExpensesCardHeader } from "../ExpensesCardHeader";
import Card from "react-bootstrap/Card";

export const ExpensesCard = props => (
  <Card className="shadow mx-3 mx-sm-3">
    <ExpensesCardHeader month={props.month} values={props.values} />
    <Card.Body className="p-3">something</Card.Body>
  </Card>
);

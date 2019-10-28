import React from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";
import Row from "react-bootstrap/Row";
import { FiArrowUp, FiArrowDown } from "react-icons/fi"


export const MonthCard = () => {

  return (
    <div>
      <Row className="card-deck my-3">
        <MonthExpensesCard>
          <FiArrowUp color="green" /> Incomes < FiArrowUp color="green" />
        </MonthExpensesCard>
        <MonthExpensesCard>
          <FiArrowDown color="red" /> Outcomes < FiArrowDown color="red" />
        </MonthExpensesCard>
      </Row>
    </div>
  );
};

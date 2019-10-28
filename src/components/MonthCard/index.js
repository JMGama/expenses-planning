import React from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";
import Row from "react-bootstrap/Row";
import { FiArrowUp, FiArrowDown } from "react-icons/fi"

export const MonthCard = () => {
  const incomeHeader = <div><FiArrowUp color="green" /> Incomes <FiArrowUp color="green" /></div>
  const outcomeHeader = <div><FiArrowDown color="red" /> Outcomes <FiArrowDown color="red" /></div>

  return (
    <div>
      <Row className="card-deck my-3">
        <MonthExpensesCard header={incomeHeader} />
        <MonthExpensesCard header={outcomeHeader} />
      </Row>
    </div>
  );
};

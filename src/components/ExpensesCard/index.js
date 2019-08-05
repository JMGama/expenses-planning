import React from "react";
import { ExpensesCardHeader } from "../ExpensesCardHeader";

export const ExpensesCard = props => (
  <div className="card border-0 shadow mx-3 mx-sm-3">
    <ExpensesCardHeader month={props.month} values={props.values} />
    <div className="card-body p-3">something</div>
  </div>
);

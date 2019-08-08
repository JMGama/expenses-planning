import React from "react";
import { FiDollarSign } from "react-icons/fi";

export const MoneyCard = props => (
  <div className="text-center">
    <div className="font-weight-normal">
      <span>{props.text}</span>
    </div>

    <div className={"shadow d-inline-flex rounded my-1 border " + props.border}>
      <div className="align-middle p-2">
        <FiDollarSign className="align-middle" />{" "}
        <span className="align-middle mr-1">{props.value}</span>
      </div>
    </div>
  </div>
);

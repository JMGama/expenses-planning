import React from "react";
import { SmallText } from "./styles";

export const ExpensesCardHeader = props => (
  <div className="card-header ">
    <div className="row">
      <div className="col-4 font-weight-bold">{props.month}</div>
      <div className="col-8 font-weight-light">
        <div className="row align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Income
          </SmallText>
          <div className="card border-1 border-success my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.income}
            </SmallText>
          </div>
        </div>

        <div className="row align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Outcome
          </SmallText>
          <div className="card border-1 border-danger my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.outcome}
            </SmallText>
          </div>
        </div>
        <div className="row align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Balance
          </SmallText>
          <div className="card border-1 border-primary my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.balance}
            </SmallText>
          </div>
        </div>
      </div>
    </div>
  </div>
);

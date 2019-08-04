import React from "react";
import { MoneyCard } from "../MoneyCard";
export const StatusBar = () => (
  <div className="container">
    <div className="card border-0 shadow my-5">
      <div className="card-body p-3 row">
        <div className="col-4">
          <MoneyCard value="16,000.00" text="Income" border="border-success" />
        </div>

        <div className="col-4">
          <MoneyCard value="5,000.00" text="Outcome" border="border-danger" />
        </div>
        <div className="col-4">
          <MoneyCard value="5,000.00" text="Total" border="border-primary" />
        </div>
      </div>
    </div>
  </div>
);

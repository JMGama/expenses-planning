import React from "react";
import { MoneyCard } from "../MoneyCard";
import { FaPlus } from "react-icons/fa";

export const StatusBar = () => (
  <div className="card border-0 shadow">
    <div className="card-body p-3 container">
      <div className="row align-items-center">
        <div className="col-6">
          <div className="row">
            <div className="col">
              <MoneyCard
                value="16,000.00"
                text="Income"
                border="border-success"
              />
            </div>

            <div className="col">
              <MoneyCard
                value="5,000.00"
                text="Outcome"
                border="border-danger"
              />
            </div>

            <div className="col">
              <MoneyCard
                value="5,000.00"
                text="Balance"
                border="border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

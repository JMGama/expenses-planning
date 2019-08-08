import React from "react";
import { MoneyCard } from "../MoneyCard";
import { FiPlus } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

export const StatusBar = () => (
  <Card className="shadow">
    <Card.Body className="p-3 container">
      <Row className="align-items-center">
        <div className="col-6">
          <Row>
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
          </Row>
        </div>
        <div className="col-6 text-right">
          <Dropdown>
            <Dropdown.Toggle
              variant="info"
              id="dropdown-basic"
              className="shadow"
            >
              <FiPlus className="align-middle" />{" "}
              <span className="align-middle mr-1">Add</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Income</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Outcome</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Estimation</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
    </Card.Body>
  </Card>
);

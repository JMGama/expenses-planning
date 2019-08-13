import React from "react";
import { MoneyCard } from "../MoneyCard";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const StatusBar = () => (
  <Card className="shadow col-12">
    <Card.Body className="p-2 container">
      <Row>
        <Col>
          <MoneyCard value="16,000.00" text="Income" border="border-success" />
        </Col>

        <Col>
          <MoneyCard value="5,000.00" text="Outcome" border="border-danger" />
        </Col>

        <Col>
          <MoneyCard value="5,000.00" text="Balance" border="border-primary" />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

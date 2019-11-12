import React from "react";
import { MoneyCard } from "../MoneyCard";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const StatusBar = () => (
  <Card className="shadow">
    <Card.Header as="h6" className="py-2">
      General Balance
    </Card.Header>
    <Card.Body className="container pt-1 pb-2  card-body">
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

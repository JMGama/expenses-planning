import React, { useState } from "react";
import { MoneyCard } from "../MoneyCard";
import { Select } from "./styles";

import { FiPlus } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";

import CurrencyInput from "react-currency-input";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const StatusBar = () => {
  const [selectedValue, setSelectedValue] = useState("Income");
  return (
    <Card className="shadow">
      <Card.Body className="p-3 container">
        <Row className="align-items-center">
          <div className="col-6 mt-2">
            <Form>
              <Form.Group as={Row} controlId="AddValue.Select">
                <Form.Label column>New:</Form.Label>
                <Col>
                  <Select as="select" className="form-control shadow">
                    <option className="text-success" value="Income">
                      Income
                    </option>
                    <option className="text-danger" value="Outcome">
                      Outcome
                    </option>
                  </Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="AddValue.Select">
                <Col>
                  <InputGroup className="shadow">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FiDollarSign className="align-middle" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <CurrencyInput className="form-control" />
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form>
          </div>

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
        </Row>
      </Card.Body>
    </Card>
  );
};

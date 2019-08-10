import React, { useState } from "react";

import { FiDollarSign } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import CurrencyInput from "react-currency-input";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewValueCard = () => {
  const [selectedValue, setSelectedValue] = useState("Income");
  const [amount, setAmount] = useState(0.0);
  const [description, setDescription] = useState("");

  return (
    <Card className="shadow">
      <Card.Header as="h6" className="py-2">
        Add New Income/Outcome
      </Card.Header>
      <Card.Body className="container pt-1 pb-2 ">
        <Form className="mt-2">
          <Form.Row>
            <Col sm="2" xs="12">
              <InputGroup className="shadow" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FiDollarSign className="align-middle" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <CurrencyInput
                  className="form-control"
                  value={amount}
                  onChange={(event, value) => setAmount(value)}
                />
              </InputGroup>
            </Col>

            <Col sm="4" xs="12">
              <Form.Control
                type="text"
                placeholder="Description"
                className="shadow"
                size="sm"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </Col>

            <Col sm="2" xs="12">
              <Form.Control
                as="select"
                className={
                  "shadow " +
                  (selectedValue === "Income"
                    ? "border-success"
                    : "border-danger")
                }
                value={selectedValue}
                onChange={event => setSelectedValue(event.target.value)}
                size="sm"
              >
                <option className="text-success" value="Income">
                  Income
                </option>
                <option className="text-danger" value="Outcome">
                  Outcome
                </option>
              </Form.Control>
            </Col>

            <Col sm="2" xs="6">
              <DayPickerInput
                inputProps={{
                  className:
                    "shadow form-control form-control-sm text-center font-weight-normal"
                }}
              />
            </Col>

            <Col sm="2" xs="6">
              <Button variant="success" className="shadow" size="sm" block>
                <FiPlus className="align-middle" />{" "}
                <span className="align-middle mr-1">Add</span>
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

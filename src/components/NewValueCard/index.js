import React, { useState } from "react";

import { FiDollarSign } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import CurrencyInput from "react-currency-input";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewValueCard = () => {
  const [selectedValue, setSelectedValue] = useState("Income");

  return (
    <Card className="shadow">
      <Card.Header as="h6" className="py-2">
        Add New Income/Outcome
      </Card.Header>
      <Card.Body className="container pt-2 pb-0">
        <Form className="mt-2">
          <Form.Group as={Row} controlId="AddValue.Amount">
            <Col>
              <InputGroup className="shadow" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FiDollarSign className="align-middle" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <CurrencyInput className="form-control" />
              </InputGroup>
            </Col>
          </Form.Group>

          <Form.Row>
            <Col sm="3">
              <Form.Group as={Row} controlId="AddValue.Select">
                <Col>
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
              </Form.Group>
            </Col>

            <Col sm="7">
              <Form.Group as={Row} controlId="AddValue.Description">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    className="shadow"
                    size="sm"
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm="2">
              <Form.Group as={Row} controlId="AddValue.Button">
                <Col>
                  <Button variant="success" className="shadow" size="sm" block>
                    <FiPlus className="align-middle" />{" "}
                    <span className="align-middle mr-1">Add</span>
                  </Button>
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

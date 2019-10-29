import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import CurrencyInput from "react-currency-input";
import { FiDollarSign } from "react-icons/fi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const MonthExpensesCard = ({ header }) => {
  return (
    <Card className="shadow mx-3 mx-sm-3">
      <Card.Header as="h6" className="py-2">
        <Row>
          <Col className="align-self-center">{header}</Col>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <b>Total</b>
                  {/* <FiDollarSign className="align-middle" /> */}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <CurrencyInput
                className="form-control"
                value="100"
              />
            </InputGroup>
          </Col>
        </Row>


      </Card.Header>
      <Card.Body className="p-3">
        <Table responsive striped bordered hover size="sm" className="mb-0">
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>House Monthly Rent</td>
              <td>12/05/19</td>
              <td>$12,000.00</td>
            </tr>
            <tr>
              <td>House Monthly Rent</td>
              <td>12/05/19</td>
              <td>$12,000.00</td>
            </tr>
            <tr>
              <td>House Monthly Rent</td>
              <td>12/05/19</td>
              <td>$12,000.00</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

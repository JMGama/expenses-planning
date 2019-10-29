import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DisabledVisibleInput } from "./styles";
import { FaSearch, FaTrashAlt, FaPen } from 'react-icons/fa'

import { Link } from "react-router-dom";



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
                </InputGroup.Text>
              </InputGroup.Prepend>
              <DisabledVisibleInput
                className="form-control"
                value="100"
                disabled
              />
            </InputGroup>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body className="p-3">
        <Row className="mt-0 mb-2">
          <Col md={{ offset: 6 }}>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search"
                aria-label="Search"
              />
            </InputGroup>
          </Col>
        </Row>
        <Table responsive striped bordered hover size="sm" className="mb-0">
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">House Monthly Rent</td>
              <td className="align-middle">12/05/19</td>
              <td className="align-middle">$12,000.00</td>
              <td className="align-middle">
                <Link to="/expenses/month" className="mx-1">
                  <Button variant="info" size="sm" className="shadow">
                    <FaPen className="align-middle mb-1" />
                  </Button>
                </Link>
                <Link to="/expenses/month" className="mx-1">
                  <Button variant="danger" size="sm" className="shadow">
                    <FaTrashAlt className="align-middle mb-1" />
                  </Button>
                </Link>
              </td>
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
    </Card >
  );
};

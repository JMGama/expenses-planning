import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DisabledVisibleInput, TableData, TableContent } from "./styles";
import { FaSearch, FaTrashAlt, FaPen } from 'react-icons/fa'

import { Link } from "react-router-dom";



export const MonthExpensesCard = ({ header, monthData }) => {
  return (
    <Card className="">
      <Card.Header as="h6" className="py-2">
        <Row>
          <Col className="align-self-center">{header}</Col>
        </Row>
      </Card.Header>

      <Card.Body className="p-3">
        <Row className="mt-0 mb-2">
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <b>Total</b>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <DisabledVisibleInput
                className="form-control"
                value={monthData.total}
                disabled
              />
            </InputGroup>
          </Col>
          <Col>
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
          <TableContent>
            <thead>
              <tr>
                <th>Description</th>
                <th>Date</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {monthData.expenses.map((expense, index) => {
                return (
                  <tr>
                    <TableData className="align-middle col-md-6 text-left">{expense.description}</TableData>
                    <TableData className="align-middle col-md-2">{expense.date}</TableData>
                    <TableData className="align-middle col-md-3">{`$${expense.value.toFixed(2)}`}</TableData>
                    <TableData className="align-middle col-md-1">
                      <Link to="/expenses/month" className="mx-1">
                        <FaPen className="align-middle mb-1" />
                      </Link>
                      <Link to="/expenses/month" className="mx-1">
                        <FaTrashAlt className="align-middle mb-1" color="F53F3F" />
                      </Link>
                    </TableData>
                  </tr>
                )
              })
              }
            </tbody>
          </TableContent>
        </Table>
      </Card.Body>
    </Card >
  );
};

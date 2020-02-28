import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { DisabledVisibleInput, TableData, TableContent } from "./styles";
import { FaSearch, FaTrashAlt, FaPen } from 'react-icons/fa'

import { Link } from "react-router-dom";



export const MonthExpensesCard = ({ header, expenses, total }) => {
  const cardHeader = (<Card.Header as="h6" className="py-2">
    <Row>
      <Col className="align-self-center">{header}</Col>
    </Row>
  </Card.Header>)
  const cardBodyLoading = (<Card.Body className="p-3">
    <TableContent>
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    </TableContent>
  </Card.Body>)
  const cardBodyEmpty = (<Card.Body className="p-3">
    <TableContent>
      <div>
        <span>There isn't information for this month.</span>
      </div>
    </TableContent>
  </Card.Body>)

  if (!expenses) {
    return (
      <Card className="">
        {cardHeader}
        {cardBodyLoading}
      </Card >
    );
  }

  if (expenses && expenses.length > 0) {
    const cardBodyWithData = (<Card.Body className="p-3">
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
              value={total}
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
      <TableContent>
        <Table responsive striped bordered hover size="sm" className="mb-0">
          <thead>
            <tr>
              <th key="description">Description</th>
              <th key="date">Date</th>
              <th key="value">Value</th>
              <th key="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => {
              return (
                <tr key={`${expense.id}-data`}>
                  <TableData className="align-middle col-md-6 text-left" key={`${expense.id}-description`}>{expense.description}</TableData>
                  <TableData className="align-middle col-md-2" key={`${expense.id}-date`}>{expense.date}</TableData>
                  <TableData className="align-middle col-md-3" key={`${expense.id}-value`}>{`$${expense.value.toFixed(2)}`}</TableData>
                  <TableData className="align-middle col-md-1" key={`${expense.id}-actions`}>
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
        </Table>
      </TableContent>
    </Card.Body>)
    return (
      <Card className="">
        {cardHeader}
        {cardBodyWithData}
      </Card >
    );
  }

  if (expenses && expenses.length < 1) {
    return (
      <Card className="">
        {cardHeader}
        {cardBodyEmpty}
      </Card >
    );
  }



};

import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";


export const MonthExpensesCard = ({ header }) => {
  return (
    <Card className="shadow mx-3 mx-sm-3">
      <Card.Header as="h6" className="py-2">
        {header}
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

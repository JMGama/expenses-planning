import React from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export const MonthCard = () => {
  return (
    <Card className="shadow">
      <Card.Body>
        <Table responsive striped bordered hover size="sm" className="mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/05/19</td>
              <td>$12,000.00</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

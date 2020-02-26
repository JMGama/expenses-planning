import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const ExpensesTable = () => (
  <Card className=" shadow mx-0 my-0">
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
        <tr>
          <td>2</td>
          <td>12/05/19</td>
          <td>$12,000.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>12/05/19</td>
          <td>$12,000.00</td>
        </tr>
        <tr className="text-right font-weight-bold">
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

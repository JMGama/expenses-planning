import React from "react";

import { SmallText } from "./styles";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const ExpensesCardHeader = props => (
  <Card.Header className="card-header ">
    <Row>
      <div className="col-4 font-weight-bold mb-0">
        <Row>
          <Col>{props.month}</Col>
        </Row>

        <Row className="mt-4 mb-0">
          <Col>
            <Link to="/month">
              <Button variant="info" size="sm" className="shadow">
                <FiEdit className="align-middle" />{" "}
                <span className="align-middle mr-1">Edit</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="col-8 font-weight-light">
        <Row className="align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Income
          </SmallText>
          <Card border="success" className="shadow my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.income}
            </SmallText>
          </Card>
        </Row>

        <Row className="align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Outcome
          </SmallText>
          <Card border="danger" className="shadow my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.outcome}
            </SmallText>
          </Card>
        </Row>
        <Row className="align-middle">
          <SmallText className="col my-1 mx-1 px-0 align-middle text-right">
            Balance
          </SmallText>
          <Card border="primary" className="shadow my-1 mr-1 text-center col">
            <SmallText className="align-middle">
              ${props.values.balance}
            </SmallText>
          </Card>
        </Row>
      </div>
    </Row>
  </Card.Header>
);

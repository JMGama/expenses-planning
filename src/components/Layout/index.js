import React from "react";

import { NavigationBar } from "../../components/NavigationBar";
import { NewValueCard } from "../../components/NewValueCard";
import { StatusBar } from "../../components/StatusBar";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Layout = props => {
  const children = props.children;
  return (
    <div>
      <NavigationBar />

      <Container>
        <Row className="mt-4">
          <Col>
            <StatusBar />
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <NewValueCard />
          </Col>
        </Row>

        {props.children}
      </Container>
    </div>
  );
};

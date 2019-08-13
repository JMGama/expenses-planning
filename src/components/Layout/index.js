import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import { NavigationBar } from "../../components/NavigationBar";
import { NewValueCard } from "../../components/NewValueCard";
import { StatusBar } from "../../components/StatusBar";
import { Home } from "../../pages/Home";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Layout = ({ match }) => {
  return (
    <Fragment>
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

        <Route exact path={match.path} component={Home} />
      </Container>
    </Fragment>
  );
};

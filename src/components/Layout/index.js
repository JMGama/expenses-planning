import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import { NavigationBar } from "../../components/NavigationBar";
import { NewValueCard } from "../../components/NewValueCard";
import { StatusBar } from "../../components/StatusBar";
import { Home } from "../../pages/Home";
import { Month } from "../../pages/Month";

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

        <Redirect from={match.path} to="/home" exact />
        <Route exact path="/home" component={Home} />
        <Route exact path="/month" component={Month} />
      </Container>
    </Fragment>
  );
};

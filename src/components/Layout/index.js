import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NavigationBar } from "../../components/NavigationBar";
import { NewValueCard } from "../../components/NewValueCard";
import { StatusBar } from "../../components/StatusBar";
import { Home } from "../../pages/Home";
import { Month } from "../../pages/Month";
import { NotFound } from "../../pages/NotFound";
import { Login } from "../../components/Login";


import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Layout = props => {
  const children = props.children;
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

        {children}
      </Container>
    </Fragment>
  );
};

export const LayoutRouter = ({ match }) => {
  return (
    <Switch>
      <Redirect from="/expenses" to={`${match.path}/home`} exact />
      <Route
        exact
        path={`${match.path}/home`}
        render={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />
      <Route
        exact
        path={`${match.path}/month`}
        render={() => (
          <Layout>
            <Month />
          </Layout>
        )}
      />
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

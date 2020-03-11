import React, { Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NavigationBar } from "../../components/NavigationBar";
import { NewValueCard } from "../../components/NewValueCard";
import { StatusBar } from "../../components/StatusBar";
import { Home } from "../../pages/Home";
import { Month } from "../../pages/Month";
import { NotFound } from "../../pages/NotFound";
import { Login } from "../../components/Login";
import { SignUp } from "../../components/SignUp";


import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Layout = props => {
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

// const checkAuth = () => {
//   const token = localStorage.getItem('token')
//   const
// }

// const AuthRoute = ({ component: Component, ...rest }) => (
//   < Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//     ) : (
//         <Redirect to={{ pathname: '/login' }} />
//       )
//   )} />
// )

export const LayoutRouter = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route
        exact
        path={'/home'}
        render={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />
      <Route
        exact
        path={'/month'}
        render={() => (
          <Layout>
            <Month />
          </Layout>
        )}
      />
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
};

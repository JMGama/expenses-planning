import React from "react";

import { Link, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => (
  <Navbar expand="lg" bg="light" static="top" className="shadow">
    <Container>
      <Link to="/">
        <Navbar.Brand>Expenses Planning</Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/expenses/home">
            Balance
          </Nav.Link>

          <Nav.Link as={NavLink} to="/expenses/month">
            Monthly
          </Nav.Link>

          <Nav.Link as={NavLink} to="/">
            Other
          </Nav.Link>

          <Nav.Link as={NavLink} to="/">
            Other
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

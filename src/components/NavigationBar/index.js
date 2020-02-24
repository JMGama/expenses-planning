import React from "react";

import { Link, NavLink } from "react-router-dom";

import { NavbarStyled } from "./styles";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => (
  <NavbarStyled expand="lg" static="top" className="shadow navbar-dark" >
    <Container>
      <Link to="/">
        <NavbarStyled.Brand>Expenses Planning</NavbarStyled.Brand>
      </Link>
      <NavbarStyled.Toggle
        aria-controls="responsive-navbar-nav"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </NavbarStyled.Toggle>
      <NavbarStyled.Collapse id="responsive-navbar-nav">
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
      </NavbarStyled.Collapse>
    </Container>
  </NavbarStyled>
);

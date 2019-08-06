import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => (
  <Navbar expand="lg" bg="light" static="top" className="mb-5 shadow">
    <Container>
      <Navbar.Brand href="/">Expenses Planning</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="active" href="/">
            Home
          </Nav.Link>

          <Nav.Link className="" href="/">
            About
          </Nav.Link>

          <Nav.Link className="" href="/">
            Services
          </Nav.Link>

          <Nav.Link className="" href="/">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

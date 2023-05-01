import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Explore Foods</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
              <Link className="me-4 text-decoration-none text-white" to='/'>Home</Link>
              <Link className="me-4 text-decoration-none text-white" to='/blog'>Blog</Link>
              <Link className="me-4 text-decoration-none text-white" to='/login'>Login</Link>
              {/* <Link className="me-4 text-decoration-none text-white" to='/register'>Register</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary mx-2 text-white pt-4">
      <Container>
        <Row>
          <Col md={5}>
            <h4>American Chef's Recipes</h4>
            <p>123 Main Street, Anytown, USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@americanchefeecipes.com</p>
          </Col>
          <Col md={4}>
            <h4>Connect With Us</h4>
            <ul>
              <li>
                <a className="text-decoration-none text-white" href="#">Facebook</a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">Twitter</a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">Instagram</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="mb-4">Legal</h4>
            <form>
               <p className="mb-2">Terms</p>
               <p>Privacy</p>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

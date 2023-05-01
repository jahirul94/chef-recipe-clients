import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Company Name</h4>
            <p>123 Main Street, Anytown, USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@companyname.com</p>
          </Col>
          <Col md={4}>
            <h4>Connect With Us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Join Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

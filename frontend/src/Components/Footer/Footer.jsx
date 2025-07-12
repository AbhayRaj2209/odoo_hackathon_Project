import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#854a68ff", padding: "30px 0" }}>
      <Container>
        <Row>
          {/* Left: Copyright */}
          <Col
            md={6}
            className="text-center text-md-start mb-3 mb-md-0"
            style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
          >
            <div>© 2025 All rights reserved.</div>
          </Col>

          {/* Right: Participants */}
          <Col
            md={6}
            className="text-center text-md-end"
            style={{ fontFamily: "Montserrat, sans-serif", color: "white", fontSize: "0.95rem" }}
          >
            <strong>Team Members:</strong>
            <br />
            Ishaan Saxena – <a href="mailto:23mc3027@rgipt.ac.in" style={{ color: "#fff" }}>23mc3027@rgipt.ac.in</a>
            <br />
            Chinmay Bhardwaj – <a href="mailto:23mc3019@rgipt.ac.in" style={{ color: "#fff" }}>23mc3019@rgipt.ac.in</a>
            <br />
            Abhay Raj – <a href="mailto:23it3001@rgipt.ac.in" style={{ color: "#fff" }}>23it3001@rgipt.ac.in</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

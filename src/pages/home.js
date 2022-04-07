import React from "react";
import Background from "../img/danilopalen.jpg";
import "./pages.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="justify-content-md-center">
      <Row style={{ marginTop: "200px" }} className="justify-content-md-center">
        <Col md="auto" className="col-grid">
          <div className="item-center">
            <h1>Hi👋 I'm Danilo Palen</h1>
            <h4 style={{ width: "600px" }}>
              I'm a React Developer 👨‍💻 with commercial experience in Web and
              Software Development
            </h4>
            <p>#JavaScript #HTML #CSS #React</p>
            <Link to="/contact" style={{ color: "#fff" }}>
              <button className="btn-hire">Hire me</button>
            </Link>
          </div>
        </Col>
        <Col md="auto" className="col-grid dp-container">
          <img src={Background} className="dp item-center"></img>
        </Col>
      </Row>
    </Container>
  );
}

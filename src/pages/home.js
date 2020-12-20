import React from "react";
import Background from "../img/danilopalen.jpg";
import "./pages.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="justify-content-md-center">
      <Row style={{ marginTop: "200px" }} className="justify-content-md-center">
        <Col md="auto" className="col-grid">
          <div className="item-center">
            <h1>Hi👋 I'm Danilo Palen</h1>
            <h4>I'm a Front End Developer 👨‍💻 and I create awesome websites</h4>
            <p>#JavaScript #HTML #CSS #React</p>
            <button className="btn-hire">Hire me</button>
          </div>
        </Col>
        <Col md="auto" className="col-grid dp-container">
          <img src={Background} className="dp item-center"></img>
        </Col>
      </Row>
    </Container>
  );
}

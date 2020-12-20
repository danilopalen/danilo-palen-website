import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import calculator from "../img/calculator-1.png";
import todolist from "../img/to-do-list.png";
import "./pages.css";

export default function Portfolio() {
  return (
    <Container className="justify-content-md-center">
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={calculator} />
            <Card.Body>
              <Card.Title>Calculator app</Card.Title>
              <Card.Text>#HTML #CSS #React</Card.Text>
              <a
                target="_blank"
                href="https://codepen.io/danilopalen/full/MQbPaG"
              >
                <Button variant="primary">Try app</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={todolist} />
            <Card.Body>
              <Card.Title>Todo app</Card.Title>
              <Card.Text>#HTML #CSS #React</Card.Text>
              <a
                target="_blank"
                href="https://codepen.io/danilopalen/full/YYJpKP"
              >
                <Button variant="primary">Try app</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div>
          <div style={{ marginTop: "140px" }}>
            <a target="_blank" href="https://codepen.io/danilopalen">
              <button className="btn-show-more">SHOW MORE 👀</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

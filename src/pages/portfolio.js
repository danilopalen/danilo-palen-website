import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import calculator from "../img/calculator-1.png";
import todolist from "../img/to-do-list.png";
import simplelogindemo from "../img/simplelogindemo.netlify.app_.png";
import simpleblogsite from "../img/simpleblogsite.netlify.app_.png";
import sweetasmovers from "../img/sweetasmovers.png";
import "./pages.scss";

export default function Portfolio() {
  return (
    <Container
      className="justify-content-md-center"
      style={{ height: "auto", paddingBottom: "50px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          <Card style={{ width: "12rem", margin: "0 20px" }}>
            <Card.Img
              variant="top"
              src={sweetasmovers}
              style={{
                objectFit: "cover",
                height: "190px",
                objectPosition: "center",
              }}
            />
            <Card.Body>
              <Card.Title>Business site</Card.Title>
              <Card.Text>#HTML #CSS #React</Card.Text>
              <a target="_blank" href="https://sweetasmovers.netlify.app/">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "0 20px" }}>
            <Card.Img
              variant="top"
              src={simplelogindemo}
              style={{
                objectFit: "cover",
                height: "190px",
                objectPosition: "right",
              }}
            />
            <Card.Body>
              <Card.Title>Login page</Card.Title>
              <Card.Text>#HTML #CSS #React #Firebase</Card.Text>
              <a target="_blank" href="https://simplelogindemo.netlify.app/">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "0 20px" }}>
            <Card.Img
              variant="top"
              src={simpleblogsite}
              style={{
                objectFit: "cover",
                height: "190px",
                objectPosition: "left",
              }}
            />
            <Card.Body>
              <Card.Title>Blog page</Card.Title>
              <Card.Text>#HTML #CSS #React #Firebase</Card.Text>
              <a target="_blank" href="https://simpleblogsite.netlify.app/">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "0 20px" }}>
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
          <Card style={{ width: "12rem", margin: "0 20px" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a target="_blank" href="https://github.com/danilopalen">
            <button className="btn-show-more">
              <span style={{ marginRight: "10px" }}>SHOW MORE</span> 👀
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

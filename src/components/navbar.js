import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/portfolio">
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
}

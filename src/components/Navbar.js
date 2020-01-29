import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default class myNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg bg-light fixed-top text-uppercase text-primary navbar-shrink"
          bg="light"
          expand="lg"
        >
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "Fredericka the Great", fontStyle: "cursive" }}
          >
            web developer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto"
              style={{
                flexGrow: 10,
                alignItems: "center"
              }}
            >
              <ul className="navbar-nav ml-auto" style={{ marginLeft: 0 }}>
                {/* about */}
                {/* portfolio */}
                {/* contact */}
                <Nav.Link href="about">
                  <li className="nav-item mx-0 mx-lg-1">About</li>
                </Nav.Link>
                {/* oder:  <Link to="/about"> */}
                <Nav.Link href="portfolio">
                  <li className="nav-item mx-0 mx-lg-1">Portfolio</li>
                </Nav.Link>
                <Nav.Link href="contact">
                  <li className="nav-item mx-0 mx-lg-1">Contact</li>
                </Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

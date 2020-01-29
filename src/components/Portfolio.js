import React, { Component } from "react";
import blanko from "../img/blanko.png";
import { Row, Col, Image } from "react-bootstrap";
import ProjectOne from "./ProjectOne";
import GameComponent from "./GameComponent";
import ProjectTwo from "./ProjectTwo";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      visible: false
    };
  }
  toggleHover = () => this.setState({ hover: true, visible: true });
  isVisible = () => this.setState({ visible: false });
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { cursor: "pointer" };
    } else {
      linkStyle = { color: "#00000" };
    }
    return (
      <div>
        <div className="container">
          <div>
            <Row>
              {/* bf */}
              <Col md={4}>
                {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
                <Image
                  src={blanko}
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  responsive
                />
                <p>Jump & Crouch Game</p>

                {this.state.visible ? (
                  <ProjectOne isVisible={this.isVisible} />
                ) : null}
              </Col>
              <Col md={4}>
                {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
                <Image
                  src={blanko}
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  responsive
                />{" "}
                <p>Collaborative Project: Buckit-List</p>
                {this.state.visible ? (
                  <GameComponent isVisible={this.isVisible} />
                ) : null}
              </Col>

              <Col md={4}>
                {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
                <Image
                  src={blanko}
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  responsive
                />
                <p>Your Ecological Food-Print</p>
                {this.state.visible ? (
                  <ProjectTwo isVisible={this.isVisible} />
                ) : null}
              </Col>
              {/* <PortfolioItem
                isVisible={this.isVisible}
                // deleteItem={this.props.deleteItem}
              /> */}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

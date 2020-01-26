import React, { Component } from "react";
import blanko from "../img/blanko.png";
import { Row, Col, Image } from "react-bootstrap";

export default class Portfolio extends Component {
  render() {
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
                <Image src={blanko} responsive />
                <p>hi ich bin der erste teil von drei asdjsaiojdia kasdjsadj</p>
              </Col>

              <Col md={4}>
                {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
                <Image src={blanko} responsive />
                <p>
                  hi ich bin der zweite teil von drei asdjsaiojdia kasdjsadj
                </p>
              </Col>
              <Col md={4}>
                {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}

                <Image src={blanko} responsive />

                <p>
                  hi ich bin der dritte teil von drei a sklajdskdj sdjsaiojdia
                  kasdjsadj
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import blanko from "../img/blanko.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* bf */}
            <div className="col-md-6 col-lg-4">
              {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <img src={blanko} className="App-logo" alt="logo" />
                  <p>
                    hi ich bin der erste teil von drei asdjsaiojdia kasdjsadj
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <p>
                    hi ich bin der zweite teil von drei asdjsaiojdia kasdjsadj
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              {/* <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              /> */}
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <p>
                    hi ich bin der dritte teil von drei a sklajdskdj sdjsaiojdia
                    kasdjsadj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

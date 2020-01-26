import React, { Component } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <Form name="sentMessage" id="contactForm">
              <div className="control-group error">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Name"
                    style={{
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                      cursor: "auto"
                    }}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group error">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    id="email"
                    style={{
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                      cursor: "auto"
                    }}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group error">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <FormGroup controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Email"
                      id="email"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="form-group">
                <Button>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

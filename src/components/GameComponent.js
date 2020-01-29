import React, { Component } from "react";
import { Button } from "react-bootstrap";
export class GameComponent extends Component {
  render() {
    console.log(this.props.isVisible);

    return (
      <div>
        <p>
          hi i am hidden GAME-COMPONENT <br />
          Button(close) Button(demo){" "}
        </p>
        <Button onClick={this.props.isVisible}>Close</Button>
        <Button>Demo</Button>
      </div>
    );
  }
}

export default GameComponent;

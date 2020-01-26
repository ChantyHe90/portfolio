import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Navbar></Navbar>
          {/* about */}
          {/* portfolio */}
          {/* contact */}

          <Header />
          <Router>
            <Switch>
              <Route exact path="/about">
                {/* about component */}
              </Route>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route
            path="/search"
            render={() => {
              return (
                <div>
                  <Manualsearch addFood={this.addFoodHandler}></Manualsearch>
                </div>
              );
            }}
          ></Route> */}
              <Route path="/portfolio">
                <Portfolio></Portfolio>
              </Route>
              {/* <Route path="/contact">
            <Home />
          </Route> */}
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

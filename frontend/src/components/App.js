import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
import React, { Component } from "react";
import { render } from "react-dom";
import Products from './products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => {return <Redirect to="/home" />;}} />
          <Route exact path="/home" component={Products}/>
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
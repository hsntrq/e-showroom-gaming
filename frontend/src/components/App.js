import React, { Component } from "react";
import { render } from "react-dom";
import Products from './products';
import Product from './product';
import Searched from "./search";
import Post from './post';
import {Navbar, Footer} from './base';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} 
from "react-router-dom";

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
          <Route exact path="/ad/:productSlug" component={Product}/>
          <Route exact path="/search" component={Searched}/>
          <Route exact path = "/post" component={Post}/>
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<div><Navbar /> <App /> <Footer /></div>, appDiv);
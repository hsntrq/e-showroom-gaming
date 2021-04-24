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
  Redirect,
} 
from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.getCategories();    
  }

  getCategories() {
    fetch("/api/categories", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          categories: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar categories={this.state.categories} /> 
        <Router>
          <Switch>
            <Route exact path="/" render={() => {return <Redirect to="/home" />;}} />
            <Route exact path="/home" component={Products}/>
            <Route exact path="/ad/:productSlug" component={Product}/>
            <Route exact path="/search" component={Searched}/>
            <Route exact path="/post" render={() => <Post categories={this.state.categories} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
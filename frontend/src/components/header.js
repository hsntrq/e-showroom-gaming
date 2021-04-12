import React, { Component } from "react";

export default class Top extends Component {
  constructor(props) {
    super(props);
  };
  render() 
  {
    return  (
      <nav className="navbar navbar-light navbar-expand sticky-top navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/static/assets/img/logo.png"
              alt="RIGGED logo"
              style={{height: "50px"}}
            />
          </a>
          <div className="dropdown" style={{marginRight: "auto"}}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Categories
            </button>
            <form id="category_menu" method="GET" action="{% url 'api:search' %}">
              <ul
                className="dropdown-menu"
                name="category"
                style={{marginBottom: "5px"}}
                aria-labelledby="dropdownMenuButton"
              >
                {/* <li>
                  <a
                    className="dropdown-item"
                    href="/api/search?category={{category.category_name}}"
                  >
                    {{category.category_name}}
                  </a>
                </li>
                {% endfor %} */}
              </ul>
            </form>
          </div>
          <form
            id="searchbar"
            className="input-group"
            method="GET"
            action="/search"
            style={{width: "30%"}}
          >
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="What are you looking for..."
              name="q"
              required
            />
            <div className="input-group-prepend" style={{cursor: "pointer"}}>
              <button type="submit" className="input-group-text">Search</button>
            </div>
          </form>
  
          <a className="btn btn-primary ml-auto nav-b" role="button" id="login-b">
            Log In | Sign Up
          </a>
          <a className="btn btn-primary nav-b" role="button" id="post-ad">Post Ad</a>
        </div>
      </nav>
    )
  }
}

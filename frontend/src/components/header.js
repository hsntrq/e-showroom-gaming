import React, { Component } from "react";

export default class Top extends react.Component {
  constructor(props) {
    super(props);
  };



  render() 
  {
    return  (
        <div>
        <nav className="navbar navbar-light navbar-expand sticky-top navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/api">
            <img
              src="{% static 'assets/img/logo.png' %}"
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
                style="margin-bottom: 5px"
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
            action="{% url 'api:search' %}"
            style="width: 30%"
          >
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="What are you looking for..."
              name="q"
              required
            />
            <div className="input-group-prepend" style="cursor: pointer">
              <button type="submit" className="input-group-text">Search</button>
            </div>
          </form>
  
          <a className="btn btn-primary ml-auto nav-b" role="button" id="login-b">
            Log In | Sign Up
          </a>
          <a className="btn btn-primary nav-b" role="button" id="post-ad">Post Ad</a>
        </div>
      </nav>
  
      <div id="LoginModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg" role="content">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-8">
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="col-3">
                <button
                  id="register-m"
                  style="bottom: 0"
                  className="btn btn-primary btn-sm ml-1 float-right"
                >
                  Register
                </button>
              </div>
              <div className="col-1">
                <button
                  className="btn"
                  style="top: 0; padding: 0"
                  data-dismiss="modal"
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-sm-4">
                    <label className="sr-only" for="usrname">User Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      id="usr-name"
                      value=""
                      placeholder="Enter User Name"
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label className="sr-only" for="usrpwd">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-sm mr-1"
                      id="usr-pwd"
                      value=""
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm ml-auto"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm ml-1"
                    id="login-s"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <div id="RegisterModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg" role="content">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-8">
                <h4 className="modal-title">Register</h4>
              </div>
              <div className="col-3">
                <button
                  id="login-m"
                  style="bottom: 0"
                  className="btn btn-primary btn-sm ml-1 float-right"
                >
                  Login
                </button>
              </div>
              <div className="col-1">
                <button
                  className="btn"
                  style="top: 0; padding: 0"
                  data-dismiss="modal"
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="name">Enter Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="name"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="usr-name">Enter User Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="usr-name"
                      placeholder="Enter User Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="usr-email">Enter Email</label>
                    <input
                      type="email"
                      className="form-control form-control-sm mr-1"
                      name="usr-email"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="usr-location">Location</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="usr-location"
                      placeholder="Location (City)"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="usr-no">Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="usr-no"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="usr-pwd">Enter Password</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="usr-pwd"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="confirm-pwd"
                      >Confirm Password</label
                    >
                    <input
                      type="text"
                      className="form-control form-control-sm mr-1"
                      name="confirm-pwd"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm ml-auto"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm ml-1"
                    id="login-s"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

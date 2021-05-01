import React, { Component } from "react";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts();
  }

  render()
  {
      return(<div className="modal-body">
  <form>
    <div className="form-row">
      <div className="form-group col-sm-4">
        <label className="sr-only" htmlFor="usrname">User Name</label>
        <input type="text" className="form-control form-control-sm mr-1" id="usr-name" defaultValue placeholder="Enter User Name" />
      </div>
      <div className="form-group col-sm-4">
        <label className="sr-only" htmlFor="usrpwd">Password</label>
        <input type="password" className="form-control form-control-sm mr-1" id="usr-pwd" defaultValue placeholder="Enter Password" />
      </div>
    </div>
    <div className="form-row">
      <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary btn-sm ml-1" id="login-s" />
    </div>
  </form></div>

        )
  }
}
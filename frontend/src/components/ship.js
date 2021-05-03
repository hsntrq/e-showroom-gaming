import React, { Component } from "react";
//import "./ship.css";

export default class Ship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  render() {
    return (
      <div className="col-75">
        <div className="container">
          <form action="/action_page.php">
            <div className="row">
              <div className="col-50">
                <h3>Address</h3>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Shipping Address*"
                />
                <input
                  type="text"
                  id="Appartment Address"
                  name="address"
                  placeholder="Apartment Address*"
                />
                <input type="text" id="city" name="city" placeholder="City" />
                <div className="row">
                  <div className="col-50">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-50">
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="row">
                    <div className="col-50">
                      <label>
                        <input type="checkbox" checked="checked" name="cod" />{" "}
                        Payment Method - Cash on Delivery.
                      </label>
                    </div>
                    <input
                      type="submit"
                      value="Place my order"
                      className="btn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

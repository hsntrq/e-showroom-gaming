import React, { Component } from "react";
import "./ship.css";

export default class Ship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      apartment: "",
      city: "",
      no: "",
      zip: "",
      cOD: true,
    };
  }

  checkout(state) {
    return (e) => {
      e.preventDefault();
      fetch("/api/checkout/", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.status == 201;
        })
        .then(() => {
          window.location.href = "/confirm";
        });
    };
  }

  render() {
    return (
      <div className="ship">
        <div className="main">
          <div className="col-75">
            <div className="container">
              <form onSubmit={this.checkout(this.state)}>
                <div className="row">
                  <div className="col-50">
                    <h3>Address</h3>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Shipping Address*"
                      onChange={() =>
                        this.setState({ street: event.target.value })
                      }
                    />
                    <input
                      type="text"
                      id="Appartment Address"
                      name="address"
                      placeholder="Apartment Address*"
                      onChange={() =>
                        this.setState({ apartment: event.target.value })
                      }
                    />
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      onChange={() =>
                        this.setState({ city: event.target.value })
                      }
                    />
                    <div className="row">
                      <div className="col-50">
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="Phone Number"
                          onChange={() =>
                            this.setState({ no: event.target.value })
                          }
                        />
                      </div>
                      <div className="col-50">
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="Zip Code"
                          onChange={() =>
                            this.setState({ zip: event.target.value })
                          }
                        />
                      </div>
                      <div className="row">
                        <div className="col-50">
                          <label>
                            <input
                              type="checkbox"
                              checked="checked"
                              name="cod"
                            />{" "}
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
        </div>
      </div>
    );
  }
}

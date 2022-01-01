import React, { Component } from "react";
import "./ship.css";

export default class Ship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street_address: "",
      apartment_address: "",
      city: "",
      phone_number: "",
      zipC: "",
      cashOnDelivery: true,
    };
  }

  checkout(state) {
    return (e) => {
      e.preventDefault();
      console.log(state);
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
        .then((status) => {
          if (status){
            window.location.href = "/confirm";
          }
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
                      name="street_address"
                      placeholder="Shipping Address*"
                      onChange={() =>
                        this.setState({ street_address: event.target.value })
                      }
                    />
                    <input
                      type="text"
                      id="appartment_address"
                      name="apartment_address"
                      placeholder="Apartment Address*"
                      onChange={() =>
                        this.setState({ apartment_address: event.target.value })
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
                          id="phone_number"
                          name="phone_number"
                          placeholder="Phone Number"
                          onChange={() =>
                            this.setState({ phone_number: event.target.value })
                          }
                        />
                      </div>
                      <div className="col-50">
                        <input
                          type="text"
                          id="zipC"
                          name="zipC"
                          placeholder="Zip Code"
                          onChange={() =>
                            this.setState({ zipC: event.target.value })
                          }
                        />
                      </div>
                      <div className="row">
                        <div className="col-75">
                            <div className="form-check" style={{ display: "inline" }}>
                              <input
                                type="radio"
                                id="radio-1"
                                className="form-check-input"
                                name="cashOnDelivery"
                                defaultValue={true}
                                required
                              />
                              <label className="form-check-label" htmlFor="cashOnDelivery">
                                {'Cash on Delivery'}
                              </label>
                            </div>
                            <div className="form-check" style={{ display: "inline" }}>
                              <input
                                type="radio"
                                id="radio-2"
                                className="form-check-input"
                                name="cashOnDelivery"
                                defaultValue={false}
                              />
                              <label className="form-check-label" htmlFor="cashOnDelivery">
                                {'Pay with card'}
                              </label>
                            </div>
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

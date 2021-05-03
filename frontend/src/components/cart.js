import React, { Component } from "react";
//import "./cart.css";

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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-11 mx-auto">
            <div class="row mt-5 gx-3">
              <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <div class="card p-4">
                  <div class="row">
                    <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                      <img
                        src="images/img2.png"
                        class="img-fluid"
                        alt="cart img"
                      />
                    </div>
                    <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                      <div class="row">
                        <div class="col-6 card-title">
                          <h1 class="mb-4 product_name">Product Name</h1>
                        </div>
                        <div class="col-6">
                          <ul class="pagination justify-content-end set_quantity">
                            <li class="page-item">
                              <button
                                class="page-link "
                                onclick="decreaseNumber('textbox','itemval')"
                              >
                                <i class="fas fa-minus"></i>{" "}
                              </button>
                            </li>
                            <li class="page-item">
                              <input
                                type="text"
                                name=""
                                class="page-link"
                                value="1"
                                id="textbox"
                              />
                            </li>
                            <li class="page-item">
                              <button
                                class="page-link"
                                onclick="increaseNumber('textbox','itemval')"
                              >
                                {" "}
                                <i class="fas fa-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4 d-flex justify-content-end price_money">
                          <h3>
                            Rs. <span id="itemval">0.00 </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="card p-4">
                  <div class="row">
                    <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                      <img
                        src="images/img3.png"
                        class="img-fluid"
                        alt="cart img"
                      />
                    </div>
                    <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                      <div class="row">
                        <div class="col-6 card-title">
                          <h1 class="mb-4 product_name">Product Name</h1>
                        </div>
                        <div class="col-6">
                          <ul class="pagination justify-content-end set_quantity">
                            <li class="page-item">
                              <button
                                class="page-link "
                                onclick="decreaseNumber('textbox1','itemval1')"
                              >
                                {" "}
                                <i class="fas fa-minus"></i>{" "}
                              </button>
                            </li>
                            <li class="page-item">
                              <input
                                type="text"
                                name=""
                                class="page-link"
                                value="1"
                                id="textbox1"
                              />
                            </li>
                            <li class="page-item">
                              <button
                                class="page-link"
                                onclick="increaseNumber('textbox1','itemval1')"
                              >
                                {" "}
                                <i class="fas fa-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4 d-flex justify-content-end price_money">
                          <h3>
                            Rs. <span id="itemval1">0.00 </span>{" "}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div class="right_side p-3 shadow bg-white">
                  <h2 class="product_name mb-5">The Total Amount Of</h2>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Product amount</p>
                    <p>
                      Rs. <span id="product_total_amt">0.00</span>
                    </p>
                  </div>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      Rs. <span id="shipping_charge">50.0</span>
                    </p>
                  </div>
                  <hr />
                  <div class="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      Rs. <span id="total_cart_amt">0.00</span>
                    </p>
                  </div>
                  <button class="btn btn-primary text-uppercase">
                    {" "}
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

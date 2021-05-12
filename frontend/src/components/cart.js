import React, { Component } from "react";
import "./cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  getProducts() {
    fetch("/api/cart", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  updatequantity(index, inc, slug, product_quantity) {
    let box = document.getElementById("textbox" + index);
    if (inc && product_quantity == box.value+1){
      alert("Stock finished");
    }
    else if (inc == false && box.value == 1){
      alert("quantity can not be empty")
    }
    else{
    let increase = inc ? "True" : "False";
    console.log(slug);
    fetch("/api/updatequantity/", {
      method: "POST",
      body: JSON.stringify({ increase: increase, slug: slug }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        return response.status == 201;
      })
      .then((status) => {
        if (status) {
          let ch = inc ? 1:-1;
          box.value = parseInt(box.value) + ch;
        }
      });
    }
  }

  totalPrice(){
    let price = 0;
    this.state.products.map(index => {
      price += item.price;
    });
    console.log(price);
    return price
  }

  render() {
    return (
      <div className="container-fluid cart">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
              <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                {this.state.products.map((item, index) => (
                  <div key={index}>
                    <div className="card p-4">
                      <div className="row">
                        <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                          <img
                            src={item.image}
                            className="img-fluid"
                            alt="cart img"
                          />
                        </div>
                        <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                          <div className="row">
                            <div className="col-6 card-title">
                              <h1 className="mb-4 product_name">
                                {item.product}
                              </h1>
                            </div>
                            <div className="col-6">
                              <ul className="pagination justify-content-end set_quantity">
                                <li className="page-item">
                                  <button
                                    className="page-link "
                                    id = {"minus"+index}
                                    onClick={() => this.updatequantity(
                                      index,
                                      false,
                                      item.slug,
                                      item.product_quantity,
                                    )}
                                  >
                                    <i className="fas fa-minus"></i>{" "}
                                  </button>
                                </li>
                                <li className="page-item">
                                  <input
                                    type="text"
                                    name=""
                                    className="page-link"
                                    value={item.quantity}
                                    id={"textbox" + index}
                                  />
                                </li>
                                <li className="page-item">
                                  <button
                                    className="page-link"
                                    id = {"plus"+index}
                                    onClick={() => this.updatequantity(
                                      index,
                                      true,
                                      item.slug,
                                      item.product_quantity,
                                    )}
                                  >
                                    {" "}
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 d-flex justify-content-end price_money">
                              <h3>
                                Rs. <span id="itemval">{item.price}</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">The Total Amount Of</h2>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Product amount</p>
                    <p>
                      Rs. <span id="product_total_amt">{()=> this.totalPrice()}</span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      Rs. <span id="shipping_charge">50.0</span>
                    </p>
                  </div>
                  <hr />
                  <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      Rs. <span id="total_cart_amt">0.00</span>
                    </p>
                  </div>
                  <button className="btn btn-primary text-uppercase" onClick={()=>{window.location.href="/shipping"}}>
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

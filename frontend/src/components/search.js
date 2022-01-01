import React, { Component } from "react";

export default class Searched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  getProducts() {
    fetch(window.location.href.replace(/search/, "api/search"), {method: "GET",})
      .then((response) => {
        return response.ok ? response.json() : [];
      })
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  sort(query) {
    var curr_query = window.location.href;
    curr_query.search("&sort") == -1
      ? (window.location.href = curr_query + "&sort=" + query)
      : (window.location.href = curr_query.replace(/(#|)&sort=(name|date|priceh|pricel)/, "&sort=" + query));
  }

  price() {
    console.log("hello");
    var price_min = document.getElementById("min-price").value;
    var price_max = document.getElementById("max-price").value;
    if (!price_min) price_min = 0;
    if (!price_max) price_max = 10000000;
    var curr_query = window.location.href;
    if (curr_query.search("&price") == -1) {
      window.location.href = curr_query + "&price=" + price_min + "+" + price_max;
    } else {
      window.location.href = curr_query.replace(/(#|)price=\d*\+\d*/, "price=" + price_min + "+" + price_max);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 mt-4">
            <h5>{"PRICE"}</h5>
            <p>{"Choose a price range below"}</p>
            <input
              type="number"
              id="min-price"
              className="form-group"
              size="8"
              placeholder="min"
            />
            {"to"}
            <input
              type="number"
              id="max-price"
              placeholder="max"
              className="form-group"
              size="8"
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "60px" }}
            >
              {"Apply"}
            </button>
          </div>
          <div className="col-9 my-4">
            <div className="row">
              <span style={{ fontSize: "22px" }}>{"Sort By:"}</span>
              <div className="dropdown" style={{ display: "inline-block" }}>
                <button
                  style={{ background: "transparent", color: "#000000" }}
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {"Name"}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item" onClick={this.sort.bind(this, "name")}>
                    {"Name"}
                  </button>
                  <button className="dropdown-item" onClick={this.sort.bind(this, "date")}>
                    {"Date"}
                  </button>
                  <button className="dropdown-item" onClick={this.sort.bind(this, "priceh")}>
                    {"Price-High"}
                  </button>
                  <button className="dropdown-item" onClick={this.sort.bind(this, "pricel")}>
                    {"Price-Low"}
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.state.products.map((item, index) => (
                  <Product
                    key={index}
                    slug={item.slug}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    created={item.created}
                  />
                ))}
                {!this.state.products.length && (
                  <h4 style={{ color: "#A52A2A" }}>{"No Results Found"}</h4>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <a className="ad-box" href={"/ad/" + this.props.slug}>
        <div className="card mb-3" style={{ maxWidth: "700px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="ad img-fluid" src={this.props.image} alt={this.props.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <h6 className="price" style={{ color: "#FFC107" }}>{this.props.price}</h6>
                <p className="card-text">{this.props.description}</p>
                <p className="card-text">
                  <small className="text-muted">{this.props.created}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

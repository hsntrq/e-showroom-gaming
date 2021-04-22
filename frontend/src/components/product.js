import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.productSlug = this.props.match.params.productSlug;
    this.getProduct();
  }

  getProduct(){
    fetch("/api/product/?slug="+this.productSlug, {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        product: data
      });
    });
  }

  render() {
    return (
      <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{width: "100%", height: "100%", padding: "15px"}}>
            <div className="d-flex">
              <img className="img-responsive center-block" src={this.state.product.image} style={{width: "100%", borderRadius: "10px 10px 0 0"}}/>
            </div>
            <button className="btn btn-info btn-block" type="button" style={{width: "100%", borderRadius: "0 0 10px 10px"}}>
              CHAT WITH SELLER
            </button>
          </div>
          <div className="col-md-6 align-self-center" style={{padding: "15px"}}>
            <div style={{padding: "5% 4%", borderRadius: "10px", background: "#e4e4e4"}}>
              <h2 id="title" className="p-info text-center" style={{fontSize: "38px"}}>
                {this.state.product.name}
              </h2>
              <h3 id="location" className="p-info">
                Category: {this.state.product.category}
              </h3>
              <h3 id="brand" className="p-info">Brand: {this.state.product.brand}</h3>
              <h3 id="cond" className="p-info">
                Condition: {this.state.product.condition}
              </h3>
              <h3 id="date" className="p-info">
                Posted at: {this.state.product.created}
              </h3>
              <h3 className="text-warning p-info" id="price">
                Price: {this.state.product.price}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              style={{
                padding: "1rem 1rem",
                width: "auto",
                margin: "1rem 0",
                fontSize: "17px",
                background: "#d3e0ea",
                borderRadius: "10px"
              }}
            >
              <h3 className="text-left">Description:</h3>
              <p className="text-left">{this.state.product.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              style={{
                padding: "1rem 1rem",
                width: "auto",
                margin: "1rem 0",
                fontSize: "17px",
                background: "#3a75c4",
                borderRadius: "10px",
                height: "auto"
              }}
            >
              <h3 className="text-left">Seller Info:</h3>
              <p className="text-left d-inline-flex float-right" style={{width: "78%"}}>
                {this.state.product.owner}<br />
                Phone number : xxxx-xxxxxxx <br />
                email address : ''''@''''''.''''
              </p>
              <div style={{width: "20%"}}>
                <img
                  src="/static/assets/img/testimonials-2.jpg"
                  style={{width: "100%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
    );
  }
}
import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  getProducts() {
    fetch("/api/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <section className="text-center">
          <h1>{'PRODUCT CATALOG'}</h1>
          <div className="container-fluid">
            <div className="row" style={{ margin: "0 3%" }}>
              {this.state.products.map((item, index) => (
                <Product
                  key={index}
                  slug={item.slug}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  featured={item.featured}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <a className="ad-box" href={"/ad/" + this.props.slug}>
          <div className="mx-auto mb-5 mb-lg-3">
            <div style={{ height: "240px" }}>
              <img
                className="ad"
                src={this.props.image}
                alt={this.props.name}
                style={{
                  margin: "10px 0",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
              <span className="badge badge-warning">{this.props.price}</span>
            </div>
            <h3 style={{ margin: "20px 0 0" }}>{this.props.name}</h3>
          </div>
        </a>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header
        className="text-center text-white masthead"
        style={{
          backgroundImage: "url(/static/assets/img/banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">{'What are you looking for?'}</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form method="GET" action="/search">
                <div className="form-row">
                  <div className="col-10 mb-2 mb-md-0">
                    <input
                      id="searchval"
                      className="form-control form-control-lg"
                      type="search"
                      name="q"
                      placeholder="Find Games Here..."
                      required
                    />
                  </div>
                  <div className="col-2 col-xl-2">
                    <button
                      className="btn btn-primary btn-block btn-lg float-right"
                      type="submit"
                      style={{ width: "100px", padding: "auto" }}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
    this.getProducts();
  }

  getProducts(){
    fetch("/api/products")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        products: data
      });
    });
  }

  renderProducts() {

  }

  render() {
    return (
    <div>
        <header class="text-center text-white masthead" style="background: url({%static 'assets/img/banner.jpg'%}) no-repeat center center; background-size: cover;">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                <div class="col-xl-9 mx-auto">
                    <h1 class="mb-5">WHAT ARE YOU LOOKING FOR?</h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <form method="GET" action="{% url 'api:search' %}">
                    <div class="form-row">
                        <div class="col-10 mb-2 mb-md-0">
                        <input
                            class="form-control form-control-lg"
                            type="search"
                            name="q"
                            placeholder="Find Games Here..."
                            required
                        />
                        </div>
                        <div class="col-2 col-xl-2">
                        <button
                            class="btn btn-primary btn-block btn-lg float-right"
                            type="submit"
                            style="width: 100px; padding: auto"
                        >
                            <i class="fa fa-search"></i>
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </header>
        <section class="text-center">
            <h1>PRODUCT CATALOG</h1>
            <div class="container-fluid">
                <div class="row" style="margin: 0 3%">
                {products.map(item => <Product slug={item.slug} image={item.image} />)}
                </div>
            </div>
        </section>
    </div>

    );
  }
}

class Product extends React.Component {
    render() {
      return <li>{this.props.slug + " - " + this.props.image}</li>;
    }
  }

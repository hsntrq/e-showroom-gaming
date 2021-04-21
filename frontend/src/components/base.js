import React, { Component } from "react";

export class Navbar extends Component {
  render() 
  {
    return  (
      <nav className="navbar navbar-light navbar-expand sticky-top navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/static/assets/img/logo.png" alt="RIGGED logo" style={{height: "50px"}}/>
          </a>
          <div className="dropdown" style={{marginRight: "auto"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Categories
            </button>
            <ul className="dropdown-menu" name="category" style={{marginBottom: "5px"}} aria-labelledby="dropdownMenuButton">
              {this.props.categories.map((item, index) => (
                <Category key={index} category={item.category_name}/>
              ))}
            </ul>
          </div>
          {window.location.href.search('home')==-1 &&
          <form id="searchbar" className="input-group" method="GET" action="/search" style={{width: "30%"}}>
            <input type="text" aria-label="First name" className="form-control" placeholder="What are you looking for..." name="q" required/>
            <div className="input-group-prepend" style={{cursor: "pointer"}}>
              <button type="submit" className="input-group-text">Search</button>
            </div>
          </form>
          }
          <a className="btn btn-primary ml-auto nav-b" role="button" id="login-b">Log In | Sign Up</a>
          {window.location.href.search('post')==-1 && <a className="btn btn-primary nav-b" role="button" id="post-ad" href="/post">Post Ad</a>}
        </div>
      </nav>
    )
  }
}

class Category extends Component{
  render () {
    return (
      <li>
        <a className="dropdown-item" href={"/search?category=" + this.props.category}>
          {this.props.category}
        </a>
      </li>
    );
  }
}



export class Footer extends Component {
  render() 
  {
    return  (
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left my-auto h-100">
            <ul className="list-inline mb-2">
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item"><a href="#">Contact</a></li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item">
                <a href="#">Terms of &nbsp;Use</a>
              </li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              © Brand 2021. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-right my-auto h-100">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#"><i className="fa fa-facebook fa-2x fa-fw"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fa fa-twitter fa-2x fa-fw"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fa fa-instagram fa-2x fa-fw"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
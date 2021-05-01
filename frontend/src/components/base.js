import React, { Component } from "react";

export class Navbar extends Component {
  render() 
  {
    return  (
      <>
      <nav className="navbar navbar-light navbar-expand sticky-top navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/static/assets/img/logo.png" alt="RIGGED logo" style={{height: "50px"}}/>
          </a>
          <div className="dropdown" style={{marginRight: "auto"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Categories
            </button>
            <form id="category_menu" method="GET" action="{% url 'api:search' %}">
              <ul className="dropdown-menu" name="category" style={{marginBottom: "5px"}} aria-labelledby="dropdownMenuButton">
                {/* <li>
                  <a
                    className="dropdown-item"
                    href="/api/search?category={{category.category_name}}"
                  >
                    {{category.category_name}}
                  </a>
                </li>
                {% endfor %} */}
              </ul>
            </form>
          </div>
          <form id="searchbar" className="input-group" method="GET" action="/search" style={{width: "30%"}}>
            <input type="text" aria-label="First name" className="form-control" placeholder="What are you looking for..." name="q" required/>
            <div className="input-group-prepend" style={{cursor: "pointer"}}>
              <button type="submit" className="input-group-text">Search</button>
            </div>
          </form>
  
          <a className="btn btn-primary ml-auto nav-b" href role="button" id="login-b" data-toggle="modal" data-target="#loginModal">Log In</a>
          <a className="btn btn-primary nav-b" href role="button" id="signup-b" data-toggle="modal" data-target="#exampleModal">Sign Up</a>
          <a className="btn btn-primary nav-b" role="button" id="post-ad" href="/post">Post Ad</a>
        </div>
      </nav>

      <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-row">
            <div className="form-group col-sm-4">
              <label className="sr-only" htmlFor="usrname">User Name</label>
              <input type="text" className="form-control form-control-sm mr-1" id="usr-name" placeholder="Enter User Name" />
            </div>
            <div className="form-group col-sm-4">
              <label className="sr-only" htmlFor="usrpwd">Password</label>
              <input type="password" className="form-control form-control-sm mr-1" id="usr-pwd" placeholder="Enter Password" />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe"/>
              <label class="form-check-label" for="rememberMe">
                Remember Me
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Login</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <form>
        <div className="form-row">
          <div className="form-group col-sm-4">
            <label className="sr-only" htmlFor="usrname">User Name</label>
            <input type="text" className="form-control form-control-sm mr-1" id="usr-name" placeholder="Enter User Name" />
          </div>
          <div className="form-group col-sm-4">
            <label className="sr-only" htmlFor="usrpwd">Password</label>
            <input type="password" className="form-control form-control-sm mr-1" id="usr-pwd" placeholder="Enter Password" />
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="rememberMe"/>
            <label class="form-check-label" for="rememberMe">
              Remember Me
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
      </>
    )
  }
}


export class LoggedInNavbar extends Component {
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
            <form id="category_menu" method="GET" action="{% url 'api:search' %}">
              <ul className="dropdown-menu" name="category" style={{marginBottom: "5px"}} aria-labelledby="dropdownMenuButton">
                {/* <li>
                  <a
                    className="dropdown-item"
                    href="/api/search?category={{category.category_name}}"
                  >
                    {{category.category_name}}
                  </a>
                </li>
                {% endfor %} */}
              </ul>
            </form>
          </div>
          <form id="searchbar" className="input-group" method="GET" action="/search" style={{width: "30%"}}>
            <input type="text" aria-label="First name" className="form-control" placeholder="What are you looking for..." name="q" required/>
            <div className="input-group-prepend" style={{cursor: "pointer"}}>
              <button type="submit" className="input-group-text">Search</button>
            </div>
          </form>
        {/* <a className="btn btn-primary ml-auto nav-b" href role="button" id="login-b" data-toggle="modal" data-target="#loginModal">Log In</a>
          <a className="btn btn-primary nav-b" href role="button" id="signup-b" data-toggle="modal" data-target="#exampleModal">Sign Up</a> */}
          <a className="btn btn-primary ml-auto nav-b" role="button" id="post-add" href="/post">Post Ad</a>
          <div className="dropdown" >
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton profile" style={{backgroundColor: 'transparent', border: 'none', }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png" className="img-fluid" alt="*" style={{borderRadius: '50%', height: '37px', width: '40px'}} />
            </button>
            <form id="category_menu" method="GET" action="{% url 'api:search' %}">
              <ul className="dropdown-menu" name="category" style={{marginBottom: "5px"}} aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item"> View My Profile </li>
                <li className="dropdown-item"> Logout </li>

                {/* <li>
                  <a
                    className="dropdown-item"
                    href="/api/search?category={{category.category_name}}"
                  >
                    {{category.category_name}}
                  </a>
                </li>
                {% endfor %} */}
              </ul>
            </form>
          </div>

          <div className="nav-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYGNF0Lv85kivjrD7rl65B9DhEVvbOzRjVg&usqp=CAU" className="img-fluid" alt="*" style={{borderRadius: '50%', height: '37px', width: '40px'}} />
          </div>

        </div>
      </nav>
    )
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
              <li className="list-inline-item"><a href>About</a></li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item"><a href>Contact</a></li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item">
                <a href>Terms of &nbsp;Use</a>
              </li>
              <li className="list-inline-item"><span>⋅</span></li>
              <li className="list-inline-item"><a href>Privacy Policy</a></li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              © Brand 2021. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-right my-auto h-100">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href><i className="fa fa-facebook fa-2x fa-fw"></i></a>
              </li>
              <li className="list-inline-item">
                <a href><i className="fa fa-twitter fa-2x fa-fw"></i></a>
              </li>
              <li className="list-inline-item">
                <a href><i className="fa fa-instagram fa-2x fa-fw"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
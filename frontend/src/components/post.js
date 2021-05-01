import React, { Component } from "react";


 
export default class Post extends Component{

    constructor(props) {
    super(props);
    this.state = {
        check : false
    };


    // $("#post-ad").css("display", "none");
    document.getElementById('post-ad').style.display = 'none';
    document.getElementById('feature-c').checked = false;
    // $("#feature-c").prop("checked", false);
    // checkfeature();

    // this.postProduct();
    }

    checkfeature() {
        if (this.state.check) {
            document.getElementById('feature-block').style.display = 'block';
            // $("#feature-block").css("display", "block");
        } else {
            document.getElementById('feature-block').style.display = 'none';
        //   $("#feature-block").css("display", "none");
        //   $("#pkg4").prop("checked", true);
          document.getElementById('pkg4').checked = false;
        }
      }
   

    getCategories(){

    }
    postProduct(){
        fetch("/api/post", {method: "POST"})
        .then((response) =>  response.json())
        .then((data) => {
            this.setState({
                post_product: data
            });
        });
    }

    render() {       
        return(
            <section className="text-center" style={{background: "#ffffff"}}>
            <div className="container" style={{borderRadius: "8px", padding: "10px", width: "auto"}}>
    <h2 id="postH" className="text-left" style={{paddingLeft: "12px"}}>
        DETAILS OF YOUR PRODUCT:
    </h2>
    <form
        style={{background: "#f4f4f4", padding: "15px", borderRadius: "12px"}}
        method="POST"
        action="."
        encType="multipart/form-data"
    >
        {/* {% csrftoken %} */}
        <div className="form-row">
        <div className="col-sm-12 col-md-6">
            <label className="float-left" htmlFor="name">Ad Title: *&nbsp;</label>
            <input
            className="form-control"
            type="text"
            id="product_title"
            name="name"
            placeholder="Enter Product Title..."
            required
            />
        </div>
        <div className="col-sm-12 col-md-6">
            <label className="float-left" htmlFor="price">Set a Price: *</label>
            <input
            className="form-control"
            type="number"
            id="price"
            name="price"
            placeholder="Enter Price..."
            required
            />
        </div>
        <div className="col-sm-12 col-md-6" hidden>
            <label className="float-left" htmlFor="owner">Owner: *</label>
            <input
            className="form-control"
            value="HasanNaseem"
            type="text"
            name="owner"
            placeholder="Enter Your Name..."
            required
            />
        </div>
        </div>
        <div className="form-row">
        <div className="col-sm-12 col-md-6">
            <label className="float-left" htmlFor="brand">Brand: *&nbsp;</label>
            <input
            className="form-control"
            type="text"
            name="brand"
            placeholder="Enter the Brand of Your Product..."
            required
            />
        </div>
        <div className="col-sm-12 col-md-6">
            <label className="float-left" htmlFor="brand" style={{display: "block"}}
            >Condition: *&nbsp;</label
            >
            <div className="float-left" style={{paddingTop: "30px", paddingLeft: "60px"}}>
            <div className="form-check" style={{display: "inline"}}>
                <input
                type="radio"
                id="radio-1"
                className="form-check-input"
                name="condition"
                value="New"
                required
                />
                <label className="form-check-label" htmlFor="condition">New</label>
            </div>
            <div className="form-check" style={{display: "inline", paddingLeft: "60px"}}>
                <input
                type="radio"
                id="radio-2"
                className="form-check-input"
                name="condition"
                value="Used"
                />
                <label className="form-check-label" htmlFor="condition">Used</label>
            </div>
            </div>
        </div>
        </div>
        <div className="form-row">
        <div className="col-12">
            <label className="float-left" htmlFor="category">Categories: *&nbsp;</label>
            <select
            className="form-control"
            name="category"
            style={{marginBottom: "5px"}}
            // required
            >
            <option disabled hidden>
                Select a Category for Your Product Here...
            </option>
            {/* <ul>
            { for category in category_list
            <option value="{{category.id }}">{{category.category_name}}</option>
            endfor }
            </ul> */}
            
            </select>
        </div>
        </div>
        <div className="form-row">
        <div className="col-sm-12 col-md-6">
            <label className="float-left" htmlFor="description"
            >Description: *&nbsp;</label
            >
            <textarea
            className="form-control"
            name="description"
            placeholder="Enter Description of Your Product Here... (less than 500 characters)"
            style={{height: "200px"}}
            maxLength="500"
            required
            ></textarea>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="form-row">
            <div className="col-sm-12">
                <label className="col-form-label float-left" htmlFor="image"
                >Upload Photos:*</label
                >
            </div>
            <div className="col-sm-12">
                <div className="dashed_upload">
                <div className="wrapper">
                    <div className="drop">
                    <div className="cont">
                        <i className="fa fa-cloud-upload"></i>
                        <div className="tit">Drag & Drop</div>
                        <div className="desc">or</div>
                        <div className="browse">click here to browse</div>
                    </div>
                    <input
                        id="files"
                        name="image"
                        type="file"
                        accept="image/*"
                        required
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="form-row">
        <div className="col-12">
            <div className="form-check form-switch">
            <label className="float-left" htmlFor="feature-c"
                >Do You Want To Feature Your Ad?</label
            >
            <label className="switch float-left">
                <input
                className="form-check-input"
                id="feature-c"
                checked = {this.state.check}
                
                type="checkbox"
                onClick={this.checkfeature()}
                />
                <span className="slider round"></span>
            </label>
            </div>
        </div>
        </div>
        <div className="form-row" id="feature-block">
        <div className="form-group">
            <label className="float-left">Select Package:</label>
            <div className="form-check">
            <div className="form-check form-check-inline" style={{margin: "0 5%"}}>
                <input
                className="form-check-input"
                type="radio"
                name="featured"
                id="pkg1"
                value="a"
                />
                <label className="form-check-label" htmlFor="featured">1000 PKR</label>
            </div>
            <div className="form-check form-check-inline" style={{margin: "0 5%"}}>
                <input
                className="form-check-input"
                type="radio"
                name="featured"
                id="pkg2"
                value="b"
                />
                <label className="form-check-label" htmlFor="featured">2000 PKR</label>
            </div>
            <div className="form-check form-check-inline" style={{margin: "0 5%"}}>
                <input
                className="form-check-input"
                type="radio"
                name="featured"
                id="pkg3"
                value="c"
                />
                <label className="form-check-label" htmlFor="featured">5000 PKR</label>
            </div>
            <div
                className="form-check form-check-inline"
                style={{margin: "0 5%"}}
                hidden
            >
                <input
                className="form-check-input"
                type="radio"
                name="featured"
                id="pkg4"
                value="z"
                // checked
                // onChange={defaultChecked}
                />
            </div>
            </div>
        </div>
        </div>
        <div className="form-row">
        <div className="col">
            <input
            className="btn btn-primary"
            type="submit"
            value="POST"
            style={{marginTop: "10px", paddingRight: "60px", paddingLeft: "60px"}}
            />
        </div>
        </div>
    </form>
    </div>
            
        </section>
        );
    }

}


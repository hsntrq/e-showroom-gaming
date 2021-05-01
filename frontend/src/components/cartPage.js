import React from 'react';

export default function CartPage(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-7 mt-3">
                    <div className="card mb-1">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img className="ad img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&usqp=CAU" alt="*" />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body pb-0">
                                <h5 className="card-title">Title</h5>
                                <h6 className="price" style={{ color: "#FFC107" }}>99.9 </h6>
                                <p className="card-text mb-0">this is description of the product.....</p>
                                <br/>
                                <p className="mb-0">Seller Info:</p>
                                <p className="card-text mb-0"><small className="text-muted">2-4-20</small></p>
                                <div style={{float: 'right'}}>
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginRight: '10px'}}>-</span>1
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginLeft: '10px'}}>+</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img className="ad img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&usqp=CAU" alt="*" />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body pb-0">
                                <h5 className="card-title">Title</h5>
                                <h6 className="price" style={{ color: "#FFC107" }}>99.9 </h6>
                                <p className="card-text mb-0">this is description of the product.....</p>
                                <br/>
                                <p className="mb-0">Seller Info:</p>
                                <p className="card-text mb-0"><small className="text-muted">2-4-20</small></p>
                                <div style={{float: 'right'}}>
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginRight: '10px'}}>-</span>1
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginLeft: '10px'}}>+</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img className="ad img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&usqp=CAU" alt="*" />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body pb-0">
                                <h5 className="card-title">Title</h5>
                                <h6 className="price" style={{ color: "#FFC107" }}>99.9 </h6>
                                <p className="card-text mb-0">this is description of the product.....</p>
                                <br/>
                                <p className="mb-0">Seller Info:</p>
                                <p className="card-text mb-0"><small className="text-muted">2-4-20</small></p>
                                <div style={{float: 'right'}}>
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginRight: '10px'}}>-</span>1
                                    <span style={{fontWeight: 'bolder', fontSize: '24', marginLeft: '10px'}}>+</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{float: 'right'}}>Proceed to checkout</button>
                </div>
                <div className="col-5 mt-3 text-center">
                    <div style={{border: '1px solid', textAlign: 'center', width: '90%', marginLeft: 'auto'}}>
                        <h4 style={{marginBottom: '10px'}}>Total Cost</h4>
                        <p>1 x 1st item = 99.9$</p>
                        <p>1 x 2nd item = 99.9$</p>
                        <p>1 x 3rd item = 99.9$</p>
                        <br/>
                        <br/>
                        <br/>
                        <h5>Total Cost = 299.7$</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}
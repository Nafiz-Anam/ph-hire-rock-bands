import React from "react";
import "./CartItems.css";

// all the single cart item component 

const CartItems = (props) => {
    return (
        <div>
            <div className="row m-2 single-item">
                <div className="col-4 p-0">
                    <img className="cart-img" src={props.Image} alt="" />
                </div>
                <div className="col-8 single-item-img p-0">
                    <div className="col-9">
                        <h5 className="cart-title"><b>{props.Title}</b></h5>
                    </div>
                    <div className="col-3 text-center ">
                        <button className="btn btn-danger">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

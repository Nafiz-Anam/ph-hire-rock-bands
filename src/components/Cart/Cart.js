import React from "react";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

// side cart/choice details component

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const band of cart) {
        total = total + band.cost;
    }

    return (
        <div className="main-cart">
            <h2 className="text-center pb-2">Choice Details</h2>
            <hr className="mb-5" />
            <h5>
                Total Choice: <b>{props.cart.length} bands</b>
            </h5>
            <h5>
                Total Cost: <b>{total} TK</b>
            </h5>
            <div className="py-4">
                <h3>
                    <b>Selected Bands</b>
                </h3>
                <hr className="mb-4" />
                {/* calling the selected component to view selected bands */}
                {cart.map((band) => (
                    <CartItems
                        Title={band.title}
                        Image={band.img}
                        key={band.id}
                    />
                ))}
            </div>
            <button className="btn btn-success m-1">Finalize</button>
            <button className="btn btn-danger m-1">Clear All</button>
        </div>
    );
};

export default Cart;

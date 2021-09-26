import React, { useState } from "react";
import { bandTeams } from "../../data";
import Band from "../Band/Band";
import Cart from "../Cart/Cart";
import "./Bands.css";

const Bands = () => {
    const [cart, setCart] = useState([]);

    const handleChoice = (Band) => {
        if (!cart.includes(Band)) {
            const newCart = [...cart, Band];
            setCart(newCart);
        }
    };

    return (
        <div className="main">
            <div className="row">
                <div className="col-lg-9 py-5">
                    <div className="row all-bands gx-0">
                        {bandTeams.map((band) => (
                            <Band
                                Band={band}
                                key={band.id}
                                handleChoice={handleChoice}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-lg-3 py-5 px-3 cart-side">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Bands;

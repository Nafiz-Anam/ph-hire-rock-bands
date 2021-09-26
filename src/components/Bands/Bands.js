import React, { useState } from "react";
import { bandTeams } from "../../data";
import Band from "../Band/Band";
import Cart from "../Cart/Cart";
import "./Bands.css";

// all bands view component 

const Bands = () => {
    const [cart, setCart] = useState([]);

    // button click handler to add bands to choice 
    const handleChoice = (Band) => {
        // checking if the band already chosen or not 
        if (!cart.includes(Band)) {
            const newCart = [...cart, Band];
            setCart(newCart);
        }
    };

    return (
        <div className="main">
            <div className="row">
                {/* all band view component side  */}
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
                {/* cart component side  */}
                <div className="col-lg-3 py-5 px-3 cart-side">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Bands;

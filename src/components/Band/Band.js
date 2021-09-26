import React from "react";
import "./Band.css";

const Band = (props) => {
    const { title, img, leader, members, cost, type } = props.Band;
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body py-4">
                <h1 className="card-title"> {title}</h1>
                <h6>
                    Leader: <span>{leader}</span>
                </h6>
                <h6>
                    Type: <span>{type}</span>
                </h6>
                <h6>
                    Members: <span>{members}</span>
                </h6>
                <h6>
                    Cost: <span>{cost} TK</span>
                </h6>
                <button
                    className="btn btn-info m-1"
                    onClick={ () => props.handleChoice(props.Band)}
                >
                    <i className="fas fa-plus-circle"></i> Choose
                </button>
                <button href="" className="btn btn-warning m-1">
                    <i className="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    );
};

export default Band;

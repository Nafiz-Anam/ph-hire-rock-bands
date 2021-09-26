import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">
                        <img
                            src="https://i.ibb.co/BL6r8W9/Untitled-design-3.png"
                            alt="logo"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="./navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    Contact Us
                                </a>
                            </li>
                            <button className="btn btn-success m-1">
                                Log In <i className="fas fa-sign-in-alt"></i>
                            </button>
                            <button className="btn btn-info m-1">
                                Sign up <i className="fas fa-user-plus"></i>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

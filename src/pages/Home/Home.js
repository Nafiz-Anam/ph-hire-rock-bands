import React from "react";
import Bands from "../../components/Bands/Bands";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Bands />
            <Footer />
        </div>
    );
};

export default Home;

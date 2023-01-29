import React from "react";
import ProductsList from "../components/UserInterface/ProductsList";
import "../styles/home.css";
const Home = () => {
    return (
        <section className='ProductsList'>
            <h1>Products</h1>
            <ProductsList />
        </section>
    );
}

export default Home;

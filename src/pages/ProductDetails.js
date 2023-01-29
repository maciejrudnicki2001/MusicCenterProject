import React from "react";
import { useParams } from "react-router-dom";
import Products from "../assets/data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const product = Products.find((product) => product.id === id);
    return (
        <div>
            <h1>Product Details</h1>
            <p>{product.name}</p>
            <p>{product.cost_with_delivery}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetails;
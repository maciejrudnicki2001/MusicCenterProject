import React from "react";
import Product from "./Product.js";

const ProductsList = ({data}) => {
    return (
        <>
            {
                data.map((product) =>(
                    <Product item={product} />
                ))
            }
        </>


    );
}

export default ProductsList;
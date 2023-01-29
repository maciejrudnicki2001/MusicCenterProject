import React, {useState, useEffect} from "react";
import ProductsList from "../components/UserInterface/ProductsList";
import "../styles/home.css";
import products from "../assets/data/products";
const Home = () => {

    const [productsList, setProductsList] = useState(products);

    useEffect(() => {
            const sortedProducts = productsList.sort((a, b) => {
                    return a.cost_with_delivery - b.cost_with_delivery;
                }
            );
            setProductsList(sortedProducts);
        }
        , [] );

    return (
        <section className='ProductsList'>
            <h1>Products</h1>
            <ProductsList data={productsList}/>
        </section>
    );
}

export default Home;

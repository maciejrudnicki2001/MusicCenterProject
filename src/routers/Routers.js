import React from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
    return <Routes>
        <Route path="/MusicCenterProject/" element={<Home />} />
        <Route path="/MusicCenterProject/shop" element={<Shop />} />
        <Route path="/MusicCenterProject/cart" element={<Cart />} />
        <Route path="/MusicCenterProject/checkout" element={<Checkout />} />
        <Route path="/MusicCenterProject/product/:id" element={<ProductDetails />} />
    </Routes>
};

export default Routers;
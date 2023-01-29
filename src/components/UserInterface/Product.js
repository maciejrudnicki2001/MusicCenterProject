import React from "react";
import productImage from '../../assets/images/product_images/carter1.jpeg';
import { Col } from 'reactstrap';
import './Product.css';
const Product = () => {
    return (
        <Col lg="3" md="4" xs="6">
            <div className='product__item'>
                <div className='product__img'>
                    <img src={productImage} alt='product'/>
                </div>
                <h3 className='product__name'>Product Name</h3>
                <div className='product__short_description'>
                    <span>Short description</span>
                </div>
                <div className='product__cost_without'>
                    <span className='price_without_delivery'>200$</span>
                </div>
                <div className='product__cost_with'>
                    <span className='price_with_delivery'>250$</span>
                </div>
            </div>
        </Col>
    )
}

export default Product;

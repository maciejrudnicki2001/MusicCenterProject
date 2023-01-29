import React from "react";
import { Col } from 'reactstrap';
import './Product.css';
import { Link } from "react-router-dom";
const Product = ({item}) => {
    return (
        <Col lg="3" md="4" xs="6">
            <div className='product__item'>
                <div className='product__img'>
                    <img src={item.image} alt='product'/>
                </div>
                <h3 className='product__name'>
                    <Link to={`/MusicCenterProject/product/${item.id}`}>{item.name}</Link>
                </h3>
                <div className='product__short_description'>
                    <span>{item.short_description}</span>
                </div>
                <div className={'product__amount'}>
                    <span>Amount: {item.amount}</span>
                </div>
                <div className='product__cost_without'>
                    <span className='price_without_delivery'>Cost with delivery: {item.cost_with_delivery} PLN</span>
                </div>
                <div className='product__cost_with'>
                    <span className='price_with_delivery'>Cost Without delivery: {item.cost_without_delivery} PLN</span>
                </div>
            </div>
        </Col>
    )
}

export default Product;

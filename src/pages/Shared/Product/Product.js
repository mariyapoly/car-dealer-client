import React from 'react';
import { Col } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, des, price } = product;

    return (
        <Col lg={3}>
            <div className="single-products">
                <img src={img} alt="" />
                <div className="product-des">
                    <h5>{name}</h5>
                    <p>{des.slice(0, 80)}</p>
                    <p className="price">{price}</p>
                    <button className="regular-btn">order now</button>
                </div>
            </div>
        </Col>
    );
};

export default Product;
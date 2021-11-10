import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, des, price, _id } = product;
    const history = useHistory();

    const handleOderBtn = () => {
        history.push(`/orderPurches/${_id}`)
    }

    return (
        <Col lg={3}>
            <div className="single-products">
                <img src={img} alt="" />
                <div className="product-des">
                    <h5>{name}</h5>
                    <p>{des.slice(0, 80)}</p>
                    <p className="price">{price}</p>
                    <button onClick={handleOderBtn} className="regular-btn">order now</button>
                </div>
            </div>
        </Col>
    );
};

export default Product;
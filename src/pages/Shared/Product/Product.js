import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css'

const Product = ({ product, handleDeleteBtn }) => {
    const { name, img, des, price, _id } = product;
    const history = useHistory();

    const handleOderBtn = () => {
        history.push(`/orderPurches/${_id}`)
    }

    return (
        <Col lg={4}>
            <div className="single-products">
                <img src={img} alt="" />
                <div className="product-des">
                    <div className="product-info">
                        <h5>{name}</h5>
                        <p>{des.slice(0, 80)}</p>
                        <p className="price">${price}</p>
                    </div>
                    <button onClick={handleOderBtn} className="regular-btn order-btn">order now</button>
                    <button onClick={() => handleDeleteBtn(_id)} className="regular-btn delete-btn">Delete Product</button>
                </div>
            </div>
        </Col>
    );
};

export default Product;
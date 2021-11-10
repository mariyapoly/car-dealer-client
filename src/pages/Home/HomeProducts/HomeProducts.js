import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import './HomeProducts.css';
const axios = require('axios');

const HomeProducts = () => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [])


    return (
        <div className="products-bg">
            <Container>
                <div className="section-title">
                    <span>Check out our recent cars</span>
                    <h2>FEATURE CAR</h2>
                </div>
                <Row>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProducts;
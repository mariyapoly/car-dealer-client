import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import './HomeProducts.css';
const axios = require('axios');

const HomeProducts = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/products')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [])


    return (
        // products-bg start
        <div className="products-bg">
            <Container>
                <div className="section-title">
                    <span>Check out our recent cars</span>
                    <h2>FEATURE CAR</h2>
                </div>
                {
                    products.length ? <Row>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}></Product>)
                        }
                    </Row> : <Spinner style={{ position: 'absolute', top: '75%', left: '50%' }} animation="border" variant="danger" />
                }
            </Container>
        </div>
        // products-bg end
    );
};

export default HomeProducts;
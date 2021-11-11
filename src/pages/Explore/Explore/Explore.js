import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../../Shared/Product/Product';

const Explore = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allProducts')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [])


    return (
        <>
            <Navigation></Navigation>
            <div>
                <Container>
                    <div className="section-title text-center">
                        <span>Check out our all cars</span>
                        <h2>EXPLORE CAR</h2>
                    </div>
                    {
                        products.length ? <Row>
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}></Product>)
                            }
                        </Row> : <Spinner style={{ position: 'absolute', top: '50%', left: '50%' }} animation="border" variant="danger" />
                    }

                </Container>
            </div>
        </>
    );
};

export default Explore;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../../Shared/Product/Product';
import './Explore.css'

const Explore = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/allProducts')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [])


    return (
        <>
            <Navigation></Navigation>
            {/* explore-products start */}
            <div className="explore-products">
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
            {/* explore-products end */}
            <Footer></Footer>
        </>
    );
};

export default Explore;
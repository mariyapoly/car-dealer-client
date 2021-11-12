import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import car1 from '../../../images/car1.png';
import car2 from '../../../images/car2.png';

const Banner = () => {
    return (
        // banner part start
        <div className="banner-part">
            <div className="overlay">
                <div className="banner-car">
                    <div className="car-1">
                        <img src={car1} alt="" />
                    </div>
                    <div className="car-2">
                        <img src={car2} alt="" />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="banner-container">
                                <h4>find the car at the</h4>
                                <h1>best price</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        // banner part end
    );
};

export default Banner;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-part">
            <div className="overlay">
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
    );
};

export default Banner;
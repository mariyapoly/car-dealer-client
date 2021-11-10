import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomeService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faFan, faGasPump, faCarSide, faCarAlt } from '@fortawesome/free-solid-svg-icons';
import { faKeycdn } from '@fortawesome/free-brands-svg-icons';
import car from '../../../images/singleCar.png';
import './HomeService.css'


const HomeService = () => {
    return (
        <div className="service-area">
            <Container>
                <Row className="align-items-center">
                    <Col lg={4}>
                        <div className="sevice-content-left">
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faCar} />
                                <h5>SUPER FAST</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faCarSide} />
                                <h5>AFFORDABLE</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faGasPump} />
                                <h5>OIL CHANGES</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="car-img">
                            <img src={car} alt="" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="sevice-content-right">
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faFan} />
                                <h5>AIR CONDITIONING</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faCarAlt} />
                                <h5>TRANSMISSION</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                            <div className="sevice-wrapper">
                                <FontAwesomeIcon className="service-icon" icon={faKeycdn} />
                                <h5>DEALERSHIP</h5>
                                <p>We provide best quality you need to build an Amazing dealership website developed</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeService;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faComments } from '@fortawesome/free-regular-svg-icons';
import CountUp from 'react-countup';
import './HomeAbout.css';


const HomeAbout = () => {
    return (
        // about area start
        <div className="about-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-container">
                            <div className="section-title">
                                <span>Build an amazing dealership website</span>
                                <h2>ABOUT CARDEALER</h2>
                            </div>
                            <p className="about-text">Car Dealer is the best Premium WordPress Theme. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers</p>
                            <div>
                                <div className="d-flex">
                                    <div className="about-counter mr">
                                        <h4>VEHICLES IN STOCK</h4>
                                        <span><FontAwesomeIcon icon={faCar} /> <CountUp
                                            duration={5}
                                            delay={2}
                                            start={0}
                                            end={561}
                                        />
                                        </span>
                                    </div>
                                    <div className="about-counter">
                                        <h4>DEALER REVIEWS</h4>
                                        <span><FontAwesomeIcon icon={faComments} /> <CountUp
                                            duration={5}
                                            delay={2}
                                            start={0}
                                            end={856}
                                        />
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="about-counter mr">
                                        <h4>HAPPY CUSTOMERS</h4>
                                        <span><FontAwesomeIcon icon={faUserCircle} /> <CountUp
                                            duration={5}
                                            delay={2}
                                            start={0}
                                            end={789}
                                        />
                                        </span>
                                    </div>
                                    <div className="about-counter">
                                        <h4>AWARDS</h4>
                                        <span><FontAwesomeIcon icon={faTrophy} /> <CountUp
                                            duration={5}
                                            delay={2}
                                            start={0}
                                            end={356}
                                        />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // about area end
    );
};

export default HomeAbout;
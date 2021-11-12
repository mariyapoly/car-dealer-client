import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faCalendarAlt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../images/footer-img-1.png';
import img2 from '../../../images/footer-img-2.png';
import './Footer.css'


const Footer = () => {
    return (
        <>
            {/* footer start */}
            <div className="footer">
                <div className="overlay">
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <div className="footer-widget">
                                    <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
                                    <ul>
                                        <li><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt} /> 220E Front St. Burlington NC 27215</li>
                                        <li><FontAwesomeIcon className="footer-icon" icon={faPhone} /> (007) 123 456 7890</li>
                                        <li><FontAwesomeIcon className="footer-icon" icon={faEnvelope} /> car@delear.com</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="footer-widget">
                                    <h6>USEFUL LINKS</h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /> Change Oil and Filter</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /> Brake Pads Replacement</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /> Timing Belt Replacement</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /> Pre-purchase Car Inspection</li>
                                        <li><FontAwesomeIcon icon={faAngleDoubleRight} /> Starter Replacement</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="footer-widget">
                                    <h6>RECENT POSTS</h6>
                                    <div className="recent-post">
                                        <img src={img1} alt="img1" />
                                        <div>
                                            <p>Buy your dream car</p>
                                            <p><FontAwesomeIcon className="footer-icon" icon={faCalendarAlt} />  May 17, 2021</p>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <img src={img2} alt="img2" />
                                        <div>
                                            <p>Buy your dream car</p>
                                            <p><FontAwesomeIcon className="footer-icon" icon={faCalendarAlt} />  May 17, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="footer-widget">
                                    <h6>SUBSCRIBE OUR NEWSLETTER</h6>
                                    <p>Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
                                    <input type="email" placeholder="Enter Your Email" />
                                    <button className="regular-btn">subscribe</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* footer start */}
            {/* copyright start */}
            <div className="copyright">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <p>&Copy;Copyright 2021 Car Dealer</p>
                        </Col>
                        <Col lg={6}>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* copyright end */}
        </>
    );
};

export default Footer;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="pagenot-found">
                <Container>
                    <Row>
                        <h1>404</h1>
                        <h3>Whoops! This Page Does Not Exist</h3>
                        <p>We can't seem to find the page that you're looking for, the link <br />you followed might have been broken, it is temporarily unavailable.<br /> or it appears the website address you entered was incorrect.</p>
                        <Link to="/home">
                            <button className="regular-btn">Back To Home</button>
                        </Link>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default NotFound;
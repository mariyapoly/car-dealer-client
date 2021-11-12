import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './CustomerReview.css'

const CustomerReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/reviews')
            .then(function (response) {
                setReviews(response.data);
            })
    }, [])

    return (
        // rebiew area start
        <div className="review-area">
            <Container>
                <div className="section-title text-center">
                    <span>What Our Happy Clients say about us</span>
                    <h2>OUR TESTIMONIAL</h2>
                </div>
                <Row>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}></Review>)
                    }
                </Row>
            </Container>
        </div>
        // rebiew area end
    );
};

export default CustomerReview;
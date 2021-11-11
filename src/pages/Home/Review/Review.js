import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import './Review.css'


const Review = ({ review }) => {

    const { name, des, email, img, role, rating } = review;

    return (
        <Col lg={6}>
            <div className="simgle-review">
                <div className="review-message">
                    <FontAwesomeIcon className="qoute" icon={faQuoteLeft} />
                    <p>{des}</p>
                </div>
                <div className="customer-info d-flex align-items-center">
                    <img src={img} alt="" />
                    <div>
                        <div className=" d-flex">
                            <p className="cutomer-name">{name}</p>
                            <p className="cutomer-role">{role}</p>
                        </div>
                        <p>{email}</p>
                        <ReactStars
                            count={Number(rating)}
                            value={Number(rating)}
                            isHalf={true}
                            edit={false}
                            size={24}
                            color="#666"
                        />
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Review;
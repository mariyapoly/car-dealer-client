import React from 'react';
import { Col } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Team = ({ team }) => {

    const { img, name, role } = team;

    return (
        <Col lg={3}>
            <div className="single-team">
                <div className="team-thumb">
                    <img src={img} alt="" />
                    <div className="social-link">
                        <div className="social-icon icon-1">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="social-icon icon-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="social-icon icon-3">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </div>
                        <div className="social-icon icon-4">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h6>{name}</h6>
                    <p>{role}</p>
                </div>
            </div>
        </Col>
    );
};

export default Team;
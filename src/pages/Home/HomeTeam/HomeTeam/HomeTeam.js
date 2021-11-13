import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const HomeTeam = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/team')
            .then(function (response) {
                setTeams(response.data);
            })
    }, [])

    return (
        <div className="team-part">
            <Container>
                <div className="section-title text-center">
                    <span>List of people who matter in our Company</span>
                    <h2>OUR EXPERT TEAM</h2>
                </div>
                <Row>
                    {
                        teams.map(team => <Team
                            key={team._id}
                            team={team}></Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeTeam;
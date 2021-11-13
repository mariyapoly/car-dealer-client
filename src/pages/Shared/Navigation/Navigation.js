import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';


const Navigation = () => {

    const { user, logOut, setUser } = useAuth();

    const handlelgOut = () => {
        logOut()
            .then(() => {
                setUser({})
            }).catch((error) => {
            });
    }

    return (
        // navigation start
        <Navbar expand="lg">
            <Container>
                <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink to="/explore" activeClassName="selected">Explore</NavLink>
                        {
                            user.email ? <>
                                <NavLink to="/dashBoard" activeClassName="selected">Dashboard</NavLink>
                                <button className="logout-btn" onClick={handlelgOut}>Logout</button>
                                <span className="user-name">{user.displayName}</span>
                            </>
                                : <NavLink to="/login" activeClassName="selected">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // navigation end
    );
};

export default Navigation;
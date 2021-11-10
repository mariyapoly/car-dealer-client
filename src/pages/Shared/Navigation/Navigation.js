import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Navigation.css';


const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar expand="lg">
            <Container>
                <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink to="/explore" activeClassName="selected">Explore</NavLink>
                        {
                            user.email ? <button onClick={logOut}>Logout</button> : <NavLink to="/login" activeClassName="selected">Login</NavLink>
                        }

                        <NavLink to="/register" activeClassName="selected">Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
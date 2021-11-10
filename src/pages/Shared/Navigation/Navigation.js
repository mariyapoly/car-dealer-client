import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink to="/about" activeClassName="selected">about</NavLink>
                        <NavLink to="/service" activeClassName="selected">service</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
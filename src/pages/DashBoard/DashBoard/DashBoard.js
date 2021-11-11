import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import './DashBoard.css'
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();

    return (
        <div className="dashboard-area">
            <Container fluid className="ps-0">
                <Row className="p-0">
                    <Col lg={2} className="p-0">
                        <div className="side-navbar">
                            <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                            <NavLink to={`${url}`} activeClassName="selected">Pay</NavLink>
                            <NavLink to={`${url}/myOrders`} activeClassName="selected">My Orders</NavLink>
                            <NavLink to={`${url}/review`} activeClassName="selected">Review</NavLink>
                            <button onClick={logOut}>Logout</button>
                        </div>
                    </Col>
                    <Col lg={10} className="p-0">
                        <div className="dashbord-header">
                            <p>Dashboard</p>
                        </div>
                        <Switch>
                            <Route exact path={path}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;
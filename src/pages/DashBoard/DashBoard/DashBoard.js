import React, { useEffect, useState } from 'react';
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
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import axios from 'axios';

const DashBoard = () => {

    const [isAdmin, setIsAdmin] = useState(false)
    const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch();


    // cheack admin
    useEffect(() => {
        axios.get(`http://localhost:5000/makeAdmin/${user?.email}`)
            .then(function (response) {
                if (response.data.role === 'admin') {
                    setIsAdmin(true)
                }
            })
    }, [user.email])


    return (
        <div className="dashboard-area">
            <Container fluid className="ps-0">
                <Row className="p-0">
                    <Col lg={2} className="p-0">
                        <div className="side-navbar">
                            <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                            {
                                !isAdmin && <>
                                    <NavLink to={`${url}`} activeClassName="selected">Pay</NavLink>
                                    <NavLink to={`${url}/myOrders`} activeClassName="selected">My Orders</NavLink>
                                    <NavLink to={`${url}/review`} activeClassName="selected">Review</NavLink>
                                </>
                            }
                            {
                                isAdmin && <>
                                    <NavLink to={`${url}/manageAllOrders`} activeClassName="selected">Manage All Orders</NavLink>
                                    <NavLink to={`${url}/addAProducts`} activeClassName="selected">Add A Products</NavLink>
                                    <NavLink to={`${url}/makeAdmin`} activeClassName="selected">Make Admin</NavLink>
                                    <NavLink to={`${url}/manageProducts`} activeClassName="selected">Manage Products</NavLink>
                                </>
                            }

                            <button onClick={logOut}>Logout</button>
                        </div>
                    </Col>
                    <Col lg={10} className="p-0">
                        <div className="dashbord-header d-flex justify-content-between align-items-center">
                            <p>Dashboard</p>
                            <span>{user.displayName}</span>
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
                            <Route path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/addAProducts`}>
                                <AddProducts></AddProducts>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default DashBoard;
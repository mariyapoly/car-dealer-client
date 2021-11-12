import React, { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
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
import HomeDashBoard from './HomeDashBoard/HomeDashBoard';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DashBoard = () => {

    const { user, logOut, isAdmin } = useAuth();
    let { path, url } = useRouteMatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // dashboard-area start
        <div className="dashboard-area">
            <Container fluid className="ps-0">
                <Row className="p-0">
                    <Col lg={2} className="p-0">
                        <div className="side-navbar desktop">
                            <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                            <NavLink to={`${url}`}>home dashboard</NavLink>


                            {
                                user?.email && isAdmin ? <>
                                    <NavLink to={`${url}/manageAllOrders`} activeClassName="selected">Manage All Orders</NavLink>
                                    <NavLink to={`${url}/addAProducts`} activeClassName="selected">Add A Products</NavLink>
                                    <NavLink to={`${url}/makeAdmin`} activeClassName="selected">Make Admin</NavLink>
                                    <NavLink to={`${url}/manageProducts`} activeClassName="selected">Manage Products</NavLink>
                                </>
                                    : <>
                                        <NavLink to={`${url}/pay`} activeClassName="selected">Pay</NavLink>
                                        <NavLink to={`${url}/myOrders`} activeClassName="selected">My Orders</NavLink>
                                        <NavLink to={`${url}/review`} activeClassName="selected">Review</NavLink>
                                    </>
                            }

                            <button className="regular-btn" onClick={logOut}>Logout</button>
                        </div>
                    </Col>
                    <Col lg={10} className="p-0">

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <div className="side-navbar">
                                <Link to="/" className="logo"><span>Car</span> Dealer</Link>
                                <NavLink to={`${url}`}>home dashboard</NavLink>


                                {
                                    user?.email && isAdmin ? <>
                                        <NavLink to={`${url}/manageAllOrders`} activeClassName="selected">Manage All Orders</NavLink>
                                        <NavLink to={`${url}/addAProducts`} activeClassName="selected">Add A Products</NavLink>
                                        <NavLink to={`${url}/makeAdmin`} activeClassName="selected">Make Admin</NavLink>
                                        <NavLink to={`${url}/manageProducts`} activeClassName="selected">Manage Products</NavLink>
                                    </>
                                        : <>
                                            <NavLink to={`${url}/pay`} activeClassName="selected">Pay</NavLink>
                                            <NavLink to={`${url}/myOrders`} activeClassName="selected">My Orders</NavLink>
                                            <NavLink to={`${url}/review`} activeClassName="selected">Review</NavLink>
                                        </>
                                }

                                <button className="regular-btn" onClick={logOut}>Logout</button>
                            </div>
                        </Offcanvas>
                        <div className="dashbord-header d-flex justify-content-between align-items-center">
                            <Button className="dashboard-sm" onClick={handleShow}> <FontAwesomeIcon icon={faBars} />
                            </Button>
                            <p>Dashboard</p>
                            <span>{user.displayName}</span>
                        </div>
                        <Switch>
                            <Route exact path={path}>
                                <HomeDashBoard></HomeDashBoard>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addAProducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div >
        // dashboard-area start
    );
};

export default DashBoard;
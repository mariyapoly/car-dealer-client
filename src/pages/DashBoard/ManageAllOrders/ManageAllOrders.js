import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import Orderproduct from '../Orderproduct/Orderproduct';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [orderProdusts, setOrderProdusts] = useState([]);

    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/allorders')
            .then(function (response) {
                setOrderProdusts(response.data);
            })
    }, [orderProdusts])

    const cancelProducts = (id) => {
        swal({
            title: "Are you sure?",
            text: "delete this product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://cryptic-dawn-61240.herokuapp.com/orders/${id}`)
                        .then(function (response) {
                            if (response?.data?.deletedCount) {
                                swal("Your Order Canceled!", "", "success");
                            }
                        })

                } else {
                    swal("Your product is safe!");
                }
            });



    }

    const approvedProducts = (id) => {
        axios.put(`https://cryptic-dawn-61240.herokuapp.com/orders/${id}`)
            .then(function (response) {
                console.log(response.data)
                if (response?.data?.modifiedCount) {
                    swal({
                        title: "product shipped successfully",
                        icon: "success",
                    });
                }
            })
    }

    return (
        // mange-orders start
        <div className="mange-orders">
            <Container>
                <div className="section-title dashboard">
                    <h2>Manage All Orders</h2>
                </div>
                <Row>
                    <ul className="orders-list">
                        <li>products</li>
                        <li>address</li>
                        <li>email</li>
                        <li>name</li>
                        <li>phone</li>
                        <li>status</li>
                    </ul>
                    {
                        orderProdusts.map(order => <Orderproduct
                            key={order._id}
                            cancelProducts={cancelProducts}
                            approvedProducts={approvedProducts}
                            order={order}></Orderproduct>)
                    }
                </Row>
            </Container>
        </div>
        // mange-orders end
    );
};

export default ManageAllOrders;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Orderproduct from '../Orderproduct/Orderproduct';
import './MyOrders.css'
import swal from 'sweetalert';

const MyOrders = () => {

    const { user } = useAuth();
    const [orderProducts, setOrderProducts] = useState([])

    useEffect(() => {
        axios.get(`https://cryptic-dawn-61240.herokuapp.com/orders?email=${user.email}`)
            .then(function (response) {
                setOrderProducts(response.data);
            })
    }, [user.email, orderProducts])

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


    return (
        // orders start
        <div className="orders">
            <Container>
                <div className="section-title dashboard">
                    <h2>My Orders</h2>
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
                        orderProducts.map(order => <Orderproduct
                            key={order._id}
                            order={order}
                            cancelProducts={cancelProducts}
                        ></Orderproduct>)
                    }
                </Row>

            </Container>
        </div>
        // orders end
    );
};

export default MyOrders;
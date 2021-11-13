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
    }, [user.email])

    const cancelProducts = (id) => {
        axios.delete(`https://cryptic-dawn-61240.herokuapp.com/orders/${id}`)
            .then(function (response) {
                if (response?.data?.deletedCount) {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                const remainingOrders = orderProducts.filter(products => products._id !== id);
                                setOrderProducts(remainingOrders);
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });


                }
            })
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
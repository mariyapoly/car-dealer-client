import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Orderproduct from '../Orderproduct/Orderproduct';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [orderProdusts, setOrderProdusts] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/allorders')
            .then(function (response) {
                setOrderProdusts(response.data);
            })
    }, [isUpdate])

    const cancelProducts = (id) => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(function (response) {
                if (response?.data?.deletedCount) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Cancel this Product",
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your order product has been deleted',
                                'success'
                            )
                            const remainingOrders = orderProdusts.filter(products => products._id !== id);
                            setOrderProdusts(remainingOrders);
                        }
                    })
                }
            })
    }

    const approvedProducts = (id) => {
        axios.put(`http://localhost:5000/orders/${id}`)
            .then(function (response) {
                console.log(response.data)
                if (response?.data?.matchedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order Shipped successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setIsUpdate(true)
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
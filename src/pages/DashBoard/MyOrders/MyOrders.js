import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Orderproduct from '../Orderproduct/Orderproduct';

const MyOrders = () => {

    const { user } = useAuth();
    const [orderProducts, setOrderProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`)
            .then(function (response) {
                setOrderProducts(response.data);
            })
    }, [user.email])

    return (
        <div>
            <h1>my order</h1>
            {
                orderProducts.map(order => <Orderproduct
                    key={order._id}
                    order={order}
                ></Orderproduct>)
            }
        </div>
    );
};

export default MyOrders;
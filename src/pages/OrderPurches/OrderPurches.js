import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import './OrderPurches.css'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const OrderPurches = () => {

    const { user } = useAuth();
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const { name, des, img, price } = product;

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then(function (response) {
                setproduct(response.data)
            })
    }, [id])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/orders', {
            img: img,
            productName: name,
            price: price,
            name: data?.name,
            email: data?.email,
            address: data?.address,
            phone: data?.phone,
            status: 'pending'
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Car Order Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


    return (

        <>
            <Navigation></Navigation>
            <div className="product-details-area">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="product-details">
                                <h5>{name}</h5>
                                <img src={img} alt="" />
                                <span>{price}</span>
                                <p>{des}</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="place-order">
                                <h3>Order this Car</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input value={user.displayName} {...register("name")} />
                                    <input value={user.email} {...register("email")} />
                                    <input placeholder="Your Address" {...register("address")} />
                                    <input type="number" placeholder="Phone Number" {...register("phone")} />
                                    <input className="regular-btn" type="submit" value="Order Place" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default OrderPurches;
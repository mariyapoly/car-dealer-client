import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import './Review.css'

const Review = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://cryptic-dawn-61240.herokuapp.com/review', {
            des: data.des,
            email: data.email,
            name: data.name,
            img: data.img,
            role: data.role,
            rating: data.rating
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Customer Review Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })
    };

    return (
        // review form start
        <div className="review-form">
            <Container>
                <div className="section-title">
                    <h2>customer review</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input value={user.email} {...register("email")} />
                    <input value={user.displayName} {...register("name")} />
                    <input required placeholder="Role" {...register("role")} />
                    <input required placeholder="Rating" {...register("rating")} />
                    <input required className="img" placeholder="Image" {...register("img")} />
                    <textarea required placeholder="Description" {...register("des")} />
                    <input className="regular-btn" type="submit" value="submit" />
                </form>
            </Container>
        </div>
        // review form end
    );
};

export default Review;
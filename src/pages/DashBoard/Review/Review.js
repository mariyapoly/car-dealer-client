import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Review.css'

const Review = () => {

    const { user } = useAuth();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/review', {
            des: data.des,
            email: data.email,
            name: data.name,
            img: data.img,
            role: data.role,
            rating: data.rating
        })
            .then(function (response) {
            })
    };

    return (
        <div className="review-form">
            <div className="section-title">
                <h2>customer review</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={user.email} {...register("email")} />
                <input value={user.displayName} {...register("name")} />
                <input placeholder="Role" {...register("role")} />
                <input placeholder="Rating" {...register("rating")} />
                <input className="img" placeholder="Image" {...register("img")} />
                <textarea placeholder="Description" {...register("des")} />
                <input className="regular-btn" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Review;
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/UseAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'

const Register = () => {

    const { rigisterUser, user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        rigisterUser(data.email, data.password, data.name)
    };




    return (
        <>
            <Navigation></Navigation>
            <Container>
                <div className="input-field">
                    <p>{user.displayName}</p>
                    <h4>Register</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Your Name" {...register("name")} />
                        <input placeholder="Your Email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input placeholder="Password" {...register("password")} />
                        <input className="regular-btn" type="submit" />
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Register;
import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'

const Register = () => {

    const { rigisterUser, user, isLoading } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        rigisterUser(data.email, data.password, data.name, history)
    };




    return (
        <>
            <Navigation></Navigation>
            <Container>
                <div className="input-field">
                    <p>{user.displayName}</p>
                    <h4>Register</h4>
                    {
                        isLoading ? <Spinner animation="border" variant="danger" />
                            : <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Name" {...register("name")} />
                                <input placeholder="Your Email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <input placeholder="Password" {...register("password")} />
                                <input className="regular-btn" type="submit" value="Register" />
                            </form>
                    }
                </div>
            </Container>
        </>
    );
};

export default Register;
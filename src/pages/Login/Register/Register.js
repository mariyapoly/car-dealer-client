import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'

const Register = () => {

    const { rigisterUser, user, isLoading, error } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        rigisterUser(data.email, data.password, data.name, history)
    };




    return (
        <>
            <Navigation></Navigation>
            <Container>
                {/* input field start */}
                <div className="input-field">
                    <p>{user.displayName}</p>
                    <h4>Sign Up</h4>
                    <p>{error}</p>
                    {
                        isLoading ? <Spinner animation="border" variant="danger" />
                            : <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Name" {...register("name")} />
                                <input placeholder="Your Email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <input type="password" placeholder="Password" {...register("password")} />
                                <input className="regular-btn" type="submit" value="Sign Up" />
                                <p>Already have an account? <Link to="/login">Sign In</Link></p>
                            </form>
                    }
                </div>
                {/* input field end */}
            </Container>
        </>
    );
};

export default Register;
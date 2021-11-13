import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const { signInEmailPassword, isLoading, error } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInEmailPassword(data.email, data.password, location, history)
    };

    return (
        <>
            <Navigation></Navigation>
            <Container>
                {/* input field start */}
                <div className="input-field">
                    <h4>Sign In</h4>
                    {
                        isLoading ? <Spinner animation="border" variant="danger" /> :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>{error}</p>
                                <input placeholder="Your Email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <input type="password" placeholder="Password" {...register("password")} />
                                <input className="regular-btn" type="submit" value="Sign In" />
                                <p>Haven't account? <Link to="/register">Sign Up</Link></p>
                            </form>
                    }
                </div>
                {/* input field end */}
            </Container>
        </>
    );
};

export default Login;
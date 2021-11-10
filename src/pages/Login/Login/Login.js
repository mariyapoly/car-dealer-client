import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const { signInEmailPassword, user, isLoading } = useAuth();
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
                <div className="input-field">
                    <p>{user.displayName}</p>
                    <h4>Login</h4>
                    {
                        isLoading ? <Spinner animation="border" variant="danger" /> :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <input placeholder="Password" {...register("password")} />
                                <input className="regular-btn" type="submit" value="Login" />
                            </form>
                    }
                </div>
            </Container>
        </>
    );
};

export default Login;
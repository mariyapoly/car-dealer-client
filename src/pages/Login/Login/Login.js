import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/UseAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const { signInEmailPassword, user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInEmailPassword(data.email, data.password)
    };

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <div className="input-field">
                    <p>{user.displayName}</p>
                    <h4>Login</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

export default Login;
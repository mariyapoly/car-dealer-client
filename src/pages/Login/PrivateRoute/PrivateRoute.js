import React from 'react';
import useAuth from '../../../hooks/useAuth'
import {
    Route,
    Redirect,
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner style={{ position: 'absolute', top: '50%', left: '50%' }} animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
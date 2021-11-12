import React from 'react';
import useAuth from '../../../hooks/useAuth'
import {
    Route,
    Redirect,
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {

    const { user, isLoading, isAdmin } = useAuth();
    if (isLoading) {
        return <Spinner style={{ position: 'absolute', top: '50%', left: '50%' }} animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default AdminRoute;
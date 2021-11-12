import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import './HomeDashBoard.css'

const HomeDashBoard = () => {

    const { user } = useAuth();

    return (
        // dashboad-home start
        <div className="dashboad-home">
            <h1>Welcome {user?.displayName} to your Dashboard!</h1>
            <p>You Can Explore your data in your dashboard.</p>
        </div>
        // dashboad-home end
    );
};

export default HomeDashBoard;
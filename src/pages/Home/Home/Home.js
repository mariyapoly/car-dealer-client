import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
            <HomeProducts></HomeProducts>
        </>
    );
};

export default Home;
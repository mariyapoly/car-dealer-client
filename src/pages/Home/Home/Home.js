import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
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
            <CustomerReview></CustomerReview>
        </>
    );
};

export default Home;
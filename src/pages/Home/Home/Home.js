import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeService from '../HomeService/HomeService';
import HomeTeam from '../HomeTeam/HomeTeam/HomeTeam';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeService></HomeService>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <HomeTeam></HomeTeam>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </>
    );
};

export default Home;
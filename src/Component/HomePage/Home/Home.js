import React from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../Nav/NavBar';
import Banner from '../Banner/Banner';
import HomeContact from '../HomeContact';
import Intro from '../Intro/Intro';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';

import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <Intro></Intro>
         <Service></Service>
         <Skills></Skills>
         <Testimonial></Testimonial>
         <HomeContact></HomeContact>
        <div className="bg-dark text-light">
        <Footer></Footer>
        </div>
       </div>
    );
};

export default Home;
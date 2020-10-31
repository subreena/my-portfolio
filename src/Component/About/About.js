import React from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="about">
            <div className="container">
            <div className="text-center">
            <h2>About me</h2>
        <p>Hello I am Subreena. <br/>
        I am a Full stack web developer with skills of Reactjs, Node js, Mongo db, Express and many more.I am currently studying in 
        Noakhali Science and Technology University. I am completing my BSc. in Information and Communication Engineering. I am a curious Web Developer who is always eager to learn as mucha as possible with an experience of more than 3 years.

        
        </p>
        </div>
            </div>
        </div>
        <div className="bg-dark text-light">
        <Footer></Footer>
        </div>
        </>
    );
};

export default About;
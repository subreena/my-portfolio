import React from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import Particles from 'react-particles-js';
const About = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="about bg-dark text-light">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 10,
                                "random": true
                            },
                            "move": {
                                "direction": "bottom",
                                "out_mode": "out"
                            },
                            "line_linked": {
                                "enable": false
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "remove"
                                }
                            },
                            "modes": {
                                "remove": {
                                    "particles_nb": 10
                                }
                            }

                        }
                    }}
                    style={{ width: "100%", height: "100%", position: "absolute", top: "60px", left: "0", zIndex: '1' }} />

                <div className="container">
                    <div className="text-center p-5">
                        <h1>About me</h1>
                        <p>Hello I am Subreena. <br />
        I am a Full stack web developer with skills of Reactjs, Node js, Mongo db, Express and many more.I am currently studying in
        Noakhali Science and Technology University. I am completing my BSc. in Information and Communication Engineering. I am a curious Web Developer who is always eager to learn as much as possible with an experience of more than 3 years.
        </p>
        <div className="mt-4"  >
                 <div style={{zIndex: '2', position: 'relative'}}>
                 <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1IClmD6642OxGCwDYZSv1Y9VxtxPZNDjx/view?usp=sharing"
                     className="btn btn-lg btn-outline-light text-bold mr-3"
                    
                     >Check Out My Resume</a>
                 </div>
                     </div>
        
        <br/>
        <h2>My Skills</h2>
       <hr/>
       <br/>

                        <h4>
                           <strong>
                               Expertise:
                           </strong>
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> React js</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> Node js</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> Mongo db</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> Express</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> Material Ui</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> React-Bootstrap</span >
                           <span className="mr-1 ml-1 p-2 mt-1 badge badge-light"> JavaScript(ES6)</span >
                           <span className="mr-1 ml-1 mt-1 p-2 badge badge-light"> Bootstrap</span >
                           <span className="mr-1 ml-1 mt-1 p-2 badge badge-light"> CSS</span >
                           <span className="mr-1 ml-1 mt-1 p-2 badge badge-light"> Html</span >

                        </h4 >
                        <hr/>
                        <h4>
                            Familiar: 
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Gatsby JS</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Graphql</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Git</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Firebase</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Redux</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Wordpress</span >
                        </h4 >
                        <hr/>
                        <h4>
                            Tools: 
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Vs Code</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Sublime Text</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Figma</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Heroku</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Netlify</span >
                            <span className="mr-1 ml-1 p-2 badge badge-light"> Microsoft Office</span >
                        </h4 >
                    </div>
                </div>
            </div>
            <div className="bg-light text-dark">
                <Footer></Footer>
            </div>
        </>
    );
};

export default About;
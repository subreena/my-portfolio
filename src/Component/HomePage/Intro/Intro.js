import React from 'react';
import introImg from '../../../images/person_1.jpg'
import '../Intro/Intro.css'

const Intro = () => {
    return (
        <div className="container intro">
            <div className="row p-4">
                <div className="col-12 col-lg-6">
                    <img src={introImg} alt="" class="w-100" />
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                   <div className="intro-text m-3">
                   <h3>Hello! I am Subreena</h3>
                    <h2 className="text-muted">A Full-stack Web Developer and Designer</h2>
                    <p>I am a learning Web Developer and designer. I am very curious and am ambitiuos to polish my skills and learn new skills everyday.</p>
                    <p>I am a student at the department of Information and Communication Engineering in Noakhali Science and Technology. </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1IClmD6642OxGCwDYZSv1Y9VxtxPZNDjx/view?usp=sharing"
                     className="btn btn-lg btn-outline-dark text-bold mr-3">Check Out My Resume</a>
                   </div>
                   </div>
            </div>
        </div>
    );
};

export default Intro;
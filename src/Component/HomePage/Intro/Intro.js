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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque in, accusamus veniam pariatur porro laborum quod accusantium perferendis fugit eligendi ea, voluptas ratione?</p>
                    <p>Ibusdam nemo, eligendi modi, maiores pariatur excepturi incidunt deserunt voluptatibus praesentium aliquid qui voluptas accusantium dolorem eaque? Similique possimus excepturi neque delectus repellat, inventore vero id reiciendis. Possimus, est porro sequi in exercitationem iste animi reiciendis tenetur quisquam atque deleniti!</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1IClmD6642OxGCwDYZSv1Y9VxtxPZNDjx/view?usp=sharing"
                     className="btn btn-lg btn-outline-dark text-bold mr-3">Check Out My Resume</a>
                   </div>
                   </div>
            </div>
        </div>
    );
};

export default Intro;
import React from 'react';
import webDevImg from '../../images/How to be a Web Developer.png';
import JavaScript from '../../images/Untitled design.png';
import prb from '../../images/js-prb-solving.png';
import Particles from 'react-particles-js';
import '../Blog/Blog.css';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
const Blog = () => {
  return (
    <>
    <NavBar></NavBar>
      <div className="blog bg-dark">
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
                    style={{ width: "100%", height: "100%", position: "absolute", top: "60px", left: "0" }} />

        <div className="container">
          <h1 class="text-center m-3 text-light">My Blogs</h1>
          <p className="text-center mb-5 text-light" style={{position:"relative", zIndex:"2"}}>I wrote and published a few blogs in different websites. You can see all my blogs  <a className="text-light font-weight-bold" href="https://subreena20.medium.com/"> here</a> </p>
         

          <div className="card-deck">
          <div className="card">
              <img src={prb} className="card-img-top" alt="10 things I learned about JavaScript" />
              <div className="card-body">
                <h5 className="card-title">Problem Solving with JavaScript</h5>
                <p className="text-muted"><small> <i class="fa fa-user" aria-hidden="true"></i> Subreena  |  <i class="fa fa-calendar" aria-hidden="true"></i> Soon </small></p>
                <p className="card-text">
                Today I am going to focus on solving problems with JavaScript. I am going from easy to difficult. Problem solving with JavaScript is alot fun and can help you brain storm. I will be using ES6 for problem 
                </p>
                <a href="https://subreena20.medium.com/problem-solving-with-javascript-5a0b9a66a090"
                 className="btn  btn-outline-dark mt-2">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                 </a>
              </div>
            </div>
            <div className="card">
              <img src={webDevImg} className="card-img-top" alt="How to be a Full Stack Web Developer" />
              <div className="card-body">
                <h5 className="card-title">How to be a Full Stack Web Developer</h5>
                <p className="text-muted"><small> <i class="fa fa-user" aria-hidden="true"></i> Subreena  |  <i class="fa fa-calendar" aria-hidden="true"></i> October 20 </small></p>
                <p className="card-text">Web development is one of the most trending proffesions in this fast track century. It has so many amazing benefits that infact it lures people </p>
                <a href="https://medium.com/@subreena20/how-to-be-a-full-stack-web-developer-290ecab2c550"
                 className="btn btn-outline-dark mt-2">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                 </a>
              </div>
            </div>
            <div className="card">
              <img src={JavaScript} className="card-img-top" alt="10 things I learned about JavaScript" />
              <div className="card-body">
                <h5 className="card-title">10 things I learned about JavaScript</h5>
                <p className="text-muted"><small> <i class="fa fa-user" aria-hidden="true"></i> Subreena  |  <i class="fa fa-calendar" aria-hidden="true"></i> August 17 </small></p>
                <p className="card-text">Javascipt is a very hectic language to learn. It is very important for you if you want to be a web designer or a developer. I am still a learner a</p>
                <a href="https://medium.com/@subreena20/10-things-i-learned-about-javascript-2746570fa8d5"
                 className="btn  btn-outline-dark mt-2">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="bg-white">
     <Footer></Footer>
     </div>
    </>
  );
};

export default Blog;
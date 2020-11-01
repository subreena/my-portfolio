import React from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import WorkCarousel from './WorkCarousel';
import Particles from 'react-particles-js';
import './Works.css';
const Works = () => {
    return (
        <>
        <NavBar></NavBar>
        <hr/>
        <div className="work p-5">
       
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	         
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
	                    "height": 50,
	                    "width": 53
	                },
	                {
	                    "src": "https://th.bing.com/th/id/OIP.m5vNSaZ9WuNaD1R5uLQfwgHaHa?pid=Api&rs=1",
	                    "height": 40,
	                    "width": 40
	                },
	                {
	                    "src": "/code.b3b4c4f4.png",
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src": "/react.cd2ab268.svg",
	                    "height": 50,
	                    "width": 53
	                },
	                {
	                    "src": "/k8s.2d579d24.svg",
	                    "height": 50,
	                    "width": 50
                    },
                   
                    {
	                    "src": " https://th.bing.com/th/id/OIP.Nd1_xD8vKM9b4_yOd9XgNwAAAA?w=138&h=150&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                   
                    {
	                    "src": " https://th.bing.com/th/id/OIP.bzvy5jZarY_rxDOEdpBH1AAAAA?w=242&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "data:image/jpeg;base64,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",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "https://th.bing.com/th/id/OIP.xiOimkZx3rqx2DoceMGaXwHaEK?w=291&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "https://th.bing.com/th/id/OIP.XAt6wGv3nImlQNzrm6iFjgHaKQ?w=123&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "https://th.bing.com/th/id/OIP.EMfTn5obu3TUWjseHXDP7AHaFj?w=222&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "https://th.bing.com/th/id/OIP.BycME0EnN5M8bzRo2XYYrQHaHa?w=164&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
                    {
	                    "src": "https://th.bing.com/th/id/OIP.p39AtedgD_cWI3jLaNfv_AHaEw?w=275&h=180&c=7&o=5&pid=1.7",
	                    "height": 70,
	                    "width": 73
                    },
	            ]
	        },
	     
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} 
    style={{ width: "100%", height: "100%",top: '60px',left: '0', position: "absolute", zIndex: '1' }} 
    />
     <div className="container"  style={{zIndex: '2', position: 'relative'}} >
        
          <div className="text-center">
             
          <h2 className="text-center">
                My Works
            </h2>
            <p>I worked on many projects. These are the notable ones</p>
     
          </div>
         <div>
             <WorkCarousel></WorkCarousel>
         </div>
         <div className="row pt-4">
             <div className="col-12 col-md-6">
     <div className="work">
     <ul>
            <li className="list-item">
                    <h3>Creative Agency</h3>
                   <p>
                   <ul className="list-group">
                       <li>This is an agency website that makes portfolios for others</li>
                       <li>In this website there is a secured admin panel where the admin can add and remove services and also can see if anybody selected any service.</li>
                       <li>There is also a secured customer panel where a customer can see his/her selected services, can place an order and also can add reviews</li>
                       <li className="list-item">It is made by react js , Node, Mongo db, Express js and more.</li>
                    <li className="list-item">
                    <a href="https://creative-agency-bysubreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Live Link </a>
                           <a href="https://github.com/subreena/creative-agency"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}> Github Link</a>
                       </li>
                    </ul>
                   </p>
                </li>
                </ul>
     </div>
             </div>
             <div className="col-12 col-md-6">
              <div className="work">
              <ul>     
                <li className="list-item">
                      <h3>Volunteer Network</h3>
                       <p>
                        <ul className="list-group">
                            <li className="list-item">This is a social service website where an user can select a task of choice</li>
                            <li className="list-item">The user can see and delete his/her chosen tasks</li>
                            <li className="list-item">There is a basic admin panel where the admin can delete selected tasks and add new tasks</li>
                            <li className="list-item">It is made by react js , Node, Mongo db, Express js and more.</li>
                            <li><a href="https://volunteer-network-bysubreena.web.app/" target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Live Link </a> 
                            <a href="https://github.com/subreena/volunteer-network" target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2" style={{fontSize: '16px'}}>Github Repository Link</a></li>
                        </ul>
                       </p>
                </li>
                 </ul>
              </div>
             </div>
             <div className="col-12 col-md-6">
                <div className="work">
                <ul>
                 <li className="list-item">
                    <h3>Travel Guru</h3>
                    <ul className="list-group">
                       <li className="list-item">This is a travel agency website</li>
                       <li className="list-item">In this website a user can select a destination and see the hotels available in that location</li>
                       <li className="list-item">This website is made using React js, React Router, Firebase auth and more</li>
                       <li className="list-item">
                       <a href="https://travel-guru-by-subreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Live Link </a>
                           <a href="https://github.com/subreena/travel-guru-app"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Github Repository Link</a>
                           
                       </li>
                    </ul>
                </li>
                 </ul>
                </div>
             </div>
             <div className="col-12 col-md-6">
               <div className="work">
               <ul>
                 <li className="list-item">
                    <h3>Social Buddy</h3>
                    <p>
                        <ul className="list-group">
                            <li className="list-item">This is social website with random posts that are generated from JSON placeholder</li>
                            <li className="list-item">There are also comments and user images and other details of the posts</li>
                            <li className="list-item">This website is made using Reactjs , React Router, Material Ui and more.</li>
                            <li>
                                <a href=" https://social-buddy-react-app.netlify.app/"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Live Link </a>
                                <a href="https://github.com/subreena/social-buddy"target="_blank" rel="noopener noreferrer" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Github Repository Link</a>
                            </li>
                        </ul>
                    </p>
                </li>
                 </ul>
               </div>
             </div>
             <div className="col-12 col-md-6">
               <div className="work">
               <ul>
                <li className="list-item">
                <h3>Online Classs</h3>
                <p>
                   
                <ul className="list-group">
                    <li>This is a online couse website where a user can add courses of choice</li>
                    <li>This is made using React js and more</li>
                    <li className="list-item">
                           <a href="https://relaxed-noether-ad57a2.netlify.app/" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}>Live Link </a>
                           <a href="https://github.com/subreena/online-class" className="mt-3 badge badge-secondary p-2 mr-2"  style={{fontSize: '16px'}}> Github Repository Link</a>
                       </li>
                    </ul>
                </p>
                </li>
            </ul>
               </div>
             </div>
         </div>
               
          
        </div>
        </div>
        <div className="bg-dark text-light">
        <Footer></Footer>
        </div>
        </>
    );
};

export default Works;
import React from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import WorkCarousel from './WorkCarousel';
const Works = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="work">
        <div className="container">
          <div className="text-center">
          <h2 className="text-center">
                My Works
            </h2>
            <p>I worked on many projects. These are the notable ones</p>
     
          </div>
         <div>
             <WorkCarousel></WorkCarousel>
         </div>
         <div className="row">
             <div className="col-12 col-md-6">
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
                    <a href="https://creative-agency-bysubreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer">Live Link </a>
                           <a href="https://github.com/subreena/creative-agency"target="_blank" rel="noopener noreferrer"> Github Link</a>
                       </li>
                    </ul>
                   </p>
                </li>
                </ul>
             </div>
             <div className="col-12 col-md-6">
                 <ul>
                     
                <li className="list-item">
                      <h3>Volunteer Network</h3>
                       <p>
                        <ul className="list-group">
                            <li className="list-item">This is a social service website where an user can select a task of choice</li>
                            <li className="list-item">The user can see and delete his/her chosen tasks</li>
                            <li className="list-item">There is a basic admin panel where the admin can delete selected tasks and add new tasks</li>
                            <li className="list-item">It is made by react js , Node, Mongo db, Express js and more.</li>
                            <li><a href="https://volunteer-network-bysubreena.web.app/" target="_blank" rel="noopener noreferrer">Live Link </a> 
                            <a href="https://github.com/subreena/volunteer-network" target="_blank" rel="noopener noreferrer"> Github Repository</a></li>
                        </ul>
                       </p>
                </li>
                 </ul>
             </div>
             <div className="col-12 col-md-6">
                 <ul>
                 <li className="list-item">
                    <h3>Travel Guru</h3>
                    <ul className="list-group">
                       <li className="list-item">This is a travel agency website</li>
                       <li className="list-item">In this website a user can select a destination and see the hotels available in that location</li>
                       <li className="list-item">This website is made using React js, React Router, Firebase auth and more</li>
                       <li className="list-item">
                       <a href="https://travel-guru-by-subreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer">Live Link </a>
                           <a href="https://github.com/subreena/travel-guru-app"target="_blank" rel="noopener noreferrer"> Github Link</a>
                           
                       </li>
                    </ul>
                </li>
                 </ul>
             </div>
             <div className="col-12 col-md-6">
                 <ul>
                 <li className="list-item">
                    <h3>Social Buddy</h3>
                    <p>
                        <ul className="list-group">
                            <li className="list-item">This is social website with random posts that are generated from JSON placeholder</li>
                            <li className="list-item">There are also comments and user images and other details of the posts</li>
                            <li className="list-item">This website is made using Reactjs , React Router, Material Ui and more.</li>
                            <li>
                                <a href=" https://social-buddy-react-app.netlify.app/"target="_blank" rel="noopener noreferrer">Live Link </a>
                                <a href="https://github.com/subreena/social-buddy"target="_blank" rel="noopener noreferrer"> Github Repository</a>
                            </li>
                        </ul>
                    </p>
                </li>
                 </ul>
             </div>
             <div className="col-12 col-md-6">
                      
           <ul>
                <li className="list-item">
                <h3>Online Classs</h3>
                <p>
                   
                <ul className="list-group">
                    <li>This is a online couse website where a user can add courses of choice</li>
                    <li>This is made using React js and more</li>
                    <li className="list-item">
                           <a href="https://relaxed-noether-ad57a2.netlify.app/">Live Link </a><a href="https://github.com/subreena/online-class"> Github Link</a>
                       </li>
                    </ul>
                </p>
                </li>
            </ul>
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
import React from 'react';
import './Banner.css'
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import TopNav from '../../Nav/TopNAv/TopNav';
const Banner = () => {
   return (
      <>
         <div className="banner-content">
            <Particles
               params={{
                  particles: {
                     number: {
                        value: 180,
                        density: {
                           enable: true,
                           value_area: 1000,
                        }
                     },
                  },
               }}
               style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0" }}

            />
            <div className="banner-text">
               <h1>Subreena</h1>
               <h3 style={{ display: 'flex', textAlign: 'center' }}>
                  <span style={{ marginRight: '10px' }}> I </span> <Typewriter
                     options={{
                        strings: [' Am A Full-Stack Web Developer',
                           ' Am An Enthusiastic Content Writer',
                           ' Am A Creative Web Designer',
                           ' Am A Self-employed Freelancer'],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </h3>
             
               <div className="mt-4">
                  <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1FQ-AdlHb4uPAgi3DE2MVKaQAs-kmVgPb/view?usp=sharing"
                     className="btn btn-lg btn-outline-light text-bold mr-3">Check Out My Resume</a>
                     
                                    <TopNav></TopNav>
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;
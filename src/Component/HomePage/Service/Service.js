import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <>
        <div className="service">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3">
                   <div className="col-content">
                   <i class="fa fa-smile-o  fa-3x mb-2 col-i" aria-hidden="true"></i>
                     <h2>500+</h2>
                     <h4>Hours Spent</h4>
                   </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="col-content">
                  <i class="fa fa-laptop fa-3x mb-2 col-i" aria-hidden="true"></i>
                    <h2>50+</h2>
                    <h4>Web Designs</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="col-content">
                    <i class="fa fa-file-code-o fa-3x mb-2 col-i" aria-hidden="true"></i>
                    <h2>30+</h2>
                    <h4>Projects Done</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="col-content">
                    <i class="fa fa-comment fa-3x mb-2 col-i" aria-hidden="true"></i>    
                    <h2>10+</h2>
                    <h4>Comments</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Service;
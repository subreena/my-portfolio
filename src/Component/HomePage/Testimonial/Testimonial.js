import React from 'react';
import testimonialImg from '../../../images/person_5.jpg';
import '../Testimonial/Testimonial.css'
const Testimonial = () => {
    return (
        <>
            <div className="testimonial">
                <div className="container">
                    <h1 className="text-center mb-5 text-light testi-head">Testimonials</h1>
                   <div className="testi-text">
                   <img src={testimonialImg} alt="" />
                   <p><strong>Maria Lopez</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil ab id reiciendis nulla, aspernatur omnis vel facilis cumque tempore, sequi culpa porro.</p>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
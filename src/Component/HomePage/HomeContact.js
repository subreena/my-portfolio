import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const HomeContact = () => {
    (function () {
        // https://dashboard.emailjs.com/admin/integration
        emailjs.init('user_yRskCVqSL9Zl5uH5BEekD');
    })();
    window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this);
            alert("Message Sent Successfully!")
        });
    }
    return (
        <>
            <div className="contact p-5">
                <div className="container">
                    <h3 className="text-center">Contact Me</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3>My Other Social Websites</h3>
                                 
                            <div className="bg-transparent mt-5">
           
           <span className="p-2 text-white ">
                <a className="text-dark font-weight-bold mb-2" href="https://www.linkedin.com/in/subreena-264a181b1/" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-linkedin fa-3x" aria-hidden="true"></i> Subreena
                </a> <br/>
                <a className="text-dark font-weight-bold mb-2" href="https://github.com/subreena" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-github fa-3x" aria-hidden="true"></i> Subreena
                </a> <br/>
                <a className="text-dark font-weight-bold mb-2" href="https://stackoverflow.com/users/13840115/subreena" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-stack-overflow fa-3x" aria-hidden="true"></i> Subreena
                </a> <br/>
               <Link className="text-dark font-weight-bold mb-2" to="/contact">
               <i className=" mr-2 fa fa-phone fa-3x" aria-hidden="true"></i> +123456789
               </Link> <br/>
                <Link className="text-dark font-weight-bold mb-2" to="/contact">
                <i class=" mr-2 fa fa-envelope fa-3x" aria-hidden="true"></i> subreena20@gmail.com
                </Link>
             </span>
         
        </div>


                        </div>
                        <hr/>
                        <div className="col-12 col-md-6">
                            <h2>Want to send me a message?</h2>
                            <form id="contact-form" className="form">
                                <input type="hidden" name="contact_number" /> <br/>
                                <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" name="user_name" /> <br/>
                                </div>
                                <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="user_email" /> <br/>
                                </div>
                                <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" className="form-control"></textarea> <br/>
                                </div>
                                <button className="btn btn-outline-dark"type="submit" >Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
          
        </>
    );
};

export default HomeContact;
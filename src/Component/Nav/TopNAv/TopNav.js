import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="bg-transparent mt-5">
           
           <span className="d-flex p-2 text-white justify-content-center">
                <a className="text-light" href="https://www.facebook.com/subreena.hossain.31/" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
                <a className="text-light" href="https://www.linkedin.com/in/subreena-264a181b1/" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
                <a className="text-light" href="https://github.com/subreena" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                <a className="text-light" href="https://stackoverflow.com/users/13840115/subreena" target="_blank" rel="noopener noreferrer">
                <i className=" mr-2 fa fa-stack-overflow fa-2x" aria-hidden="true"></i>
                </a>
               <Link className="text-light" to="/">
               <i className=" mr-2 fa fa-phone fa-2x" aria-hidden="true"></i>
               </Link>
                <Link className="text-light" to="/">
                <i class=" mr-2 fa fa-envelope fa-2x" aria-hidden="true"></i>
                </Link>
             </span>
         
        </div>
    );
};

export default TopNav;
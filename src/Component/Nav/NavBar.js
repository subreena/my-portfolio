import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
       <Navbar expand="lg">
           <div className="container">
  <Link to="/" className="navbar-brand" style={{fontSize: '23px' }}>
  Subreena
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/home" className="nav-link" style={{fontSize: "18px"}}>Home</Link>
      <Link to="/about" className="nav-link" style={{fontSize: "18px"}}>About</Link>
      <Link to="/works" className="nav-link" style={{fontSize: "18px"}}>Works</Link>
      <Link to="/blogs" className="nav-link" style={{fontSize: "18px"}}>Blogs</Link>
      <Link to="/contact" className="nav-link" style={{fontSize: "18px"}}>Contact</Link>

    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>
        </>
    );
};

export default NavBar;
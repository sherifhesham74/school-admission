import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/Navs.css";
import { Link, NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <Navbar expand="lg" sticky="top" fixed="top">
      
        <NavLink className="nav-link" to="/">
            
        <img src="./logo.jpg" className="imm" alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              My Requests
            </NavLink>
            <NavLink className="nav-link" to="/accessories">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/schools">
              Contact Us
            </NavLink>
            <Link  to="/admission">
            <button class="admission">Admission</button>

            </Link>
          </Nav>
    
          <Nav>
      
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
};

export default Navs;

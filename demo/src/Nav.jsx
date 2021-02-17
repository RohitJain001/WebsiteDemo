import React from 'react';
import logo from './Images/Sprint-logo-design-Codesign-agency.png';
import './Nav.css'

const Nav = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img className="logo1" src={logo}/>
            </div>
            <div className="navigation">
                <a href="" className="NavItem VisitedWebpage" >About</a>
                <a href="" className="NavItem">Home</a>
                <a href="" className="NavItem">Services</a>
                <a href="" className="NavItem">FAQ</a>
                <a href="" className="NavItem">Contact</a>
                <p className="NavPhoneNo">9888998789</p>
                

                <a href="javascript:void(0);" className="dropdownicon" onclick="myFunction()">&#9776;</a>
            </div>
        </div>
    );
};

export default Nav;
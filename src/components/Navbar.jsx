import React from 'react'
import { NavLink } from 'react-router-dom';
import { useRef } from "react";
import navIcon from '../assets/mobile-nav.svg';
import "../App.css";
import xIcon from '../assets/mobile-x.svg';


function Navbar() {
   const navRef = useRef();
   

   const showNavbar = () => {
    
    navRef.current.classList.toggle("nav-expanded")
    
    
   }

   
   
  return (
    <div className="nav-component">
       
        <img src={navIcon} alt="nav-icon" className="nav-mobile-menu" onClick={showNavbar}/>
         
        
        <nav className="mobile-menu" ref={navRef}>

        <div className="x-icon">

        <img src={xIcon} alt="nav-icon" className="nav-mobile-menu" onClick={showNavbar}/>

        </div>

        <div className="nav-links-mobile nav-bar-desktop">
        <NavLink to='/' className="home-link">home  </NavLink>
        
        <NavLink to='/about'  className="about-link">about me</NavLink>

        

        <NavLink to='/projects' className="projects-link">portfolio</NavLink>
        </div>
        
    </nav>
    </div>
  )
}

export default Navbar
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import navIcon from '../assets/sun-mobile.svg';
import "../App.css";
import xIcon from '../assets/sun-nav-close.svg';


function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    navRef.current.classList.add("nav-expanded");
    setIsOpen(true);
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("nav-expanded");
    setIsOpen(false);
  };

  return (
    <div className="nav-component">
      {isOpen && <div className="nav-overlay" onClick={closeNavbar} />}

      <img src={navIcon} alt="open navigation" className="nav-mobile-menu" onClick={openNavbar}/>

      <nav className="mobile-menu" ref={navRef}>
        <div className="x-icon">
          <img src={xIcon} alt="close navigation" className="nav-mobile-menu" onClick={closeNavbar}/>
        </div>

        <div className="nav-links-mobile nav-bar-desktop">
          <NavLink to='/' className="home-link" onClick={closeNavbar}>home</NavLink>
          <NavLink to='/about' className="about-link" onClick={closeNavbar}>about me</NavLink>
          <NavLink to='/productdesign' className="projects-link" onClick={closeNavbar}>portfolio</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
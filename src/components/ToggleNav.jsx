import React from 'react'
import navIcon from '../assets/mobile-nav.svg';


function ToggleNav() {
    const handleNav = () => {
        const nav = document.querySelector(".nav");
        const menuIcon = document.querySelector(".nav-mobile-menu");
        
        const navToggle = document.querySelector('.nav-toggle');

       
        if (navToggle) {
          nav.classList.remove("nav-toggle")
        } else if (!navToggle) {
          nav.classList.add("nav-toggle")
        }

    }

    handleNav();

  return (
    <div><img src={navIcon} alt="nav-icon" className="nav-mobile-menu" onClick={handleNav}/></div>
  )
}

export default ToggleNav
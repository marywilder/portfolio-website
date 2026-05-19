import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import hello from '../assets/hello.png'
import starbucksimg from '../assets/starbucksmockup.png'
import starbucksgif from '../assets/setprefs.gif';
import prototypepng from '../assets/prototype-phone.png';
import shopifylogo from '../assets/shopifylogo.png';
import letterboxd from '../assets/letterboxdprototype.gif'
function Home() {
  return (
    <div className="home">
    <div className="name">
       <div className="title-container">
       <h1 >
        <div className="title">mary wilder</div>
       <br></br>
       <div className="title-span">
        Product Designer
      </div>
        </h1>
       {/**<div className="home-image"><img src={hello}/></div> */} 
        
        </div>
        
        <section className="intro"> UX designer blending research, creativity, and front-end thinking into experiences people actually enjoy using.
        </section>
        </div>
        <br/>
        <NavLink to='/projects' className="recent-work">see my recent work!</NavLink>
    

       
                      
       
    </div>
  )
}

export default Home
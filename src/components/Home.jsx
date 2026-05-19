import React from 'react'
import { NavLink } from 'react-router-dom';
import location from '../assets/location.svg';

function Home() {
  return (
    <div className="home">
      <div className="name">
        <div className="title">mary wilder</div>
        <div className="title-span">Product Designer</div>
        <div className="location-container">
          <img src={location} className="location-icon" alt="location pin"/>
          Charlotte, NC
        </div>
        
      </div>
      <div className="home-intro">
        <section className="intro">
          UX designer blending research, creativity, and front-end thinking into experiences people actually enjoy using.
        </section>
        <NavLink to='/projects' className="recent-work">see my recent work!</NavLink>
      </div>
    </div>
  )
}

export default Home

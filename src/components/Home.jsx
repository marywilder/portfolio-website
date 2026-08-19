import React from 'react'
import { NavLink } from 'react-router-dom';
import location from '../assets/location.svg';

function Home() {
  return (
    <div className="home">
      <div className="name">
        <div className="title">
          {'mary wilder'.split('').map((char, i) => (
            <span
              key={i}
              className="title-letter"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </div>
        <div className="title-span">UX, Web & Visual Designer</div>
        <div className="location-container">
          <img src={location} className="location-icon" alt="location pin"/>
          Charlotte, NC
        </div>
        
      </div>
      <div className="home-intro">
        <section className="intro">
          Designer blending research, visual craft, and front-end thinking - from brand assets to digital products.
        </section>
        <div className="recent-work-wrapper">
          <NavLink to='/productdesign' className="recent-work">see my recent work!</NavLink>
          <div className="wavy-line"></div>
        </div>
      </div>
    </div>
  )
}

export default Home

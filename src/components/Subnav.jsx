import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Subnav() {
  return (
             <div className="sub-nav">
                    <div className="product-link-wrapper">
                      <NavLink to='/productdesign' className="product-link" onClick={() => window.scrollTo(0, 0)}>product design</NavLink>
                      <div className="wavy-line"></div>
                    </div>
                    <span className="subnav-divider">✿</span>
                    <div className="web-dev-link-wrapper">
                      <NavLink to='/webdev' className="web-dev-link" onClick={() => window.scrollTo(0, 0)}>web dev</NavLink>
                      <div className="wavy-line"></div>
                    </div>
                    <span className="subnav-divider">✿</span>
                    <div className="illustration-link-wrapper">
                      <NavLink to='/illustration' className="illustration-link" onClick={() => window.scrollTo(0, 0)}>graphic design</NavLink>
                      <div className="wavy-line"></div>
                    </div>
              </div>
  )
}

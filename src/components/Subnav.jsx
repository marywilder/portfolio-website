import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Subnav() {
  return (
             <div className="sub-nav">
                    <div className="product-link-wrapper">
                      <NavLink to='/productdesign' className="product-link">product design</NavLink>
                      <div className="wavy-line"></div>
                    </div>
                    <span className="subnav-divider">✿</span>
                    <div className="web-dev-link-wrapper">
                      <NavLink to='/webdev' className="web-dev-link">web dev</NavLink>
                      <div className="wavy-line"></div>
                    </div>
                    <span className="subnav-divider">✿</span>
                    <div className="illustration-link-wrapper">
                      <NavLink to='/illustration' className="illustration-link">graphic design</NavLink>
                      <div className="wavy-line"></div>
                    </div>
              </div>
  )
}

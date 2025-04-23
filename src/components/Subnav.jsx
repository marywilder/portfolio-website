import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Subnav() {
  return (
             <div className="sub-nav">
                    <NavLink to='/productdesign' className="product-link">product design</NavLink>
                    <NavLink to='/webdev'  className="web-dev-link">web dev</NavLink>
                    <NavLink to='/illustration' className="illustration-link">art + design</NavLink>
              </div>
  )
}

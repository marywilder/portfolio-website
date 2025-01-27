import React from 'react'
import Subnav from './Subnav';
import starbucksimg from '../assets/phonemockup_.png'
import shopifylogo from '../assets/shopifylogo.png'
export default function Productdesign() {
  return (
    <section className="design-page">
        <Subnav />
        <div className="design-rect"></div>
            <section className="product-design-page">

                <p></p>

                <div className="design-project">
                    <div><h2>Starbucks Case Study</h2>
                    <img src={starbucksimg} className="starbucksimg"/></div>
                    <div><p>During my MPS program, I worked on a design team with 2 of my collegues to select a product and go through the product design process of wireframing, prototyping, and usability testing. Through our design iterations, we landed on addressing the dietary uncertainty users face using the Starbucks app.</p> <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/starbucks-case-study/#/"><button href="">Case Study</button></a></div>
                    
                </div>

                <div className="design-project">
                <div><h2>Shopify Case Study</h2>
                    <img src={shopifylogo} className='shopify-logo'/></div>
                <div>
                <p>During my UX Reasearch course at MICA, I explored the very popular eccomerce platform SHopify, to identify pain points and evaluate users' experience. I did competitive research, identified user types, and conducted User Research with 6 individuals. Through identifying common themes and insights, I made reccomendations to stakeholders.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/16woy_tF5s1jivtYbo7HTMVenhsW-O2QUg6O8YdWxwso/edit?usp=sharing"><button>Case Study</button></a>
                </div>  
                </div>

        </section>

    </section>
  )
}
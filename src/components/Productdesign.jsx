import React from 'react'
import Subnav from './Subnav';
import starbucksimg from '../assets/phonemockup_.png'
import starbucksgif from '../assets/setprefs.gif'
import shopifylogo from '../assets/shopifylogo.png'
import prototypepng from '../assets/prototype-phone.png';
export default function Productdesign() {
  return (
    <section className="design-page">
        <Subnav />
        <div className="design-rect"></div>
            <section className="product-design-page">

                <p></p>
                <h2>Starbucks Case Study</h2>
                <div className="design-project">
                    <div className="prototype-container-of-container">
                    <div className="prototype-container">
                    <div className="prototype-img">
                      <img src={prototypepng} className="proto-phone"/>
                      <img src={starbucksgif} className="starbucksimg"/>
                    </div>
                    </div>

                    </div>
                    <div><p>During my MPS program, my design team of 3 worked to create a new feature set for an existing product. We chose to make some improvements to the Starbucks app, and we went through the full product design process from wireframing and prototyping to usability testing. After multiple design iterations, we landed on features that address the dietary uncertainty users face in the Starbucks app.</p> <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/starbucks-case-study/#/"><button href="">Case Study</button></a></div>
                    
                </div>
                <h2>Shopify Case Study</h2>
                <div className="design-project">
                <div>
                    <img src={shopifylogo} className='shopify-logo'/></div>
                <div>
                <p>During my UX Research course at MICA, I explored the market-leading ecommerce platform, Shopify, to identify pain points and evaluate users' experience. I did competitive research, identified user types, and conducted User Research with 6 participants. Common themes and insights were used to make recommendations to stakeholders for a new feature that would help solve the problem of frequent internal human error.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/16woy_tF5s1jivtYbo7HTMVenhsW-O2QUg6O8YdWxwso/edit?usp=sharing"><button>Case Study</button></a>
                </div>  
                </div>

        </section>

    </section>
  )
}
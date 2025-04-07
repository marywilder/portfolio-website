import React from 'react'
import Subnav from './Subnav';
import starbucksimg from '../assets/phonemockup_.png'
import starbucksgif from '../assets/setprefs.gif'
import shopifylogo from '../assets/shopifylogo.png'
import prototypepng from '../assets/prototype-phone.png';
import letterboxd from '../assets/letterboxdprototype.gif'
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
                      <img src={prototypepng} className="proto-phone"alt="iphone displaying starbucks app"/>
                      <img src={starbucksgif} className="starbucksimg" alt="taste preferences page for starbucks app, displaying how settings are selected through checkboxes"/>
                    </div>
                    </div>

                    </div>
                    <div><p>During my MPS program, my design team of 3 worked to create a new feature set for an existing product. We chose to make some improvements to the Starbucks app, and we went through the full product design process from <b>wireframing</b> and <b>prototyping</b> to <b>usability testing.</b> After multiple design iterations, we landed on features that address the <b>dietary uncertainty users face</b> in the Starbucks app.</p> <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/starbucks-case-study/#/"><button href="">View the case study</button></a></div>
                    
                </div>
                <h2>Letterboxd Case Study</h2>
                <div className="design-project">
                    <div className="prototype-container-of-container">
                    <div className="prototype-container">
                    <div className="prototype-img">
                     <img src={letterboxd} alt="letterboxd prototype" className="letterboxd-gif-desktop"/>
                    </div>
                    </div>

                    </div>
                    <div><p>As a Letterboxd user, I noticed that the platform lacks personalized recommendations, making it harder for users to organically discover new movies. To address this, I designed a "Film Finder" quiz, a personalized "Film DNA" feature, and improved movie suggestions to <b>enhance user engagement and discovery.</b> Through this project, I conducted <b>user research</b>, created <b>wireframes</b> that iterated through multiple designs, created a fully-functioning <b>prototype</b>, explored <b>UX choreography</b> ideas, and conducted <b>Usability Testing.</b> This project was part of my master's program.</p> <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/mOafiRr4yObVnkLl3kuKAz/MUXD5103.02?node-id=879-7633&t=GVj8JSBW43lkcfle-0&scaling=scale-down-width&content-scaling=fixed&page-id=857%3A1541&starting-point-node-id=879%3A7633"><button href="">View the case study</button></a></div>
                    
                </div>
                <h2>Shopify Case Study</h2>
                <div className="design-project">
                <div>
                    <img src={shopifylogo} className='shopify-logo' alt="shopify logo"/></div>
                <div>
                <p>During my UX Research course at MICA, I explored the market-leading ecommerce platform, Shopify, to <b>identify pain points</b> and <b>evaluate users' experience.</b> I did <b>competitive research, identified user types,</b> and <b>conducted User Research</b> with 6 participants. Common themes and insights were used to make <b>recommendations to stakeholders</b> for a new feature that would help solve the problem of <b>frequent internal human error.</b></p>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/16woy_tF5s1jivtYbo7HTMVenhsW-O2QUg6O8YdWxwso/edit?usp=sharing"><button>View the research presentation</button></a>
                </div>  
                </div>
                

        </section>

    </section>
  )
}
import React from 'react'
import Navbar from './Navbar'
import hello from '../assets/hello.png'
import starbucksimg from '../assets/starbucksmockup.png'
import shopifylogo from '../assets/shopifylogo.png'
function Home() {
  return (
    <div className="home">
    
       <div className="title-container">
       <h1 className="title">Mary Wilder 
       <br></br>
       <div className="title-span">
        <span className="p">p</span>
        <span className="r">r</span>
        <span className="o">o</span>
        <span className="n">d</span>
        <span className="t">u</span>
        <span className="e">c</span>
        <span className="n2">t</span>
        <br/>
        <span className="d2">d</span>
        <span className="e2">e</span>
        <span className="v">s</span>
        <span className="e3">i</span>
        <span className="l">g</span>
        <span className="o2">n</span>
        <span className="z">e</span>
        <span className="e4">r</span>
        
        
        </div>
        
        </h1>
       {/**<div className="home-image"><img src={hello}/></div> */} 
        
        </div>
        
        <section className="intro"> Hi, I’m Mary—a product designer who loves turning ideas into thoughtful, user-centered experiences. Whether it’s crafting intuitive designs or exploring creative solutions, I’m always up for the challenge. Welcome to my world!
</section>

        <section className="home-page-skills">As a product designer, I blend creativity and technical know-how to craft thoughtful, user-centered experiences. My skills include wireframing, prototyping, interaction design, and UX research, alongside a strong foundation in front-end development. (i built this website using React.js) Whether I’m solving complex problems or fine-tuning the details, I thrive at the intersection of design and technology, always up to learn a new skill and grow no matter how painful it is.</section>
        
        <section className="home-page-work">Here is some of my most recent work!
            <div className="design-project">
                <div>
                  <h2>Starbucks Case Study</h2>
                  <img src={starbucksimg} className="starbucksimg"/>
                </div>
                <div>
                  <p>During my MPS program, I worked on a design team with 2 of my collegues to select a product and go through the product design process of wireframing, prototyping, and usability testing. Through our design iterations, we landed on addressing the dietary uncertainty users face using the Starbucks app.</p> 
                  <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/starbucks-case-study/#/">
                  <button href="">Case Study</button></a>
                </div>
                              
            </div>
          
            <div className="design-project">
               <div>
                <h2>Shopify Case Study</h2>
                <img src={shopifylogo} className='shopify-logo'/>
              </div>
              <div>
                <p>During my UX Reasearch course at MICA, I explored the very popular eccomerce platform SHopify, to identify pain points and evaluate users' experience. I did competitive research, identified user types, and conducted User Research with 6 individuals. Through identifying common themes and insights, I made reccomendations to stakeholders.</p>

                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/16woy_tF5s1jivtYbo7HTMVenhsW-O2QUg6O8YdWxwso/edit?usp=sharing"><button>Case Study</button></a>

              </div> 
            </div>
        </section>
    </div>
  )
}

export default Home
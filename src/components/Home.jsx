import React from 'react'
import Navbar from './Navbar'
import hello from '../assets/hello.png'
import starbucksimg from '../assets/starbucksmockup.png'
import starbucksgif from '../assets/setprefs.gif';
import prototypepng from '../assets/prototype-phone.png';
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
        
        <section className="intro"> Hi, I’m Mary—a product designer who loves creating thoughtful, user-centered experiences to solve problems. Whether it’s brand new designs or exploring creative solutions, I’m always up for the challenge. Welcome to my world!
        </section>
      <div className="home-skills-container">
        <section className="home-page-skills">As a product designer, I blend creativity and technical know-how to craft thoughtful, user-centered experiences. My skills include wireframing, prototyping, interaction design, and UX research, alongside a strong foundation in front-end development (I built this website using React.js). I thrive at the intersection of design and technology, always up to learn a new skill and grow no matter how painful it is.</section>

        <section className="home-page-skills2"><h2>Letterboxd: New Feature Set</h2>As a Letterboxd user, I noticed that the platform lacks personalized recommendations, making it harder for users to organically discover new movies. To address this, I designed a "Film Finder" quiz, a personalized "Film DNA" feature, and improved movie suggestions to enhance user engagement and discovery. This project is part of my master's program, and the finished case study is currently in progress.
          <a target="_blank" rel="noopener noreferrer" href='https://www.figma.com/design/mOafiRr4yObVnkLl3kuKAz/MUXD5103.02?node-id=1-5&t=OSLsGEKCGpNImabN-1https://www.figma.com/proto/mOafiRr4yObVnkLl3kuKAz/MUXD5103.02?node-id=504-5615&t=Zm11cmmCV0k0l4KO-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A7&starting-point-node-id=504%3A5615'><button className="figma-button">View the Prototype</button></a>
        </section>
      </div>

        
        <section className="home-page-work">Here is some of my most recent work!
        <h2>Starbucks Case Study</h2>
            <div 
            className="design-project">
                <div>
                <div className="prototype-container">
                    <div className="prototype-img">
                      <img src={prototypepng} className="proto-phone" alt="iphone displaying starbucks app"/>
                      <img src={starbucksgif} className="starbucksimg" alt="taste preferences page for starbucks app, displaying how settings are selected through checkboxes"/>
                    </div>
                    </div>
                </div>
                <div>
                  
                  <p>During my MPS program, my design team of 3 worked to create a new feature set for an existing product. We chose to make some improvements to the Starbucks app, and we went through the full product design process from wireframing and prototyping to usability testing. After multiple design iterations, we landed on features that address the dietary uncertainty users face in the Starbucks app.</p> 
                  <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/starbucks-case-study/#/">
                  <button href="">Case Study</button></a>
                </div>
                              
            </div>
            <h2>Shopify Case Study</h2>
            <div className="design-project">
               <div>
               
                <img src={shopifylogo} className='shopify-logo' alt="shopify logo"/>
              </div>
              <div>
                <p>During my UX Research course at MICA, I explored the market-leading ecommerce platform, Shopify, to identify pain points and evaluate users' experience. I did competitive research, identified user types, and conducted User Research with 6 participants. Common themes and insights were used to make recommendations to stakeholders for a new feature that would help solve the problem of frequent internal human error.</p>

                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/16woy_tF5s1jivtYbo7HTMVenhsW-O2QUg6O8YdWxwso/edit?usp=sharing"><button>Case Study</button></a>

              </div> 
              
        <section className="case-study-letterboxd"><h3>Letterboxd Wireframes: New Feature Set</h3>As a Letterboxd user, I noticed that the platform lacks personalized recommendations, making it harder for users to organically discover new movies. To address this, I designed a "Film Finder" quiz, a personalized "Film DNA" feature, and improved movie suggestions to enhance user engagement and discovery. This project is part of my master's program, and the prototype is currently in progress.
        <br/>
          <a target="_blank" rel="noopener noreferrer" href='https://www.figma.com/design/mOafiRr4yObVnkLl3kuKAz/MUXD5103.02?node-id=140-2027&t=53H1WOrK7Fg8afp9-1'><button>Figma Design File</button></a>
        </section>
            </div>
        </section>
    </div>
  )
}

export default Home
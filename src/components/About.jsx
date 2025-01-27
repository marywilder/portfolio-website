import React from 'react'
import profilepic from '../assets/profile-pic.png';
import hithere from '../assets/hiimmary.svg';

export default function About() {
  return (
    <section className="about-page">
       {/*  <h1 className="title title-span">
         <span className="a-about">a</span>   
         <span className="b-about">b</span>
         <span className="o-about">o</span>
         <span className="u-about">u</span>
         <span className="t-about">t</span>
         <span className="space-about">  </span>
         <span className="m-about">m</span>
         <span className="e-about">e</span>       
         </h1>
         */}

         <h1>I'm so happy you're here!</h1>
         <br></br>
        <div className="about-intro">
        <p>Hi there! I'm Mary, a product designer based in Charlotte, NC. My path to product design has been anything but linear—starting with a passion for design, diving into the world of coding, and now pursuing my Master’s in UX Design at MICA. Along the way, I’ve been driven by a curious mind and a love for continuous growth and learning.</p>
        <div className="about-profileicon">

        <img src={hithere} className="hi-there"/>
        <img src={profilepic} className="profile-pic1"/>
        </div>

        </div>
        
        <div className="about-skills">

          <h2>Skills</h2>
          
          <p >I completed Codecademy’s extensive certificate in Front End Engineering in 2023 while continuing my work as a digital illustrator. CSS, (Flexbox, grid, animation, responsive development), Javascript, HTML, React,  Redux, AJAX, TDD, JSON, and Git are some of the skills I’m excited to put to use.</p>
          
              
          <p>I have a Bachelors in Communication Studies from Ohio University, where I honed many of my soft skills, including interpersonal and organizational Communication. I’m a friendly collaborator and passionate teammate, and am excited to use those skills working alongside development, design, and content teams.</p>

        </div>


        
    </section>
  )
}

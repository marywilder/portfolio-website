import React from 'react'
import profilepic from '../assets/profile-pic.jpg';

export default function About() {
  return (
    <section className="about-page">
        <h1 className="title title-span">
         <span className="a-about">a</span>   
         <span className="b-about">b</span>
         <span className="o-about">o</span>
         <span className="u-about">u</span>
         <span className="t-about">t</span>
         <span className="space-about">  </span>
         <span className="m-about">m</span>
         <span className="e-about">e</span>       
         </h1>
         <img src={profilepic} className="profile-pic"/>
        <div className="about-intro">
        <p>A self-motivated, creative individual always seeking to grow and learn more.</p>
        <p>Currently residing in Charlotte, NC</p>
        </div>

        <div className="about-skills">
          <h2>Skills</h2>
          
          <p >I completed Codecademy’s extensive certificate in Front End Engineering in 2023 while continuing my work as a digital illustrator. CSS, (Flexbox, grid, animation, responsive development), Javascript, HTML, React,  Redux, AJAX, TDD, JSON, and Git are some of the skills I’m excited to put to use.</p>
          
              
          <p>I have a Bachelors in Communication Studies from Ohio University, where I honed many of my soft skills, including interpersonal and organizational Communication. I’m a friendly collaborator and passionate teammate, and am excited to use those skills working alongside development, design, and content teams.</p>

        </div>

        <div className="about-background">
          <h2>Illustration</h2>

          <p>The past few years, I've been working as a digital illustrator, running a successful e-commerce business via Etsy and other marketplaces. I've also worked with individual clients and businesses on special projects to help them realize their vision. Art and design will always be a passion of mine, and I'm excited to use my design skills in my tech career. This work has given strong skills in Color Theory, aesthetics, and taught how to make clients and stakeholders thrilled with the end results. 
            <br/>

            Check out my etsy here: <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer">Mary Wilder Studio</a></p>

          <p>I'm proud of all I've learned on my own, but I'm beyond excited to work on a team that will push me to grow and become a better developer!</p>
        </div>

        <div className="about-work">
          <h2>Work with me</h2>

          <p>You can contact me on LinkedIn, or email me at marywilder717@gmail.com. </p>
          
          <a>Resume</a>
        </div>
        
    </section>
  )
}

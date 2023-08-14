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
          
          <p >I have completed an extensive certifcate in Front End Engineering from Codeacademy this past year. CSS, (Flexbox, grid, animation, responsive development),  Vanilla Javascript, HTML, React, React Router, Redux, AJAX, Test Driven Development, JSON, Git, Vite, and CRP are some of the skills I feel excited to put to use.</p>
          
              
          <p>Graduating with a Bachelors in Communication Studies at Ohio University, I have many soft skills, including strong interpersonal and organizational Communication, and am so excited to use those skills working on a team. </p>

        </div>

        <div className="about-background">
          <h2>A little more about me</h2>

          <p>The past couple years, I've pursued digital illustration, running a successful eccomerce business through Etsy and other sites. I've worked with individual clients and businesses on special projects to help them achieve their vision. 
            Art and design will always be a passion of mine, and I'm very excited to use my design skills in my Frontend career. 
            I have strong skills in Color Theory, aesthetics, and how to make the Client, or whoever happy with the end result. 
            <br/>

            Check out my etsy here: <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer">Mary Wilder Studio</a></p>

          <p>I'm proud of all I've learned on my own, but I'm so excited to work on a team that will push me to grow and become a better developer!</p>
        </div>

        <div className="about-work">
          <h2>Work with me</h2>

          <p>You can contact me on LinkedIn, or email me at marywilder717@gmail.com. </p>
          
          <a>Resume</a>
        </div>
        
    </section>
  )
}

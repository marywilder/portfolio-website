import React from 'react'
import hello from '../assets/profile_pic.png';

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
         <br></br>
         
        <div className="about-intro">
        <h2>
</h2>
<div className="about-profile">
        <img src={hello} className="profile-pic1"alt="headshot of Mary cropped in a circle, with the word 'hello!' and illustrated flowers bordering the top of the image."/>
        <div><h2>I’m Mary, <span className="body-font">a UX, Web & Visual Designer based in Charlotte, NC.</span></h2>
        <p>
  My background spans <b>graphic design</b>, <b>marketing</b>, <b>front-end development</b>, and recently earned a Master's Degree in <b>UX Design</b>. I love solving messy problems, asking a lot of questions, and getting to the heart of what people actually need. I try to bring curiosity, empathy, and a little bit of fun to the things I make!

</p>
</div>
        </div>

<p>
  Outside of the digital world, you can usually find me rollerblading, trying a new craft, or hanging out with my cat, Lenny.
</p>

        <a
          href="https://docs.google.com/document/d/10OHxTkpYHKbpynRaW5ShkBiY3waKh6tDhuqj9qIR1KY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          view my resume <span>➜ </span>
        </a>
        </div>
        <details className='education accordion'>
          <summary><h2>Education:</h2></summary>
<br/>
<b>2024-25</b> Masters of Professional Studies in UX Design, Maryland Institute College of Art
<br/>
<b>2022:</b> Front-end engineering Career path certificate, Codecademy
<br/>
<b>2015-2019</b> Bachelors in Communication Studies, Ohio University
        </details>
        <details className="about-skills accordion">

          <summary><h2>Skills</h2></summary>

          <p >
            <ul>
              <li><b>UX Research & Usability Testing:</b> Designing and conducting user interviews/usability testing, and analyzing data to uncover actionable insights.
              </li>
              <li><b>Wireframing & Prototyping:</b> Low-fi, hi-fi, functional prototypes. They’re all in my toolkit and I know when to leverage each of these tools.Creating everything from quick sketches to detailed, fully interactive prototypes.</li>
              <li><b>Design Systems:</b> In all of my work, I prioritize creating design systems that are flexible, cohesive, and capable of supporting a dynamic and varied product. Organization is key for a successful product team; I’m skilled with using Figma’s wide range of advanced tools such as components, variables, auto-layout, styles, and everything in between.</li>
              
              <li><b>Interaction Design:</b> Mapping out intuitive user flows, microinteractions, and delightful animations to enhance usability and increase engagement.</li>
              <li><b>Technical and Software Skills:</b> Figma, Adobe Illustrator, Front-end development (HTML, CSS, JavaScript), responsive design, animation, accessibility, SEO.</li>
              <li><b>Creative Problem-Solving:</b> Tackling complex challenges by balancing user needs, business objectives, and technical constraints.</li>
              <li><b>Collaboration & Communication:</b>  From my experiences in digital art and ecommerce, as well as my Master’s program, I’ve worked closely on cross-functional teams, and internal/external stakeholders to bring ideas to life.</li>
              <li><b>Continuous Learning:</b> I’m always experimenting with new tools, design trends, and methodologies to stay sharp and innovative. I lean into feedback and want to bring my best every day.</li>
            </ul>










</p>

        </details>


        
    </section>
  )
}

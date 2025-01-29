import React from 'react'
import hello from '../assets/hello.png';

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
         <div className="about-profileicon">
        <img src={hello} className="profile-pic1"/>
        </div>
        <div className="about-intro">
        <p>Hi there! I'm Mary, a product designer based in Charlotte, NC. My path to product design has been anything but linear—starting with a passion for art, diving into the world of coding, and now pursuing my Master’s in UX Design at MICA. Along the way, I’ve been driven by a curious mind and a love for continuous growth and learning.</p>

        </div>
        
        <div className="about-skills">

          <h2>Skills</h2>
          
          <p >What I Bring to the Table:
            <ul>
              <li><b>Wireframing & Prototyping:</b> Creating everything from quick sketches to detailed, fully interactive prototypes.</li>
              <li><b>Design Systems:</b> organization is key for a successful product team, and using Figma’s wide range of advanced tools such as components, variables, auto-layout, styles, and everything in between- I love it.</li>
              <li><b>UX Research:</b> Conducting user interviews, usability testing, and analyzing data to uncover actionable insights.</li>
              <li><b>Interaction Design:</b> Designing intuitive user flows, microinteractions, and implementing delightful animations to enhance usability and engagement.</li>
              <li><b>Creative Problem-Solving:</b> Tackling complex challenges by balancing user needs, business objectives, and technical constraints. Sometimes the solution is </li>
              <li><b>Technical Skills:</b> Figma, Adobe Illustrator, Front-end development (HTML, CSS, JavaScript), responsive design, animation, accessibility, SEO.</li>
              <li><b>Creative Problem-Solving:</b> Tackling complex challenges by balancing user needs, business objectives, and technical constraints.</li>
              <li><b>Collaboration & Communication:</b> Working closely with cross-functional teams, developers, and stakeholders to bring ideas to life.</li>
              <li><b>Continuous Learning:</b> Always experimenting with new tools, design trends, and methodologies to stay sharp and innovative.</li>
            </ul>









<b>Education:</b>
<br/>
<b>2024-25</b> Masters of Professional Studies in UX Design, Maryland Institute College of Art
<br/>
<b>2022:</b> Front-end engineering Career path certificate, Codecademy
<br/>
<b>2015-2019</b> Bachelors in Communication Studies, Ohio University
</p>

        </div>


        
    </section>
  )
}

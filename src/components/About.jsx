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
        <img src={hello} className="profile-pic1"alt="headshot of Mary cropped in a circle, with the word 'hello!' and illustrated flowers bordering the top of the image."/>
        </div>
        <div className="about-intro">
        <p>Hi there! I'm Mary, a product designer based in Charlotte, NC. My path to product design has been anything but linear—I started  with a passion for art and spent a few years creating digital illustrations before diving into the world of coding. Now, I’m completing a Master’s in UX Design at MICA. Along the way, I’ve been driven by a curious mind and a love for continuous growth and learning, and I’ve learned a lot about how to work with stakeholders and leverage design principles to create satisfaction.</p>

        </div>
        
        <div className="about-skills">

          <h2>Skills</h2>
          
          <p >What I Bring to the Table:
            <ul>
              <li><b>Wireframing & Prototyping:</b> Low-fi, hi-fi, functional prototypes. They’re all in my toolkit and I know when to leverage each of these tools.Creating everything from quick sketches to detailed, fully interactive prototypes.</li>
              <li><b>Design Systems:</b> In all of my work, I prioritize creating design systems that are flexible, cohesive, and capable of supporting a dynamic and varied product. Organization is key for a successful product team; I’m skilled with using Figma’s wide range of advanced tools such as components, variables, auto-layout, styles, and everything in between.</li>
              <li><b>UX Research & Usability Testing:</b> Designing and conducting user interviews/usability testing, and analyzing data to uncover actionable insights.
              </li>
              <li><b>Interaction Design:</b> Mapping out intuitive user flows, microinteractions, and delightful animations to enhance usability and increase engagement.</li>
              <li><b>Creative Problem-Solving:</b> Fall in love with the problem, not the solution. This ensures your creative energy goes toward the best outcome for the user.</li>
              <li><b>Technical and Software Skills:</b> Figma, Adobe Illustrator, Front-end development (HTML, CSS, JavaScript), responsive design, animation, accessibility, SEO.</li>
              <li><b>Creative Problem-Solving:</b> Tackling complex challenges by balancing user needs, business objectives, and technical constraints.</li>
              <li><b>Collaboration & Communication:</b>  From my experiences in digital art and ecommerce, as well as my Master’s program, I’ve worked closely on cross-functional teams, and internal/external stakeholders to bring ideas to life.</li>
              <li><b>Continuous Learning:</b> I’m always experimenting with new tools, design trends, and methodologies to stay sharp and innovative. I lean into feedback and want to bring my best every day.</li>
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

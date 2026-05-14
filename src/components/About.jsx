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
        <p>
        
        Hi! I'm Mary, a UX/Product Designer based in <b>Charlotte, NC.</b> 
        <br/>

        With my career starting in digital art and illustration, I learned <b>Front-end Engineering</b> which marked my transition into the tech industry. As I worked in the e-commerce world and then as a digital designer, I earned my <b>Master's in UX Design</b> from the Maryland Institute College of Art (MICA) in 2025. 
        <br/>
        That combination of <b>visual craft</b>, real-world <b>product experience</b>, and <b>rigorous research training</b> shapes how I approach every project.
        <br/>
        I've had the chance to work across cross-functional teams, collaborate with internal and external stakeholders, and <b>navigate the full design process from fuzzy problem space to polished, tested solution.</b> I care about asking the right questions before jumping to answers, and I believe <b>the best designs are built when user needs, business objectives, and technical constraints are all held in balance.</b>
        </p>

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

import React, { useState } from 'react'
import hello from '../assets/profile_pic.png';
import caretIcon from '../assets/^.svg';

export default function About() {
  const [eduOpen, setEduOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const caretStyle = { '--caret-icon': `url(${caretIcon})` };

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
        <div><h2>I’m Mary<span className="body-font">, a designer who loves bringing digital ideas to life, based in Charlotte, NC.</span></h2>
        <p>
  My background spans <b>design</b>, <b>front-end development</b>, <b>marketing</b>, and recently earned a Master's Degree in <b>UX Design</b>. I love solving messy problems, asking a lot of questions, and getting to the heart of what people actually need. I try to bring curiosity, empathy, and a little bit of fun to all the things I make!
</p>
        <div className="accordions-row">
        <div className={`education accordion${eduOpen ? ' open' : ''}`}>
          <button
            type="button"
            className="accordion-toggle"
            aria-expanded={eduOpen}
            onClick={() => setEduOpen(!eduOpen)}
          >
            <h2>Education</h2>
            <span className="accordion-arrow" style={caretStyle} aria-hidden="true"></span>
          </button>
          <div className="accordion-panel">
            <div className="accordion-panel-inner">
<br/>
<b>2024-25</b> Masters of Professional Studies in UX Design, Maryland Institute College of Art
<br/>
<b>2022:</b> Front-end engineering Career path certificate, Codecademy
<br/>
<b>2015-2019</b> Bachelors in Communication Studies, Ohio University
            </div>
          </div>
        </div>
        <div className={`about-skills accordion${skillsOpen ? ' open' : ''}`}>
          <button
            type="button"
            className="accordion-toggle"
            aria-expanded={skillsOpen}
            onClick={() => setSkillsOpen(!skillsOpen)}
          >
            <h2>Skills</h2>
            <span className="accordion-arrow" style={caretStyle} aria-hidden="true"></span>
          </button>
          <div className="accordion-panel">
            <div className="accordion-panel-inner">
          <p >
            <ul>
              <li><b>UX Research & Usability Testing:</b> Designing and conducting user interviews/usability testing, and analyzing data to uncover actionable insights.
              </li>
              <li><b>Wireframing & Prototyping:</b> From quick sketches to detailed, interactive prototypes, I use the level of fidelity that makes sense for the problem and the stage of the project.</li>
              <li><b>Design Systems:</b> Creating flexible, cohesive systems that make products easier to design and maintain. I’m well-versed working with Figma components, variables, auto-layout, styles, and more.</li>

              <li><b>Interaction Design:</b> Mapping out intuitive user flows, microinteractions, and delightful animations to enhance usability and increase engagement.</li>
              <li><b>Front-End Development:</b> Building responsive experiences with HTML, CSS, and JavaScript, with an understanding of accessibility, SEO, and the realities of implementation.</li>
              <li><b>AI-Assisted Development:</b> Experimenting with tools like Claude Code to turn ideas into working prototypes, troubleshoot problems, and iterate quickly. I like using AI as a tool for learning, building, and exploring what's possible.</li>
              <li><b>Creative Problem-Solving:</b> Tackling complex challenges by balancing user needs, business objectives, and technical constraints.</li>
              <li><b>Collaboration & Communication:</b>  I’ve worked across design, marketing, ecommerce, development, and UX, collaborating with both internal teams and external stakeholders to turn ideas into something real.</li>
              <li><b>Continuous Learning:</b> I’m always experimenting with new tools, techniques, and ideas. I like learning by making things, and I’m not afraid to ask questions, try something different, or change direction when something isn’t working.</li>
            </ul>
</p>
            </div>
          </div>
        </div>
        <a
          href="https://docs.google.com/document/d/10OHxTkpYHKbpynRaW5ShkBiY3waKh6tDhuqj9qIR1KY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          View my resume <span>➜ </span>
        </a>
        </div>
</div>
        </div>

        </div>

        <p className="about-outro">
  Outside of the digital world, you can usually find me rollerblading, trying a new craft, or hanging out with my cat, Lenny.
</p>

    </section>
  )
}

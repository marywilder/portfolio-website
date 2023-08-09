import React from 'react'
import tictactoe from "../assets/Screenshot (4).png";

export default function Projects() {
  return (
    <section className="project-page">
        <h1 className="title"><span className=" title-span">
          <span className="p-projects">p</span>
          <span className="r-projects">r</span>
          <span className="o-projects">o</span>
          <span className="j-projects">j</span>
          <span className="e-projects">e</span>
          <span className="c-projects">c</span>
          <span className="t-projects">t</span>
          <span className="s-projects">s</span>
          </span>
        <br></br>I'm proud of</h1>
          <div className="projects-container">
            <div className="space-project">
              <img className="project-preview" />
              <a target="_blank" rel="noopener noreferrer">Space Tourism Website</a>
              <p>Multi-page, mobile-first design, using React Router, Create React App, React Hooks, CSS flexbox and grid, CSS animations, and utility classes. A Frontend Mentor project, I was provided with the figma files to replicate the design. </p>
            </div>

            <div className="tictac-project">
              <img className="project-preview" src={tictactoe}/>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/marys-tic-tac-toe/">Tic Tac Toe</a>
              <p>This project was built using React compiled through Vite. I used React Hooks to type in each player's name, and dynamically show who's turn it is. I also had a lot of fun with this one using CSS gradients and creating that grainy effect overtop.</p>
            </div>

            <div className="doodle-project">
              <img className="project-preview"/>
              <a target="_blank" rel="noopener noreferrer">Doodle Jump Clone (with added features)</a>
              <p>This project I was really excited about and want to continue improving it. Using Vanilla Javascript, I honed my skills with arrays, array methods, scope, setInterval() and a lot more. I also drew some funny extra characters that you can choose instead of the tradition Doodle. </p>
            </div>

            <div className="todo-project">
              <img className="project-preview"/>
              <a target="_blank" rel="noopener noreferrer">To-Do List App</a>
              <p>This project was built using React and React Hooks. You can enter in your to-do list item, mark it complete, and clear completed to-dos. I had a lot of fun with my own personal touch of making it look like an actual piece of paper, through my weird drawings as an added touch. </p>
            </div>

            <div className="portfolio-project">
            <a target="_blank" rel="noopener noreferrer">Portfolio Website</a>
            <p>The webiste you are on as we speak! Built mobile first, I used React, React Router, React Hooks, CSS Radial Gradients, CSS flexbox, and created a responsive mobile navbar that includes CSS animations and transitions. I enjoyed combining different radial gradients and the CSS filter to create the effect. </p>
            </div>

            <div className="accordian-project">
              <img className="project-preview"/>
              <a target="_blank" rel="noopener noreferrer">Animated Accordion Q&A</a> 
              <p>This project was a Frontend Mentor challenge that I built using Vanilla Javascipt, using event listeners, mutating the DOM, and CSS animations. </p>
            </div>
          </div> 
        </section>
       
  )
}

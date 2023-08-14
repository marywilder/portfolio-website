import React from 'react';
import spacewebsite from '../assets/Screenshot (7).png';
import tictactoe from "../assets/Screenshot (4).png";
import accordian from "../assets/Screenshot (6).png";
import todolist from "../assets/Screenshot (8).png";
import weatherapp from "../assets/Screenshot (9).png";

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
            <a className="space-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/space-travel-website/#/">
            <h2 >Space Tourism Website</h2>
              <img className="project-preview" src={spacewebsite}/>
              <p>Multi-page, mobile-first design, using React Router, Create React App, React Hooks, CSS flexbox and grid, and CSS animations. This was a Frontend Mentor challenge, where I was provided with the Figma files, and then I built it from scratch to replicate the design. </p>
              
              
            </a>

            
            <a className="weather-project"  target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/weather-app/">
            <h2>Weather Website</h2>
              <img className="project-preview" src={weatherapp}/>
              <p>Working with APIs and JSON, I created a vanilla Javascript weather app! Using the Google Places API, and the Open Weather App API together, you can enter in your city. I also illustrated the weather icons and wrote logic for the icons to change depending in the weather. </p>
            
              
            </a>

            <a className="tictac-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/marys-tic-tac-toe/">
            <h2 >Tic Tac Toe</h2>
              <img className="project-preview" src={tictactoe}/>
              
              <p>This project was built using React compiled through Vite. I used React Hooks to type in each player's name, and dynamically show who's turn it is. I also had a lot of fun with this one using CSS gradients and creating that grainy effect overtop.</p>
            </a>

            <a className="doodle-project" target="_blank" rel="noopener noreferrer">
            <h2 >Doodle Jump Clone (with added features)</h2>
              <img className="project-preview"/>
              
              <p>This project I was really excited about and want to continue improving it. Using Vanilla Javascript, I honed my skills with arrays, array methods, scope, setInterval() and a lot more. I also drew some funny extra characters that you can choose instead of the tradition Doodle. </p>
            </a>

            <a className="todo-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/to-do-list/">
            <h2 >To-Do List App</h2>
              <img className="project-preview" src={todolist}/>
              
              <p>This project was built using React and React Hooks. You can enter in your to-do list item, mark it complete, and clear completed to-dos. I had a lot of fun with my own personal touch of making it look like an actual piece of paper, through my weird drawings as an added touch. </p>
            </a>

            <a className="portfolio-project" target="_blank" rel="noopener noreferrer">
            <h2 >Portfolio Website</h2>
            <p>The webiste you are on as we speak! Built mobile first, I used React, React Router, React Hooks, CSS Radial Gradients, CSS flexbox, and created a responsive mobile navbar that includes CSS animations and transitions. I enjoyed combining different radial gradients and the CSS filter to create the effect. </p>
            </a>

            <a className="accordian-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/faq-accordion-card-main/">
            <h2 >Animated Accordion Q&A</h2>
              <img className="project-preview" src={accordian}/>
               
              <p>This project was a Frontend Mentor challenge that I built using Vanilla Javascipt, using event listeners, mutating the DOM, and CSS animations. </p>
            </a>
          </div> 
        </section>
       
  )
}

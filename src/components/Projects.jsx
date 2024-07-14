import React from 'react';
import spacewebsite from '../assets/Screenshot (7).png';
import tictactoe from "../assets/Screenshot (4).png";
import accordian from "../assets/Screenshot (6).png";
import todolist from "../assets/Screenshot (8).png";
import weatherapp from "../assets/Screenshot (9).png";
import doodlejump from "../assets/Screenshot (11).png";

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
            <h2>Frontend Development</h2>
            <a className="space-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/space-travel-website/#/">
            <h2 >Space Tourism Website</h2>
              <img className="project-preview" src={spacewebsite}/>
              <p>Multi-page, mobile-first design, using React Router, Create React App, React Hooks, CSS flexbox and grid, and CSS animations. This was a Frontend Mentor challenge; I was provided with the Figma, then built the site from scratch with no repos or codebase. </p>
              
              
            </a>

            
            <a className="weather-project"  target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/weather-app/">
            <h2>Weather Website</h2>
              <img className="project-preview" src={weatherapp}/>
              <p>Working with APIs and JSON, I created a vanilla Javascript weather app. This app uses the Google Places API, the Open Weather App API. Users can enter in the name of any city or state. I also illustrated the weather icons and wrote logic that tells the icons to change depending on the weather.</p>
            
              
            </a>

            <a className="tictac-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/marys-tic-tac-toe/">
            <h2 >Tic Tac Toe</h2>
              <img className="project-preview" src={tictactoe}/>
              
              <p>This project was built using React compiled through Vite. I used React Hooks to provide functionality for player names and to dynamically show who's turn it is. I also had a lot of fun with this one, using CSS gradients and creating a grainy effect.</p>
            </a>

            <a className="todo-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/to-do-list/">
            <h2 >To-Do List App</h2>
              <img className="project-preview" src={todolist}/>
              
              <p>This project was built using React/React Hooks. Users can enter in a to-do list item, mark it complete, and clear completed to-dos. Again, here, I added a bit of fun with my own personal touch by making it look like an actual piece of paper.</p>
            </a>

            <a className="doodle-project" target="_blank" rel="noopener noreferrer">
            <h2 >Doodle Jump Clone (with added features)</h2>
              <img className="project-preview" src={doodlejump}/>
              <div className="doodle-links">
              <a href="https://marywilder.github.io/doodle-jump/" target="_blank" rel="noopener noreferrer" className="doodle-link">Mobile Version</a>
              <a href="https://marywilder.github.io/doodle-jump-desktop/" target="_blank" rel="noopener noreferrer" className="doodle-link">Desktop Version</a>
              </div>
              <p>This project I was really excUsing Vanilla Javascript, I honed my skills with arrays, array methods, scope, setInterval() and more. I also drew some funny extra characters that you can play as rather than the original Doodle.</p>
            </a>
            
            <a className="accordian-project" target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/faq-accordion-card-main/">
            <h2 >Animated Accordion Q&A</h2>
              <img className="project-preview" src={accordian}/>
               
              <p>Another challenge from Frontend Mentor; built using Vanilla Javascript, event listeners, mutating DOM, and CSS animations.</p>
            </a>

            <a className="portfolio-project" target="_blank" rel="noopener noreferrer">
            <h2 >Portfolio Website</h2>
            <p>This is the website you are on as we speak! Built mobile-first using React, React Router, React Hooks, CSS Radial Gradients, CSS flexbox. Created a responsive mobile navbar that includes CSS animations and transitions. I enjoyed combining different radial gradients and CSS filter() to create the site’s aesthetic.</p>
            </a>
          </div> 
          <h2>Illustration</h2>
          
        </section>
       
  )
}

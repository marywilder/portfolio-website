import React from 'react';
import { NavLink } from 'react-router-dom';
import spacewebsite from '../assets/Screenshot (7).png';
import tictactoe from "../assets/Screenshot (4).png";
import accordian from "../assets/Screenshot (6).png";
import todolist from "../assets/Screenshot (8).png";
import weatherapp from "../assets/Screenshot (9).png";
import doodlejump from "../assets/Screenshot (11).png";
import Subnav from './Subnav';
import Productdesign from './Productdesign';

export default function Webdev() {
  return (
    <section className="webdev-page">
      <Subnav/>
    {/*
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
        <br></br>I'm proud of</h1>*/}
        
          <div className="webdev-container">

            <section className="space-project" >
            <h2 >Space Tourism Website</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/space-travel-website/#/">
              <img className="project-preview" src={spacewebsite} alt="a screenshot of space tourism website"/>
              </a>
              <div className='web-description'><p>Multi-page, mobile-first design, using React Router, Create React App, React Hooks, CSS flexbox and grid, and CSS animations. This was a Frontend Mentor challenge; I was provided with the Figma, then built the site from scratch with no repos or codebase. </p>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/space-travel-website/#/"><button target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/space-travel-website/#/">View Here</button></a></div>
            </div> 
              
            </section>

            
            <section className="weather-project"  >
            <h2>Weather Website</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/weather-app/">
              <img className="project-preview" src={weatherapp} alt="a screenshot of the weather app"/>
              </a>
              <div className='web-description'>
              <p>Working with APIs and JSON, I created a vanilla Javascript weather app. This app uses the Google Places API, the Open Weather App API. Users can enter in the name of any city or state. I also illustrated the weather icons and wrote logic that tells the icons to change depending on the weather.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/weather-app/">
              <button >View Here</button></a>
              </div>
            </div>
              
            </section>

            <section className="tictac-project" >
            <h2 >Tic Tac Toe</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/marys-tic-tac-toe/" alt="a screenshot of tic tac toe">
              <img className="project-preview" src={tictactoe}/>
              </a>
              <div className='web-description'>
              <p>This project was built using React compiled through Vite. I used React Hooks to provide functionality for player names and to dynamically show who's turn it is. I also had a lot of fun with this one, using CSS gradients and creating a grainy effect.</p>
              <a  target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/marys-tic-tac-toe/"><button>View Here</button></a>
            </div>
            </div>

            </section>

            <section className="todo-project" >
            <h2 >To-Do List App</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/to-do-list/">
              <img className="project-preview" src={todolist} alt="a screenshot of to do list project"/>
              </a>
              <div className='web-description'>
              <p>This project was built using React/React Hooks. Users can enter in a to-do list item, mark it complete, and clear completed to-dos. Again, here, I added a bit of fun with my own personal touch by making it look like an actual piece of paper.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/to-do-list/">
              <button >View Here</button></a>
              </div>
            </div>
            </section>

            <section className="doodle-project" target="_blank" rel="noopener noreferrer">
            <h2 >Doodle Jump Clone (with added features)</h2>
            <div>
              <a>
              <img className="project-preview" src={doodlejump} alt="a screenshot of a remade doodle jump game"/>
              </a>
            
              <div className='web-description'>
              <p>This project I was really excUsing Vanilla Javascript, I honed my skills with arrays, array methods, scope, setInterval() and more. I also drew some funny extra characters that you can play as rather than the original Doodle.</p>
              <a>
              <button>View Here</button>
              </a>
              </div>
            </div>
            <div className="doodle-links">
              <a href="https://marywilder.github.io/doodle-jump/" target="_blank" rel="noopener noreferrer" className="doodle-link">Mobile Version</a>
              <a href="https://marywilder.github.io/doodle-jump-desktop/" target="_blank" rel="noopener noreferrer" className="doodle-link">Desktop Version</a>
              
              </div>
            </section>
            
            <section className="accordian-project" >
            <h2 >Animated Accordion Q&A</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/faq-accordion-card-main/">
              <img className="project-preview" src={accordian} alt="a screenshot of accordian project"/>
              </a>
              <div className='web-description'>
              <p>Another challenge from Frontend Mentor; built using Vanilla Javascript, event listeners, mutating DOM, and CSS animations.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://marywilder.github.io/faq-accordion-card-main/">
              <button >View Here</button>
              </a>
              </div>
              </div>

            </section>

            <section className="portfolio-project" target="_blank" rel="noopener noreferrer">
            <h2 >Portfolio Website</h2>
            <p>This is the website you are on as we speak! Built mobile-first using React, React Router, React Hooks, CSS Radial Gradients, CSS flexbox. Created a responsive mobile navbar that includes CSS animations and transitions. I enjoyed combining different radial gradients and CSS filter() to create the site’s aesthetic.</p>
            </section>
          </div> 
          
        </section>
       
  )
}

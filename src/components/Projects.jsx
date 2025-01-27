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


export default function Projects() {
  return (
    <section className="design-page">
        <Subnav />
            <section className="product-design-page">
                <h1 >product design!</h1>

                <p>While earing my Masters in Professional Studies at MICA, I benefitted from working on many high level projects with my collegues. Here are a few of my favorite! </p>

                <div className="design-project">
                    <h2>Starbucks Case Study</h2>
                    

                    
                </div>

                <div className="design-project">
                <h2>Shopify Case Study</h2>
                    <img />

                    
                </div>

        </section>

    </section>
  )
}

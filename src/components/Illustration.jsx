import React from 'react'
import Subnav from './Subnav';
import appleorchard from '../assets/appleorchard_.jpg'
import birdwithbanjo from '../assets/birdwithbanjo_.jpg';
import owls from '../assets/owls_.jpg';
import wolf from '../assets/wolf.jpg';
import treeandcat from '../assets/treeandcat_.jpg';
import strawberries from '../assets/strawberriesinsky_.jpg';
import mountrainier from '../assets/mountrainier_.jpg';
import joshuatree from '../assets/joshuatree_.jpg';
import grandcanyon from '../assets/grandcanyon_.jpg';
import yosemite from '../assets/yosemite_.jpg';
import smokies from '../assets/smokymountains_.jpg';

export default function Illustration() {
  return (
    <section className="illustration-page">
      <Subnav/>
        <section className="illustration-section">
 
            <div className="illustration-intro">
                <p>Drawing has always been something that brings me a lot of joy! I've worked with clients and commissions over the years, and have been a top seller on Society6, as well as run and manage an Etsy store selling art prints on the side.</p>
            </div>
                <div className="art-project">
                    <div><h2>National Parks Series</h2>
                    <p>I've always loved the style of retro travel posters, and thought it would be fun to do my own groovy style of posters, which led me to illustrating about 30 of the National Parks!</p>
                    </div>
                    <div className="artworkimages">
                    <img src={mountrainier}/>
                    <img src={grandcanyon}/>
                    <img src={yosemite}/>
                    <img src={joshuatree}/>
                    <img src={smokies}/>
                    </div>
                    
                </div>

                <div className="art-project">
                <div>
                <h2>More Stuff</h2>
                </div>
                <div className="artworkimages">
                <img src={appleorchard} />
                    <img src={wolf}/>
                    <img src={treeandcat} />
                    <img src={strawberries} id="strawberries"/>
                    <img src={owls}/>
                    <img src={birdwithbanjo}/>
                    </div>

                    
                </div>
                <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer"><button>Etsy Store</button></a>

        </section>


    </section>
  )
}

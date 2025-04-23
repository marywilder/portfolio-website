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
import flyer from '../assets/hotelflyer.png';
import postcard from '../assets/postcard.png';

export default function Illustration() {
  return (
    <section className="illustration-page">
      <Subnav/>
        <section className="illustration-section">
 
            <div className="illustration-intro">
                <p>Drawing and design have always been my happy place. I’ve done commissions, been a top seller on Society6, and run an Etsy shop for my art prints. At Paper Skyscraper, I brought that same creativity to the marketing team - designing fun, eye-catching assets for both print and digital campaigns.</p>
            </div>
            
                <div className="art-project">
                    <div><h2>National Parks Series</h2>
                    <p>I've always loved the style of retro travel posters, and thought it would be fun to do my own groovy style of posters, which led me to illustrating about 30 of the National Parks!</p>
                    </div>
                    <div className="artworkimages">
                    <img src={mountrainier}alt="illustrated poster of mount rainier national park, with fields of flowers and a path leading to the mount rainier, and clouds in the background with 'Mount Rainer national park' written on the bottom of the poster."/>
                    <img src={grandcanyon} alt="illustrated poster of grand canyon national park, with the iconic view of the grand canyon and gorge running through it at sunset. 'Grand Canyon national park' written on the bottom of the poster."/>
                    <img src={yosemite} alt="illustrated poster of yosemite national park, with the view of yosemite falls. 'Yosemite National Park' written on the bottom of the poster. "/>
                    <img src={joshuatree} alt="illustrated poster of joshua tree national park, with a joshua tree and some others in the background, at sunset. 'Joshua National Park' written on the bottom of the poster. " />
                    <img src={smokies} alt="illustrated poster of great smokey mountain national park, with the view of a wooded path, with flowers, and overlooking the smokey mountains. 'Great Smokey Mountains National Park' written on the bottom of the poster. "/>
                    </div>
                    
                </div>
                <div className="art-project">
              <div><h2>Paper Skyscraper</h2>
              <p>As the e-commerce and marketing manager at Paper Skyscraper, I designed many marketing materials - digital and physical.
              </p>
              <h3>Local Guide</h3>
              <p>
              Following the launch of our new location in Uptown Charlotte, we developed a campaign to partner with local hotels and attract tourists to our gift shop. I designed a promotional flyer featuring a custom illustrated map in Adobe Illustrator to help drive foot traffic to the store.
              </p>
              </div>
              <div className="art-project">
              <div className="artworkimages">
                <img src={flyer} className="pskyimg"/>
              </div>
              </div>
              <h3>Unboxing Joy</h3>
              <p>To boost online sales and foster customer loyalty, I designed a branded postcard to include in shipped orders—creating a thoughtful unboxing experience that delighted customers and encouraged repeat purchases.</p> 
              <div className="artworkimages">
                <img src={postcard} className="pskyimg"/>
              </div>
              </div>
         
                <div className="art-project">
                <div>
                <h2>More Stuff</h2>
                </div>
                <div className="artworkimages">
                <img src={appleorchard} alt="a drawing of a colorful apple orchard, with a bluebird flying across the sky, a worm in an apple in a tree, a cat peeking through the leaves of another tree, a duck sitting under a tree eating apples, and a person picking apples."/>
                    <img src={wolf} alt="a drawing of a black wolf sitting on rocks over looking a forest, playing a ukulele with a book sitting below him titled 'mele hula'"/>
                    <img src={treeandcat} alt="a drawing of a cat reading a book titled 'feline field guide', sitting between two large sequoia trees."/>
                    <img src={strawberries} id="strawberries" alt="an imagitive illustration of different strawberries floating in the clouds. objects floating around them include: daisies, a rocket ship, a cup of coffee, a house with a chimney, a turtle wearing a top hat, a muffin and a telephone."/>
                    <img src={owls} alt="an illustrated poster of different kinds of owls: great horned owl, barn owl, snowy owl, spotted owl, whiskered screech owl, saw whet owl, northern hawk owl, long earred owl and elf owl."/>
                    <img src={birdwithbanjo} alt="a bluebird playing the banjo with rounded glasses and top hat, sitting on a tree branch, overlooking a forest of hibernating trees and a pink sunset"/>
                    </div>

                    
                </div>
                <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer"><button>Etsy Store</button></a>

        </section>


    </section>
  )
}

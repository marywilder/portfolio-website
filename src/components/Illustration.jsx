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
import brochure from '../assets/brochureee.jpg';
import brochure2 from '../assets/brochureee (1).jpg';
import brochuremockup from '../assets/Untitled_Artwork (1).jpg';
import greaselockad from '../assets/548200-Full-Page-Ad-Final_page-0001.jpg';
import bssthumbnail1 from '../assets/590900 - Web -Graphic - SharePoint Icons_page-0001.jpg';
import bssthumbnail2 from '../assets/590900 - Web -Graphic - SharePoint Icons_page-0002.jpg';
import bssthumbnail3 from '../assets/590900 - Web -Graphic - SharePoint Icons_page-0003.jpg';
import bssthumbnail4 from '../assets/590900 - Web -Graphic - SharePoint Icons_page-0004.jpg';

export default function Illustration() {
  return (
    <section className="illustration-page">
      <Subnav/>
        <section className="illustration-section">
            <div className="illustration-intro">
              
            </div>
              <div>
                <h2>Brooks Safety Solutions</h2>
                <p>As a Digital Designer at Brooks, I wore many hats across multiple different brands - designing hundreds of digital and print assets, from UI elements to massive tradeshow banners.In addition to graphic design, I also doubled as a UX + Front-end specialist, conducting UX audits of our sites,and building responsive front-end code.
              </p>
                <div className="art-project art-project--row">
                  <div className="artworkimages">
                <img src={greaselockad} className="pskyimg"/>
              </div>
                <div className="artworkimages">
                <img src={bssthumbnail1} className="pskyimg"/>
              </div>
              <div className="artworkimages">
                <img src={bssthumbnail2} className="pskyimg"/>
              </div>
              <div className="artworkimages">
                <img src={bssthumbnail3} className="pskyimg"/>
              </div>
              <div className="artworkimages">
                <img src={bssthumbnail4} className="pskyimg"/>
              </div>
              </div>
                
              </div>
              <div><h2>Paper Skyscraper</h2>
              <p>As the e-commerce and marketing manager at Paper Skyscraper, I designed many marketing materials - digital and physical.
              </p>
              </div>
              
              
              <div className="art-project art-project--row">
                <div className="artworkimages">
                <img src={flyer} className="pskyimg"/>
              </div>
              <div className="artworkimages">
                <img src={postcard} className="pskyimg"/>
              </div>
              </div>
                <div className="art-project">
                    <div>
                    <h2>Digital Illustrations</h2>
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
              
              </div>
                <div className="art-project">
             
                
                <div className="artworkimages">
                <img src={appleorchard} alt="a drawing of a colorful apple orchard, with a bluebird flying across the sky, a worm in an apple in a tree, a cat peeking through the leaves of another tree, a duck sitting under a tree eating apples, and a person picking apples."/>
                    <img src={wolf} alt="a drawing of a black wolf sitting on rocks over looking a forest, playing a ukulele with a book sitting below him titled 'mele hula'"/>
                    <img src={treeandcat} alt="a drawing of a cat reading a book titled 'feline field guide', sitting between two large sequoia trees."/>
                    <img src={strawberries} id="strawberries" alt="an imagitive illustration of different strawberries floating in the clouds. objects floating around them include: daisies, a rocket ship, a cup of coffee, a house with a chimney, a turtle wearing a top hat, a muffin and a telephone."/>
                    <img src={owls} alt="an illustrated poster of different kinds of owls: great horned owl, barn owl, snowy owl, spotted owl, whiskered screech owl, saw whet owl, northern hawk owl, long earred owl and elf owl."/>
                    <img src={birdwithbanjo} alt="a bluebird playing the banjo with rounded glasses and top hat, sitting on a tree branch, overlooking a forest of hibernating trees and a pink sunset"/>
                    </div>

                    
                </div>
                <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer"><button>My Shop</button></a>

        </section>


    </section>
  )
}

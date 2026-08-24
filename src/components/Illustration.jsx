import React, { useState } from 'react'
import Subnav from './Subnav';
import caretIcon from '../assets/^.svg';
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
import employeethumbnails from '../assets/Employee-Thumbnails.png';
import pullupbanners from '../assets/Pull-Up-Banners.png';
import brooksbanner from '../assets/10x10banner.png';
import wscsheet from '../assets/479250_Print_ASSE-Device_Types_Reference_Sheet.png';
import brooksemail from '../assets/Brooks-email.mp4';
import appleOrchardAnimation from '../assets/apple-orchard-animation.mp4';
import lennyVideo from '../assets/lenny_video.mp4';

const bssImages = [
  pullupbanners,
  wscsheet,
  greaselockad,
  employeethumbnails,
  brooksbanner,
  { src: brooksemail, type: 'video', alt: "Brooks email design", imgStyle: { borderRadius: '1.75rem' } },
];

const parkImages = [
  { src: mountrainier, alt: "illustrated poster of mount rainier national park" },
  { src: grandcanyon, alt: "illustrated poster of grand canyon national park" },
  { src: yosemite, alt: "illustrated poster of yosemite national park" },
  { src: joshuatree, alt: "illustrated poster of joshua tree national park" },
  { src: smokies, alt: "illustrated poster of great smokey mountains national park" },
];

const drawingImages = [
  { src: appleorchard, alt: "a drawing of a colorful apple orchard with a bluebird, cat, duck, and person picking apples" },
  { src: wolf, alt: "a drawing of a black wolf sitting on rocks playing a ukulele" },
  { src: treeandcat, alt: "a drawing of a cat reading a book between two large sequoia trees" },
  { src: strawberries, alt: "an illustration of strawberries floating in the clouds with whimsical objects" },
  { src: owls, alt: "an illustrated poster of different kinds of owls" },
  { src: birdwithbanjo, alt: "a bluebird playing the banjo on a tree branch overlooking a forest" },
];

const makeSlideStyle = (i, activeIndex, total) => {
  let offset = i - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  const absOffset = Math.abs(offset);
  return {
    top: '50%',
    left: `calc(50% + ${offset * 38}%)`,
    transform: `translateX(-50%) translateY(-50%) scale(${absOffset === 0 ? 1 : 0.50})`,
    opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.20 : 0,
    zIndex: absOffset === 0 ? 3 : 2,
    pointerEvents: absOffset === 0 ? 'auto' : 'none',
    transition: 'left 400ms ease, transform 400ms ease, opacity 400ms ease',
  };
};

function Carousel({ images, altPrefix }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);
  const caretStyle = { '--caret-icon': `url(${caretIcon})` };

  return (
    <>
      <div className="carousel">
        <button className="carousel__btn" onClick={prev} aria-label="Previous image">
          <span className="carousel__arrow carousel__arrow--prev" style={caretStyle} aria-hidden="true"></span>
        </button>
        <div className="carousel__viewport">
          {images.map((img, i) => (
            img.type === 'video' ? (
              <video
                key={i}
                src={img.src}
                className="carousel__slide"
                style={{ ...makeSlideStyle(i, index, total), ...(img.imgStyle || {}) }}
                aria-label={img.alt || `${altPrefix} ${i + 1}`}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={i}
                src={img.src || img}
                className="carousel__slide"
                style={{ ...makeSlideStyle(i, index, total), ...(img.imgStyle || {}) }}
                alt={img.alt || `${altPrefix} ${i + 1}`}
              />
            )
          ))}
        </div>
        <button className="carousel__btn" onClick={next} aria-label="Next image">
          <span className="carousel__arrow carousel__arrow--next" style={caretStyle} aria-hidden="true"></span>
        </button>
      </div>
      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default function Illustration() {
  return (
    <section className="illustration-page">
      <Subnav/>
        <section className="illustration-section">
            <div className="illustration-intro"></div>

              <div>
                <h2>Brooks Safety Solutions</h2>
                <h5>Digital Designer</h5>
                <p>I wore many hats across multiple different brands - designing hundreds of digital and print assets, from UI elements to massive tradeshow banners. In addition to graphic design, I also doubled as a UX + Front-end specialist, conducting UX audits of our sites, and building responsive front-end code.
              </p>
                <Carousel images={bssImages} altPrefix="Brooks Safety Solutions design" />
              </div>

              <div><h2>Paper Skyscraper</h2>
              <h5>E-commerce and Marketing Manager</h5>
              <p>At Paper Skyscraper, my job was to grow and develop our Shopify website. In addition to improving the UX & KPIs, I designed many marketing materials - digital and physical.
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

              <div><h2>Animations</h2></div>

              <div className="art-project art-project--row animations-row">
                <div className="artworkimages animations-item lenny-animation-item">
                  <video src={lennyVideo} className="animation-video" autoPlay loop muted playsInline aria-label="Lenny the cat animation"/>
                </div>
                <div className="artworkimages animations-item apple-orchard-item">
                  <video src={appleOrchardAnimation} className="animation-video" autoPlay loop muted playsInline aria-label="apple orchard animation"/>
                </div>
              </div>

              <div className="art-project">
                <div>
                  <h2 style={{textAlign: 'center'}}>Digital Illustrations</h2>
                  <p>A collection of digital illustrations I've made over the years - including personal work, commissions, and pieces sold through my online shop.</p>
                  <h5>National Parks Collection</h5>
                </div>
                <Carousel images={parkImages} altPrefix="National park illustration" />
              </div>

              <div className="art-project">
                <Carousel images={drawingImages} altPrefix="Digital drawing" />
              </div>

              <a href="https://www.etsy.com/shop/MaryWilderStudio" target="_blank" rel="noopener noreferrer"><button>My Shop</button></a>

        </section>
    </section>
  )
}

import React from 'react';

import figma from '../assets/figma.svg';
import vscodeIcon from '../assets/vscode-svgrepo-com.svg';
import viteIcon from '../assets/vite-svgrepo-com.svg';
import reactIcon from '../assets/react-1-logo-svgrepo-com.svg';
import photoshopIcon from '../assets/photoshop-cc-logo-svgrepo-com.svg';
import javascriptIcon from '../assets/javascript-svgrepo-com.svg';
import indesignIcon from '../assets/indesign-cc-logo-svgrepo-com.svg';
import html5Icon from '../assets/html-5-svgrepo-com.svg';
import css3Icon from '../assets/css-3-svgrepo-com.svg';
import claudeIcon from '../assets/claude.webp';
import illustratorIcon from '../assets/adobe-illustrator-cc-logo-svgrepo-com.svg';
import procreateIcon from '../assets/procreate.jpeg';
import dreamsIcon from '../assets/icon-dreams.png';

import extravaganza from '../assets/extravaganza screenshot.jpg';
import tbdprototype from '../assets/alignment-comparison-tbd.mp4';
import starbucksgif from '../assets/setprefs.mp4';
import prototypePhone from '../assets/prototype-phone.png';
import letterboxd from '../assets/letterboxdprototype.mp4';

import lennyVideo from '../assets/lenny_video.mp4';
import appleOrchardAnimation from '../assets/apple-orchard-animation.mp4';

import flyer from '../assets/hotelflyer.png';
import postcard from '../assets/postcard.png';

import spacewebsite from '../assets/Screenshot (7).png';
import tictactoe from '../assets/Screenshot (4).png';
import todolist from '../assets/Screenshot (8).png';
import weatherapp from '../assets/Screenshot (9).png';
import doodlejump from '../assets/Screenshot (11).png';

import pullupbanners from '../assets/Pull-Up-Banners.png';
import wscsheet from '../assets/479250_Print_ASSE-Device_Types_Reference_Sheet.png';
import greaselockad from '../assets/548200-Full-Page-Ad-Final_page-0001.jpg';
import employeethumbnails from '../assets/Employee-Thumbnails.png';
import brooksbanner from '../assets/10x10banner.png';
import brooksemail from '../assets/Brooks-email.mp4';

import mountrainier from '../assets/mountrainier_.jpg';
import grandcanyon from '../assets/grandcanyon_.jpg';
import yosemite from '../assets/yosemite_.jpg';
import joshuatree from '../assets/joshuatree_.jpg';
import smokies from '../assets/smokymountains_.jpg';

import appleorchard from '../assets/appleorchard_.jpg';
import wolf from '../assets/wolf.jpg';
import treeandcat from '../assets/treeandcat_.jpg';
import strawberries from '../assets/strawberriesinsky_.jpg';
import owls from '../assets/owls_.jpg';
import birdwithbanjo from '../assets/birdwithbanjo_.jpg';

export const TAGS = ['UX', 'Development', 'Case Study', 'Graphic Design', 'Branding', 'Animation', 'Illustration', 'Just for Fun'];

export const TAG_COLORS = {
  'UX': 'var(--dark-blue)',
  'Development': 'var(--dark-green)',
  'Graphic Design': 'var(--dark-orange)',
  'Illustration': 'var(--darkgreen-yellow)',
  'Animation': 'var(--dark-pink)',
  'Case Study': 'var(--dark-blue)',
  'Branding': 'var(--dark-orange)',
  'Just for Fun': 'var(--light-pink)',
};

export const TOOL_ICONS = {
  figma: { src: figma, alt: 'Figma' },
  vscode: { src: vscodeIcon, alt: 'VSCode' },
  vite: { src: viteIcon, alt: 'Vite' },
  react: { src: reactIcon, alt: 'React' },
  photoshop: { src: photoshopIcon, alt: 'Photoshop' },
  javascript: { src: javascriptIcon, alt: 'Javascript' },
  indesign: { src: indesignIcon, alt: 'InDesign' },
  html5: { src: html5Icon, alt: 'HTML' },
  css3: { src: css3Icon, alt: 'CSS' },
  claude: { src: claudeIcon, alt: 'Claude' },
  illustrator: { src: illustratorIcon, alt: 'Adobe Illustrator' },
  procreate: { src: procreateIcon, alt: 'Procreate' },
  dreams: { src: dreamsIcon, alt: 'Procreate Dreams' },
};

const ToolIcons = ({ tools }) => (
  <div className="project-tools-row">
    <span className="project-tools__label">Tools used:</span>
    <div className="project-tools">
      {tools.map(tool => (
        <div className="tool-icon" key={tool}>
          <img src={TOOL_ICONS[tool].src} alt={TOOL_ICONS[tool].alt} />
          <span className="tool-icon__tooltip">{TOOL_ICONS[tool].alt}</span>
        </div>
      ))}
    </div>
  </div>
);

const bssImages = [
  pullupbanners,
  wscsheet,
  greaselockad,
  employeethumbnails,
  brooksbanner,
  { src: brooksemail, type: 'video', alt: 'Brooks email design', imgStyle: { borderRadius: '1.75rem' } },
];

const parkImages = [
  { src: mountrainier, alt: 'illustrated poster of mount rainier national park' },
  { src: grandcanyon, alt: 'illustrated poster of grand canyon national park' },
  { src: yosemite, alt: 'illustrated poster of yosemite national park' },
  { src: joshuatree, alt: 'illustrated poster of joshua tree national park' },
  { src: smokies, alt: 'illustrated poster of great smokey mountains national park' },
];

const drawingImages = [
  { src: appleorchard, alt: 'a drawing of a colorful apple orchard with a bluebird, cat, duck, and person picking apples' },
  { src: wolf, alt: 'a drawing of a black wolf sitting on rocks playing a ukulele' },
  { src: treeandcat, alt: 'a drawing of a cat reading a book between two large sequoia trees' },
  { src: strawberries, alt: 'an illustration of strawberries floating in the clouds with whimsical objects' },
  { src: owls, alt: 'an illustrated poster of different kinds of owls' },
  { src: birdwithbanjo, alt: 'a bluebird playing the banjo on a tree branch overlooking a forest' },
];

export const bssCarouselImages = bssImages;
export const parkCarouselImages = parkImages;
export const drawingCarouselImages = drawingImages;

export const PROJECTS = [
  {
    id: 'extravaganza',
    order: 1,
    title: 'Extravaganza Events',
    tags: ['Development', 'UX', 'Branding', 'Animation'],
    media: { type: 'image', src: extravaganza, alt: 'screenshot of extravaganza events site' },
    description: (
      <p>Full redesign and rebuild for a local events company, focused on rethinking the information architecture, clarifying navigation and calls to action, and improving organic visibility. Built to be easy for the client to maintain going forward.</p>
    ),
    tools: ['figma', 'html5', 'css3', 'vscode', 'javascript', 'claude'],
    links: [{ href: 'https://www.extravaganzaevents.com', label: 'View Here' }],
  },
  {
    id: 'tbd',
    order: 2,
    title: 'TBD Product Comparison App',
    tags: ['UX', 'Development', 'Case Study', 'Branding'],
    media: { type: 'video', variant: 'phone', src: tbdprototype, alt: 'Product comparison app prototype' },
    description: (
      <p>TBD is a personalized product comparison app designed to cut through the noise of online shopping. Built with a team of four during my graduate program at MICA, TBD guides users toward confident, value-aligned purchase decisions. After wrapping up the UX process, I built the responsive case study site itself using HTML and CSS, working alongside Claude Code to help speed up development and polish the front end.</p>
    ),
    tools: ['figma', 'html5', 'css3', 'vscode', 'claude'],
    links: [{ href: 'https://marywilder.github.io/tbd_case_study/#/', label: 'View the case study' }],
  },
  {
    id: 'brooks',
    order: 3,
    title: 'Brooks Safety Solutions',
    subtitle: 'Digital Designer',
    tags: ['Graphic Design', 'Branding', 'Development', 'UX'],
    media: { type: 'carousel', images: bssImages, altPrefix: 'Brooks Safety Solutions design' },
    description: (
      <p>I wore many hats across multiple different brands - designing hundreds of digital and print assets, from UI elements to massive tradeshow banners. In addition to graphic design, I also doubled as a UX + Front-end specialist, conducting UX audits of our sites, and building responsive front-end code.</p>
    ),
    tools: ['figma', 'photoshop', 'indesign', 'illustrator'],
  },
  {
    id: 'starbucks',
    order: 4,
    title: 'Starbucks: New Feature Set',
    tags: ['UX', 'Development', 'Case Study'],
    media: { type: 'phone-video', src: starbucksgif, frame: prototypePhone, alt: 'taste preferences page for starbucks app, displaying how settings are selected through checkboxes' },
    description: (
      <p>During my MPS program, my design team of 3 worked to create a new feature set for an existing product. We chose to make some improvements to the Starbucks app, and we went through the full product design process from <b>wireframing</b> and <b>prototyping</b> to <b>usability testing.</b> After multiple design iterations, we landed on features that address the <b>dietary uncertainty users face</b> in the Starbucks app. I then built the responsive case study website myself using HTML and CSS, with media queries, smooth scrolling, and animations.</p>
    ),
    tools: ['figma', 'html5', 'css3', 'vscode'],
    links: [{ href: 'https://marywilder.github.io/starbucks-case-study/#/', label: 'View the case study' }],
  },
  {
    id: 'letterboxd',
    order: 5,
    title: 'Letterboxd: New Feature Set',
    tags: ['UX', 'Case Study', 'Animation'],
    media: { type: 'video', variant: 'phone', src: letterboxd, alt: 'letterboxd prototype' },
    description: (
      <p>As a Letterboxd user, I noticed that the platform lacks personalized recommendations, making it harder for users to organically discover new movies. To address this, I designed a "Film Finder" quiz, a personalized "Film DNA" feature, and improved movie suggestions to <b>enhance user engagement and discovery.</b> Through this project, I conducted <b>user research</b>, created <b>wireframes</b> that iterated through multiple designs, created a fully-functioning <b>prototype</b>, explored <b>UX choreography</b> ideas, and conducted <b>Usability Testing.</b> This project was part of my master's program.</p>
    ),
    tools: ['figma'],
    links: [{ href: 'https://www.figma.com/proto/mOafiRr4yObVnkLl3kuKAz/MUXD5103.02?node-id=879-7633&t=GVj8JSBW43lkcfle-0&scaling=scale-down-width&content-scaling=fixed&page-id=857%3A1541&starting-point-node-id=879%3A7633', label: 'View the case study' }],
  },
  {
    id: 'lenny',
    order: 6,
    title: 'Lenny',
    tags: ['Animation', 'Just for Fun', 'Illustration'],
    minimal: true,
    media: { type: 'video', src: lennyVideo, alt: 'Lenny the cat animation' },
    tools: ['dreams'],
  },
  {
    id: 'apple-orchard-animation',
    order: 7,
    title: 'Apple Orchard',
    tags: ['Animation', 'Just for Fun', 'Illustration'],
    minimal: true,
    media: { type: 'video', src: appleOrchardAnimation, alt: 'apple orchard animation' },
    tools: ['dreams'],
  },
  {
    id: 'paper-skyscraper',
    order: 8,
    title: 'Paper Skyscraper',
    subtitle: 'E-commerce and Marketing Manager',
    tags: ['Graphic Design', 'Branding', 'Development'],
    media: {
      type: 'row',
      items: [
        { src: flyer, alt: 'Paper Skyscraper hotel flyer design' },
        { src: postcard, alt: 'Paper Skyscraper postcard design' },
      ],
    },
    description: (
      <p>At Paper Skyscraper, my job was to grow and develop our Shopify website. In addition to improving the UX & KPIs, I designed many marketing materials - digital and physical.</p>
    ),
    tools: ['photoshop', 'indesign', 'illustrator'],
  },
  {
    id: 'space-tourism',
    order: 9,
    title: 'Space Tourism Website',
    tags: ['Development'],
    media: { type: 'image', src: spacewebsite, alt: 'a screenshot of space tourism website' },
    description: (
      <p>Multi-page, mobile-first design, using React Router, Create React App, React Hooks, CSS flexbox and grid, and CSS animations. This was a Frontend Mentor challenge; I was provided with the Figma, then built the site from scratch with no repos or codebase.</p>
    ),
    tools: ['html5', 'css3', 'vscode', 'react', 'javascript'],
    links: [{ href: 'https://marywilder.github.io/space-travel-website/#/', label: 'View Here' }],
  },
  {
    id: 'tic-tac-toe',
    order: 10,
    title: 'Tic Tac Toe',
    tags: ['Development'],
    media: { type: 'image', src: tictactoe, alt: 'a screenshot of tic tac toe' },
    description: (
      <p>This project was built using React compiled through Vite. I used React Hooks to provide functionality for player names and to dynamically show who's turn it is. I also had a lot of fun with this one, using CSS gradients and creating a grainy effect.</p>
    ),
    tools: ['html5', 'css3', 'vscode', 'vite', 'javascript'],
    links: [{ href: 'https://marywilder.github.io/marys-tic-tac-toe/', label: 'View Here' }],
  },
  {
    id: 'todo-list',
    order: 11,
    title: 'To-Do List App',
    tags: ['Development', 'Illustration'],
    media: { type: 'image', src: todolist, alt: 'a screenshot of to do list project' },
    description: (
      <p>This project was built using React/React Hooks. Users can enter in a to-do list item, mark it complete, and clear completed to-dos. Again, here, I added a bit of fun with my own personal touch by making it look like an actual piece of paper.</p>
    ),
    tools: ['html5', 'css3', 'vscode', 'react', 'javascript'],
    links: [{ href: 'https://marywilder.github.io/to-do-list/', label: 'View Here' }],
  },
  {
    id: 'weather-app',
    order: 12,
    title: 'Weather Website',
    tags: ['Development'],
    media: { type: 'image', src: weatherapp, alt: 'a screenshot of the weather app' },
    description: (
      <p>Working with APIs and JSON, I created a vanilla Javascript weather app. This app uses the Google Places API, the Open Weather App API. Users can enter in the name of any city or state. I also illustrated the weather icons and wrote logic that tells the icons to change depending on the weather.</p>
    ),
    tools: ['html5', 'css3', 'vscode', 'javascript'],
    links: [{ href: 'https://marywilder.github.io/weather-app/', label: 'View Here' }],
  },
  {
    id: 'doodle-jump',
    order: 13,
    title: 'Doodle Jump Clone (with added features)',
    tags: ['Development'],
    media: { type: 'image', src: doodlejump, alt: 'a screenshot of a remade doodle jump game' },
    description: (
      <p>Using Vanilla Javascript, I honed my skills with arrays, array methods, scope, setInterval() and more. I also drew some funny extra characters that you can play as rather than the original Doodle.</p>
    ),
    tools: ['html5', 'css3', 'vscode', 'javascript'],
    links: [
      { href: 'https://marywilder.github.io/doodle-jump/', label: 'Mobile Version' },
      { href: 'https://marywilder.github.io/doodle-jump-desktop/', label: 'Desktop Version' },
    ],
  },
  {
    id: 'national-parks',
    order: 14,
    title: 'National Parks Illustration Collection',
    tags: ['Illustration', 'Graphic Design'],
    media: { type: 'carousel', images: parkImages, altPrefix: 'National park illustration' },
    description: (
      <p>A collection of digital illustrations I've made over the years - including personal work, commissions, and pieces sold through my online shop.</p>
    ),
    tools: ['illustrator', 'procreate'],
    links: [{ href: 'https://www.etsy.com/shop/MaryWilderStudio', label: 'My Shop' }],
  },
  {
    id: 'digital-illustrations',
    order: 15,
    title: 'Illustrations',
    tags: ['Illustration'],
    media: { type: 'carousel', images: drawingImages, altPrefix: 'Digital drawing' },
    tools: ['photoshop', 'illustrator', 'procreate'],
    links: [{ href: 'https://www.etsy.com/shop/MaryWilderStudio', label: 'My Shop' }],
  },
  {
    id: 'portfolio-site',
    order: 16,
    title: 'Portfolio Website',
    hidden: true,
    tags: ['Development'],
    media: null,
    description: (
      <p>This is the website you are on as we speak! Built mobile-first using React, React Router, React Hooks, CSS Radial Gradients, CSS flexbox. Created a responsive mobile navbar that includes CSS animations and transitions. I enjoyed combining different radial gradients and CSS filter() to create the site's aesthetic.</p>
    ),
  },
];

export { ToolIcons };

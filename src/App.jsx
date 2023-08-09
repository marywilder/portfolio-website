
import { useState } from 'react'
import {Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  
  return (
  <div className="app">
    <Navbar />
   <div className="pink-gradient"></div>
      <div className="blue-gradient"></div>
      <div className="green-gradient"></div>
      <div className="orange-gradient"></div>
      <div className="yellow-gradient"></div>
      <div className="blue-gradient-2"></div>
      <div className="shape"></div>
      <div className="triangle-svg"></div>
      <div className="square-svg"></div>
      <div className="triange-svg2"></div>
      <div className="square-svg2"></div>
      <div className="heart-svg"></div>
      <div className="star-svg"></div>
      <div className="flower-svg"></div>




<Routes>
    <Route path="/portfolio-website/"element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Projects />} />
    <Route path="/" element={<Home />} />

        </Routes>

  <footer><div className="linkedin" target="_blank" rel="noopener noreferrer"></div>get in touch<div className="email"></div> marywilder717@gmail.com</footer> 
  </div>
  )
}

export default App

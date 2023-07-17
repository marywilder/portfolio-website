
import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  
  return (
  <div>
    <Navbar />
   <div className="pink-gradient"></div>
      <div className="blue-gradient"></div>
      <div className="green-gradient"></div>
      <div className="orange-gradient"></div>
      <div className="yellow-gradient"></div>
      <div className="blue-gradient-2"></div>



<Routes>
    <Route path="/"element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        </Routes>
  </div>
  )
}

export default App

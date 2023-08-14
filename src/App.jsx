
import {Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'

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
      




<Routes>
    <Route path="/portfolio-website/"element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Projects />} />
    <Route path="/" element={<Home />} />

        </Routes>

  <footer><div className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mary-wilder-ab13b5285/"></div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mary-wilder-ab13b5285/">get in touch</a><div className="email"></div> marywilder717@gmail.com</footer> 
  </div>
  )
}

export default App

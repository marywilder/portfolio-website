
import {Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'

import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import cloud1 from './assets/cloud1.svg';
import cloud2 from './assets/cloud2.svg';
import cloud3 from './assets/cloud3.svg';
import cloud4 from './assets/cloud4.svg';
import sun from './assets/sun.svg';

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
    
<img src={sun} className="sun-desktop" alt="" aria-hidden="true" />
<img src={cloud1} className="cloud1" alt="an illustrated cloud floating from left to right across the upper screen"/>
<img src={cloud2} className="cloud2" alt="an illustrated cloud floating right to left across the upper screen"/>
<img src={cloud3} className="cloud3" alt="an illustrated cloud floating left to right across the lower screen"/>
<img src={cloud4} className="cloud4" alt="an illustrated cloud floating right to left across the lower screen"/>



<Routes>
    <Route path="/portfolio-website/"element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Portfolio/>} />
    <Route path='illustration' element={<Portfolio />} />
    <Route path='productdesign' element={<Portfolio />}/>
    <Route path='webdev' element={<Portfolio/>}/>
    <Route path="/" element={<Home />} />

</Routes>

  <footer>
    <a className="linkedincontainer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mary-wilder-ab13b5285/"><div className="linkedin"></div> </a>
    <a className="emailcontainer" href="mailto:marywilder717@gmail.com">
  <div className="email"></div></a>
  let's work together!
   </footer>

  </div>
  )
}

export default App

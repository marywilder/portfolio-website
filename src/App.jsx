
import {Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'

import './App.css'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/Navbar'
import Illustration from './components/Illustration'
import Productdesign from './components/Productdesign'
import Webdev from './components/Webdev'
import cloud1 from './assets/cloud1.svg';
import cloud2 from './assets/cloud2.svg';
import cloud3 from './assets/cloud3.svg';
import cloud4 from './assets/cloud4.svg';

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
    
<img src={cloud1} className="cloud1" alt="an illustrated cloud floating from left to right across the upper screen"/>
<img src={cloud2} className="cloud2" alt="an illustrated cloud floating right to left across the upper screen"/>
<img src={cloud3} className="cloud3" alt="an illustrated cloud floating left to right across the lower screen"/>
<img src={cloud4} className="cloud4" alt="an illustrated cloud floating right to left across the lower screen"/>



<Routes>
    <Route path="/portfolio-website/"element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Productdesign/>} />
    <Route path='illustration' element={<Illustration />} />
    <Route path='productdesign' element={<Productdesign />}/>
    <Route path='webdev' element={<Webdev/>}/>
    <Route path="/" element={<Home />} />

</Routes>

  <footer>
    <div className="linkedincontainer"><div className="linkedin"></div>
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mary-wilder-ab13b5285/">get in touch</a></div>
  <br/>
  <div className="emailcontainer">
  <div className="email"></div><div> marywilder717@gmail.com</div>
  </div> </footer>

  </div>
  )
}

export default App

import React from 'react'
import SplineScene from '../components/SplineScne'
import About from '../components/pages/About'
import { Routes,Route,Router } from 'react-router-dom'
import Resume from '../components/pages/Resume'
import Portfolio from '../components/pages/Portfolio'
import Blog from '../components/pages/Blog'
import Contact from '../components/pages/Contact'




function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" 
        element={
          <>
        <SplineScene />
        <About/>
        <Resume/>
        <Portfolio/>
        <Blog/>
        <Contact/>
        </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default Home

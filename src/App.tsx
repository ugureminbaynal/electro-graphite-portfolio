import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import AnimatedCircuitBackground from './components/AnimatedCircuitBackground'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <AnimatedCircuitBackground type="electric" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

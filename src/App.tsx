import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import AnimatedCircuitBackground from './components/AnimatedCircuitBackground'
import { SettingsProvider } from './context/SettingsContext'

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div className="min-h-screen relative">
          <AnimatedCircuitBackground type="electric" />
          <ScrollToTop />
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SettingsProvider>
  )
}

export default App

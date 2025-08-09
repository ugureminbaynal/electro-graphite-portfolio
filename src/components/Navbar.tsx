import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 backdrop-blur bg-night-graphite/80 border-b border-soft-graphite z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <div className="mr-4 group-hover:scale-105 transition-all duration-300">
              <img 
                src="/assets/svg/union-logo.svg" 
                alt="Uğur Emin Baynal Logo" 
                className="w-10 h-10 group-hover:brightness-110 transition-all duration-300" 
              />
            </div>
            <h1 className="font-ibm-plex text-2xl font-bold text-electric-cyan group-hover:text-glow transition-all duration-300">
              Uğur Emin Baynal
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-inter text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-electric-cyan'
                    : 'text-text-muted hover:text-electric-cyan'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative">
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-cyan transition-all duration-300 group-hover:w-full ${
                    isActive(link.path) ? 'w-full' : ''
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cloud-white hover:text-electric-cyan transition-all duration-300 p-2 rounded-none hover:bg-electric-cyan/10"
            >
              {isMenuOpen ? (
                <X size={24} className="transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-smoky-steel/80 backdrop-blur-sm border-t border-soft-graphite">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 font-inter text-sm font-medium transition-all duration-300 transform hover:translate-x-2 ${
                    isActive(link.path)
                      ? 'text-electric-cyan bg-electric-cyan/10'
                      : 'text-text-muted hover:text-electric-cyan hover:bg-electric-cyan/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

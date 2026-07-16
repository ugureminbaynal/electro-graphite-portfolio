import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'
import ThemedLogo from './ThemedLogo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, lang, toggleTheme, toggleLang } = useSettings()

  const linkNames: Record<string, Record<string, string>> = {
    en: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Experience', certificates: 'Certificates', contact: 'Contact' },
    tr: { home: 'Ana Sayfa', about: 'Hakkımda', projects: 'Projeler', experience: 'Deneyim', certificates: 'Sertifikalar', contact: 'İletişim' },
    es: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', certificates: 'Certificados', contact: 'Contacto' },
  }
  const L = linkNames[lang]

  const navLinks = [
    { name: L.home, path: '/' },
    { name: L.about, path: '/about' },
    { name: L.projects, path: '/projects' },
    { name: L.experience, path: '/experience' },
    { name: L.certificates, path: '/certificates' },
    { name: L.contact, path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  const settingsButtons = (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className="p-2 rounded-lg text-text-muted hover:text-electric-cyan hover:bg-electric-cyan/10 transition-all duration-300"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <button
        onClick={toggleLang}
        aria-label="Change language"
        title="EN → TR → ES"
        className="px-2 py-1.5 rounded-lg font-jetbrains text-xs font-semibold text-text-muted border border-soft-graphite hover:text-electric-cyan hover:border-electric-cyan/50 hover:bg-electric-cyan/10 transition-all duration-300"
      >
        {lang.toUpperCase()}
      </button>
    </div>
  )

  return (
    <nav className="sticky top-0 backdrop-blur bg-night-graphite/80 border-b border-soft-graphite z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <div className="mr-4 group-hover:scale-105 transition-all duration-300">
              <ThemedLogo className="w-10 h-10 group-hover:brightness-110 transition-all duration-300" />
            </div>
            <span className="font-ibm-plex text-xl font-bold text-electric-cyan group-hover:text-glow transition-all duration-300">
              Uğur Emin Baynal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
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
            {settingsButtons}
          </div>

          {/* Mobile: settings + menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {settingsButtons}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="text-cloud-white hover:text-electric-cyan transition-all duration-300 p-2 rounded-lg hover:bg-electric-cyan/10"
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
                  key={link.path}
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

'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<'tr' | 'en'>('tr')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: { tr: 'Ana Sayfa', en: 'Home' } },
    { href: '/about', label: { tr: 'Hakkımda', en: 'About' } },
    { href: '/projects', label: { tr: 'Projeler', en: 'Projects' } },
    { href: '/experience', label: { tr: 'Deneyim', en: 'Experience' } },
    { href: '/certificates', label: { tr: 'Sertifikalar', en: 'Certificates' } },
    { href: '/community', label: { tr: 'Topluluk', en: 'Community' } },
    { href: '/contact', label: { tr: 'İletişim', en: 'Contact' } },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-night-graphite/95 backdrop-blur-md border-b border-soft-graphite' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-electric-cyan rounded-md flex items-center justify-center">
              <span className="text-night-graphite font-jetbrains font-bold text-sm">UE</span>
            </div>
            <span className="font-ibm-plex font-semibold text-cloud-white text-lg">
              Uğur Emin Baynal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted hover:text-electric-cyan transition-colors duration-300 font-nav"
              >
                {item.label[language]}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-text-muted hover:text-electric-cyan transition-colors duration-300"
            >
              <Globe size={16} />
              <span className="font-nav">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-text-muted hover:text-electric-cyan transition-colors duration-300"
            >
              <Globe size={16} />
              <span className="font-nav">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-muted hover:text-electric-cyan transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-smoky-steel border-t border-soft-graphite">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-text-muted hover:text-electric-cyan hover:bg-night-graphite rounded-md transition-colors duration-300 font-nav"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[language]}
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
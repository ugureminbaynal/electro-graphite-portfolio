import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

const Footer = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'

  const navLinks = [
    { name: isTr ? 'Hakkımda' : 'About', path: '/about' },
    { name: isTr ? 'Projeler' : 'Projects', path: '/projects' },
    { name: isTr ? 'Deneyim' : 'Experience', path: '/experience' },
    { name: isTr ? 'Sertifikalar' : 'Certificates', path: '/certificates' },
    { name: isTr ? 'İletişim' : 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative border-t border-soft-graphite/60 bg-night-graphite/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center group mb-3">
              <img
                src="/assets/svg/union-logo.svg"
                alt=""
                className="w-8 h-8 mr-3 group-hover:brightness-110 transition-all duration-300"
              />
              <span className="font-ibm-plex text-lg font-bold text-electric-cyan">
                Uğur Emin Baynal
              </span>
            </Link>
            <p className="font-inter text-sm text-text-muted leading-relaxed">
              {isTr
                ? 'Elektronik, gömülü sistemler ve yapay zekânın kesişiminde çalışan Elektrik-Elektronik ve Bilgisayar Mühendisi.'
                : 'Electrical & Electronics and Computer Engineer working at the intersection of electronics, embedded systems, and AI.'}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-inter text-sm text-text-muted hover:text-electric-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <p className="font-jetbrains text-xs uppercase tracking-wider text-text-muted mb-3">
              {isTr ? 'Bana ulaşın' : 'Reach me'}
            </p>
            <a
              href="mailto:baynal@uguremin.com"
              className="font-inter text-sm text-cloud-white hover:text-electric-cyan transition-colors"
            >
              baynal@uguremin.com
            </a>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-electric-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/realpremalone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-muted hover:text-electric-cyan transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:baynal@uguremin.com"
                aria-label="Email"
                className="text-text-muted hover:text-electric-cyan transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-soft-graphite/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-text-muted">
            © {new Date().getFullYear()} Uğur Emin Baynal. {isTr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
          <p className="font-jetbrains text-xs text-text-muted/70">
            Izmir, Türkiye
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

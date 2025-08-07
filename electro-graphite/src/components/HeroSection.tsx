'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr')

  const content = {
    tr: {
      title: 'Uğur Emin Baynal',
      subtitle: 'Electro-Graphite Portfolio',
      description: 'Engineering projeleri, deneyim ve becerilerimi keşfedin. Modern teknolojiler ile geleceği şekillendiriyorum.',
      cta: 'Projelerimi Görüntüle',
      contact: 'İletişime Geç',
      download: 'CV İndir',
    },
    en: {
      title: 'Uğur Emin Baynal',
      subtitle: 'Electro-Graphite Portfolio',
      description: 'Explore my engineering projects, experience, and skills. Shaping the future with modern technologies.',
      cta: 'View Projects',
      contact: 'Get in Touch',
      download: 'Download CV',
    }
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-electric-cyan font-jetbrains text-h3 font-medium">
              {currentContent.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-ibm-plex text-h1 font-bold text-cloud-white mb-6"
          >
            {currentContent.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary font-inter text-body max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {currentContent.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <button className="cyber-button group">
                {currentContent.cta}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="cyber-button-secondary group">
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                {currentContent.contact}
              </button>
            </Link>

            <a 
              href="/Uğur-Emin-Baynal-FlowCV-Resume-20250730.pdf" 
              download
              className="cyber-button-secondary group"
            >
              <Download size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              {currentContent.download}
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-text-muted font-nav">Scroll</span>
              <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-text-muted rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 
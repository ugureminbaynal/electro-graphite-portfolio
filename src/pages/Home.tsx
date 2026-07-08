import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mail, Download, Code, Database, Linkedin, Instagram, CircuitBoard, Brain, Radio, Recycle, ExternalLink } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

// Returns the correct English indefinite article ("a" or "an") for a given phrase.
// Handles common edge cases like acronyms (MBA, R&D), silent-h (hour, honest), and
// words with consonant letters but vowel sounds (e.g., "MBA"), or vowel letters but
// consonant sounds (e.g., "university", "European").
const getIndefiniteArticleFor = (phrase: string): 'a' | 'an' => {
  if (!phrase) return 'a'

  const trimmed = phrase.trim()
  if (!trimmed) return 'a'

  // Extract the first word/token (before space)
  const firstToken = trimmed.split(/\s+/)[0]

  // If token starts with a non-letter (e.g., numbers, symbols), try to find first letter
  const firstLetterMatch = firstToken.match(/[A-Za-z]/)
  const firstLetter = firstLetterMatch ? firstLetterMatch[0] : ''

  if (!firstLetter) return 'a'

  const lower = firstToken.toLowerCase()
  const upper = firstToken.toUpperCase()

  // Special cases where the leading 'h' is silent in many dialects
  const silentHWords = ['honest', 'honesty', 'honor', 'honour', 'hour', 'heir', 'herb']
  if (silentHWords.some((w) => lower.startsWith(w))) return 'an'

  // Words starting with vowel letter but consonant sound ("you" sound)
  const youSoundPrefixes = ['uni', 'use', 'user', 'euro', 'ufo'] // "UFO" handled below via acronym
  if (youSoundPrefixes.some((p) => lower.startsWith(p))) return 'a'

  // Words starting with 'one'/'once' pronounced with initial 'w' sound
  if (lower.startsWith('one') || lower.startsWith('once')) return 'a'

  // Acronyms/initialisms: if token is all-caps or contains ampersand like R&D
  const isAcronymLike = firstToken === upper || /[A-Z]&[A-Z]/.test(firstToken)
  if (isAcronymLike) {
    // Letters pronounced with initial vowel sound: A (ay), E (ee), F (ef), H (aitch), I (eye),
    // L (el), M (em), N (en), O (oh), R (ar), S (es), X (ex)
    const vowelSoundLetters = new Set(['A', 'E', 'F', 'H', 'I', 'L', 'M', 'N', 'O', 'R', 'S', 'X'])
    return vowelSoundLetters.has(firstLetter.toUpperCase()) ? 'an' : 'a'
  }

  // Hyphenated x- (x-ray) pronounced "ex"
  if (/^x-/.test(lower)) return 'an'

  // Default vowel-letter rule
  if (/^[aeiou]/i.test(firstLetter)) return 'an'

  return 'a'
}

const Home = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useSettings()
  const isTr = lang === 'tr'

  // `title` builds the English "I am a/an …" sentence; `tr` is a complete Turkish sentence
  // because Turkish expresses tense/person with suffixes on the noun itself.
  const roles = [
    { title: "Software Development Specialist", tr: "Yazılım Geliştirme Uzmanıyım", current: true },
    { title: "Electrical & Electronics Engineer", tr: "Elektrik-Elektronik Mühendisiyim", current: true },
    { title: "Computer Engineer", tr: "Bilgisayar Mühendisiyim", current: true },
    { title: "IEEE IEU Consultant", tr: "IEEE IEU Danışmanıyım", current: true },
    { title: "Engineering Tutor", tr: "Mühendislik Eğitmeniyim", current: true },
    { title: "Engineering Instructor", tr: "Mühendislik Dersleri Eğitmeniydim", current: false },
  ]

  const skills = [
    { name: "MATLAB/Simulink", icon: Brain, color: "text-blue-400", category: isTr ? "Mühendislik" : "Engineering" },
    { name: "Python", icon: Code, color: "text-green-400", category: isTr ? "Programlama" : "Programming" },
    { name: "OrCAD/KiCAD", icon: CircuitBoard, color: "text-orange-400", category: isTr ? "Elektronik" : "Electronics" },
    { name: "Java", icon: Code, color: "text-cyan-400", category: isTr ? "Programlama" : "Programming" },
    { name: "ROS 2", icon: Radio, color: "text-blue-500", category: isTr ? "Robotik" : "Robotics" },
    { name: "SQL", icon: Database, color: "text-purple-400", category: isTr ? "Veritabanı" : "Database" }
  ]

  const stats = [
    { number: "3.17", label: isTr ? "EE Not Ortalaması" : "EE GPA" },
    { number: "EE+CE", label: isTr ? "Çift Anadal" : "Double Major" },
    { number: "93.04%", label: isTr ? "Lise Diploma Notu" : "High School Score" },
    { number: "5", label: isTr ? "Dil" : "Languages" }
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative">

      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Content */}
            <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              {/* Greeting */}
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-electric-cyan" />
                <span className="font-inter text-sm text-electric-cyan uppercase tracking-wider">
                  {isTr ? 'Portfolyoma hoş geldiniz' : 'Welcome to my portfolio'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-ibm-plex text-5xl md:text-6xl lg:text-7xl font-bold text-cloud-white leading-tight">
                {isTr ? <>Merhaba, ben <span className="text-electric-cyan">Uğur</span></> : <>Hi, I'm <span className="text-electric-cyan">Uğur</span></>}
              </h1>

              {/* Role carousel with I am/I was */}
              <div className="min-h-16 flex items-center">
                <h2 className="font-jetbrains text-xl md:text-3xl text-text-secondary">
                  {isTr ? (
                    <span className="text-electric-cyan font-semibold">{roles[currentText].tr}</span>
                  ) : (
                    <>
                      {roles[currentText].current ? "I am" : "I was"} {getIndefiniteArticleFor(roles[currentText].title)}{' '}
                      <span className="text-electric-cyan font-semibold">
                        {roles[currentText].title}
                      </span>
                    </>
                  )}
                </h2>
              </div>

              {/* Description */}
              <p className="font-inter text-lg text-text-secondary max-w-lg leading-relaxed">
                {isTr
                  ? 'İzmir Ekonomi Üniversitesi\'nde Elektrik-Elektronik Mühendisliği ve Bilgisayar Mühendisliği çift anadal son sınıf öğrencisiyim. Elektroniğin yapay zekâyla buluştuğu yerde çalışıyorum — gömülü sistemlerden robotiğe ve Çoklu-Ajan LLM iş akışlarına. Şu anda İEÜ\'de Yazılım Geliştirme Uzmanı olarak görev yapıyorum.'
                  : 'Final-year double major in Electrical & Electronics and Computer Engineering at Izmir University of Economics. I work where electronics meets AI — from embedded systems and robotics to Multi-Agent LLM workflows — currently as a Software Development Specialist at IUE.'}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="font-ibm-plex text-2xl font-bold text-electric-cyan">{stat.number}</div>
                    <div className="font-inter text-xs text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="btn-primary group">
                    <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                    {isTr ? 'İletişime Geç' : 'Get in Touch'}
                  </button>
                </Link>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20260702.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'CV İndir' : 'Download CV'}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/realpremalone" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:baynal@uguremin.com" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Floating Circuit Components */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-smoky-steel/50 backdrop-blur-sm border border-electric-cyan/20 rounded-lg animate-float" style={{animationDelay: '0s'}}>
                <div className="p-3">
                  {/* Circuit traces */}
                  <div className="space-y-1">
                    <div className="h-1 bg-electric-cyan/40 rounded-full"></div>
                    <div className="h-1 bg-electric-cyan/30 rounded-full w-3/4"></div>
                    <div className="h-1 bg-electric-cyan/50 rounded-full w-1/2"></div>
                    <div className="h-1 bg-electric-cyan/20 rounded-full w-5/6"></div>
                    <div className="h-1 bg-electric-cyan/40 rounded-full w-2/3"></div>
                  </div>
                  {/* Circuit nodes */}
                  <div className="flex justify-between mt-2">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                    <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                    <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 left-0 w-28 h-28 bg-smoky-steel/50 backdrop-blur-sm border border-neon-blue/20 rounded-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="p-3">
                  <div className="flex space-x-1 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-neon-blue/30 rounded"></div>
                    <div className="h-2 bg-neon-blue/20 rounded w-2/3"></div>
                    <div className="h-2 bg-neon-blue/30 rounded w-1/3"></div>
                    <div className="h-1 bg-neon-blue/40 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-10 w-24 h-24 bg-smoky-steel/50 backdrop-blur-sm border border-cyber-orange/20 rounded-lg animate-float" style={{animationDelay: '2s'}}>
                <div className="p-2">
                  <div className="flex space-x-1 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 bg-cyber-orange/30 rounded"></div>
                    <div className="h-1 bg-cyber-orange/20 rounded w-4/5"></div>
                    <div className="h-1 bg-cyber-orange/40 rounded w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Central Element - Circuit Board */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-electric-cyan/20 to-neon-blue/20 rounded-full backdrop-blur-sm border border-electric-cyan/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto flex items-center justify-center">
                      <img
                        src="/assets/svg/union-logo.svg"
                        alt="Uğur Emin Baynal Logo"
                        className="w-full h-full text-electric-cyan opacity-90 drop-shadow-lg"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Modern Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-4">
              {isTr ? 'Teknik Beceriler ve Uzmanlık' : 'Technical Skills & Expertise'}
            </h2>
            <p className="font-inter text-lg text-text-secondary max-w-2xl mx-auto">
              {isTr
                ? 'Yenilikçi çözümler için mühendislik araçları ve teknolojileri'
                : 'Mastering engineering tools and technologies for innovative solutions'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="project-card text-center group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-4">
                  <skill.icon size={32} className={`mx-auto ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-jetbrains text-sm font-medium text-cloud-white">
                  {skill.name}
                </h3>
                <p className="font-inter text-xs text-text-secondary mt-1">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-ibm-plex text-3xl md:text-4xl font-semibold text-cloud-white mb-4">
              {isTr ? 'Öne Çıkan Projeler' : 'Featured Projects'}
            </h2>
            <p className="font-inter text-lg text-text-secondary max-w-2xl mx-auto">
              {isTr
                ? 'Hibe destekli araştırma ve uygulamalı sürdürülebilir mühendislik.'
                : 'Grant-funded research and hands-on sustainable engineering.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* KAYRA */}
            <div className="project-card p-8 flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20">
                  <Radio className="w-8 h-8 text-electric-cyan" />
                </div>
                <div>
                  <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan">K.A.Y.R.A.</h3>
                  <p className="font-inter text-sm text-text-secondary">
                    {isTr ? 'İç Mekân Konumlandırma Sistemi' : 'Indoor Localization System'}
                  </p>
                </div>
              </div>
              <p className="font-inter text-text-secondary mb-6 leading-relaxed flex-grow">
                {isTr
                  ? 'BLE tabanlı iç mekân konumlandırma ve yön bulma — karmaşık kapalı alanlar için ölçeklenebilir bir yaklaşım. TÜBİTAK 2204-A araştırma desteğiyle.'
                  : 'BLE-based localisation and wayfinding — a scalable approach for complex indoor environments. Supported by a TÜBİTAK 2204-A research grant.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">BLE</span>
                <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">{isTr ? 'Konumlandırma' : 'Localization'}</span>
                <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">IoT</span>
                <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">TÜBİTAK</span>
              </div>
              <Link to="/projects" className="self-start">
                <button className="btn-primary group">
                  {isTr ? 'Projeyi Gör' : 'View Project'}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Silkworm */}
            <div className="project-card p-8 flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-lg bg-green-400/10 border border-green-400/20">
                  <Recycle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="font-jetbrains text-xl font-semibold text-green-400">Silkworm</h3>
                  <p className="font-inter text-sm text-text-secondary">
                    {isTr ? '3B Plastik Geri Dönüşüm Makinesi' : '3D Plastic Recycling Machine'}
                  </p>
                </div>
              </div>
              <p className="font-inter text-text-secondary mb-6 leading-relaxed flex-grow">
                {isTr
                  ? 'Plastik atığı 3B yazıcı filamentine dönüştüren bir makine — mekanik tasarım, motor ve ısıtma kontrolü, mikrodenetleyici tabanlı otomasyon. Kurucu Ortak & Ar-Ge Sorumlusu.'
                  : 'A machine that turns plastic waste into 3D printer filament — mechanical design, motor and heating control, and microcontroller-based automation. Co-Founder & Head of R&D.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs font-jetbrains rounded">{isTr ? 'Geri Dönüşüm' : 'Recycling'}</span>
                <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">{isTr ? '3B Baskı' : '3D Printing'}</span>
                <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">{isTr ? 'Otomasyon' : 'Automation'}</span>
                <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">{isTr ? 'Gömülü Sistem' : 'Embedded'}</span>
              </div>
              <a
                href="https://silkworm.uguremin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group self-start"
              >
                {isTr ? 'Siteyi Ziyaret Et' : 'Visit Site'}
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="project-card p-12">
            <h2 className="font-ibm-plex text-3xl md:text-4xl font-semibold text-cloud-white mb-6">
              {isTr ? 'Elektronik ve Yapay Zekâda Birlikte Üretelim mi?' : 'Ready to Innovate in Electronics & AI?'}
            </h2>
            <p className="font-inter text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              {isTr
                ? 'Son teknoloji Ar-Ge projelerinde birlikte çalışalım. Elektronik ile yapay zekâyı buluşturup çığır açan çözümler üretmeye tutkuyla bağlıyım.'
                : "Let's collaborate on cutting-edge R&D projects. I'm passionate about integrating electronics and artificial intelligence to create groundbreaking solutions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'İletişime Geç' : 'Get in Touch'}
                </button>
              </Link>
              <a
                href="/Uğur-Emin-Baynal-FlowCV-Resume-20260702.pdf"
                download
                className="btn-secondary group"
              >
                <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                {isTr ? 'CV İndir' : 'Download CV'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

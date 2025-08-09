import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mail, Download, Code, Database, Github, Linkedin, Twitter, CpuIcon, CircuitBoard, Brain, Radio } from 'lucide-react'

const Home = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const roles = [
    "Electrical & Electronics Engineer",
    "Computer Engineering Student", 
    "R&D Engineering Intern",
    "Undergraduate Teaching Assistant",
    "Engineering Tutor"
  ]

  const skills = [
    { name: "MATLAB/Simulink", icon: Brain, color: "text-blue-400", category: "Engineering" },
    { name: "Python", icon: Code, color: "text-green-400", category: "Programming" },
    { name: "OrCAD/KiCAD", icon: CircuitBoard, color: "text-orange-400", category: "Electronics" },
    { name: "Java", icon: Code, color: "text-cyan-400", category: "Programming" },
    { name: "ROS 2", icon: Radio, color: "text-blue-500", category: "Robotics" },
    { name: "SQL", icon: Database, color: "text-purple-400", category: "Database" }
  ]

  const stats = [
    { number: "3.16", label: "EE GPA" },
    { number: "EE+CE", label: "Double Major" },
    { number: "93.04%", label: "High School Score" },
    { number: "5", label: "Languages" }
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
                  Welcome to my portfolio
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="font-ibm-plex text-5xl md:text-6xl lg:text-7xl font-bold text-cloud-white leading-tight">
                Hi, I'm <span className="text-electric-cyan">Uğur</span>
              </h1>
              
              {/* sssssssssssssssssssssssssssssss Role a/an */}
              <div className="h-16 flex items-center">
                <h2 className="font-jetbrains text-2xl md:text-3xl text-text-secondary">
                  I'm {['a', 'e', 'i', 'o', 'u'].includes(roles[currentText].toLowerCase()[0]) ? 'an' : 'a'}{' '}
                  <span className="text-electric-cyan font-semibold">
                    {roles[currentText]}
                  </span>
                </h2>
              </div>
              
              {/* Description */}
              <p className="font-inter text-lg text-text-secondary max-w-lg leading-relaxed">
                Final-year double major in Electrical & Electronics Engineering and Computer Engineering at Izmir University of Economics. 
                Passionate about integrating electronics and artificial intelligence to create groundbreaking solutions in R&D. 
                Currently working as R&D Engineering Intern at EPS Technology, with experience in IoT systems, robotics design teams, 
                and color science research. Known for rapidly learning and teaching complex engineering concepts, often helping students 
                from elite universities grasp advanced topics. Committed to innovation at the boundaries of multiple technical domains.
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
                    Get in Touch
                  </button>
                </Link>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20250730.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-electric-cyan transition-colors">
                  <Twitter size={24} />
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
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      {/* Circuit board pattern */}
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
                        {Array.from({ length: 16 }, (_, i) => (
                          <div key={i} className="w-3 h-3 bg-electric-cyan/30 rounded-sm"></div>
                        ))}
                      </div>
                      {/* Circuit traces */}
                      <div className="absolute inset-0">
                        <div className="absolute top-2 left-2 right-2 h-0.5 bg-electric-cyan/50 rounded-full"></div>
                        <div className="absolute top-6 left-2 right-2 h-0.5 bg-electric-cyan/40 rounded-full"></div>
                        <div className="absolute top-10 left-2 right-2 h-0.5 bg-electric-cyan/60 rounded-full"></div>
                        <div className="absolute top-14 left-2 right-2 h-0.5 bg-electric-cyan/30 rounded-full"></div>
                        <div className="absolute top-2 left-2 bottom-2 w-0.5 bg-electric-cyan/50 rounded-full"></div>
                        <div className="absolute top-2 left-6 bottom-2 w-0.5 bg-electric-cyan/40 rounded-full"></div>
                        <div className="absolute top-2 left-10 bottom-2 w-0.5 bg-electric-cyan/60 rounded-full"></div>
                        <div className="absolute top-2 left-14 bottom-2 w-0.5 bg-electric-cyan/30 rounded-full"></div>
                      </div>
                    </div>
                    <div className="font-jetbrains text-sm text-electric-cyan">
                      <div>R&D System Active</div>
                      <div className="text-xs text-text-secondary">Engineering Solutions</div>
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
               Technical Skills & Expertise
             </h2>
             <p className="font-inter text-lg text-text-secondary max-w-2xl mx-auto">
               Mastering engineering tools and technologies for innovative solutions
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="project-card text-center group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
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

      {/* Featured Project Preview */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-ibm-plex text-3xl md:text-4xl font-semibold text-cloud-white mb-6">
                Featured Project
              </h2>
                             <h3 className="font-jetbrains text-xl text-electric-cyan mb-4">
                 K.A.Y.R.A. - Indoor Localization System
               </h3>
               <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                 BLE-Based Localisation and Wayfinding: A Scalable Approach for Complex Indoor Environments. 
                 TÜBİTAK 2204-A Supported project focusing on indoor navigation and positioning systems.
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">BLE</span>
                 <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">Localization</span>
                 <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">IoT</span>
                 <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">TÜBİTAK</span>
               </div>
              <Link to="/projects">
                <button className="btn-primary group">
                  View Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-smoky-steel to-soft-graphite rounded-lg border border-electric-cyan/20 flex items-center justify-center">
                               <div className="text-center">
                 <Radio className="w-16 h-16 text-electric-cyan mx-auto mb-4" />
                 <div className="font-jetbrains text-electric-cyan">TÜBİTAK Project</div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="project-card p-12">
                         <h2 className="font-ibm-plex text-3xl md:text-4xl font-semibold text-cloud-white mb-6">
               Ready to Innovate in Electronics & AI?
             </h2>
             <p className="font-inter text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
               Let's collaborate on cutting-edge R&D projects. I'm passionate about integrating 
               electronics and artificial intelligence to create groundbreaking solutions.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </button>
              </Link>
              <a
                href="/Uğur-Emin-Baynal-FlowCV-Resume-20250730.pdf"
                download
                className="btn-secondary group"
              >
                <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

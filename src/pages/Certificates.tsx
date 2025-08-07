import React from 'react'
import { Award, Trophy, Star, FileText, ExternalLink, Download, Target } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      title: "TÜBİTAK 2204-A Undergraduate Research Project",
      organization: "TÜBİTAK",
      period: "2024 – Present",
      description: "Support for undergraduate research project 'KAYRA - Indoor Localization System'. This prestigious grant supports innovative research in engineering and technology.",
      category: "Research Grant",
      status: "Active",
      icon: Award,
      color: "text-electric-cyan"
    },
    {
      title: "IEEE IEU Robotics and Automation Society",
      organization: "IEEE",
      period: "Jun 2025 – Present",
      description: "Serving as President of the IEEE IEU Robotics and Automation Society, leading initiatives in robotics education and research.",
      category: "Leadership",
      status: "Active",
      icon: Star,
      color: "text-blue-400"
    },
    {
      title: "IUE Advanced and Innovative Technologies Group",
      organization: "IUE",
      period: "Sep 2025 – Present",
      description: "Active member of the Advanced and Innovative Technologies Group, contributing to cutting-edge technology research and development.",
      category: "Research Group",
      status: "Active",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "IUE Signal Processing Group",
      organization: "IUE",
      period: "Jun 2025 – Present",
      description: "Member of the Signal Processing Group, working on advanced signal processing techniques and applications.",
      category: "Research Group",
      status: "Active",
      icon: FileText,
      color: "text-purple-400"
    },
    {
      title: "InovaTim AI Course",
      organization: "InovaTim",
      period: "2019",
      description: "Comprehensive artificial intelligence course covering machine learning fundamentals, neural networks, and practical applications in AI development.",
      category: "AI/ML",
      status: "Completed",
      icon: FileText,
      color: "text-cyan-400"
    },
    {
      title: "Izmir University of Economics Mentor Programme",
      organization: "IUE",
      period: "2024",
      description: "Participated in the university's mentor program, gaining valuable guidance and insights for academic and career development.",
      category: "Leadership",
      status: "Completed",
      icon: Star,
      color: "text-blue-400"
    },
    {
      title: "MATLAB Onramp",
      organization: "MathWorks",
      period: "2025",
      description: "Completed MATLAB Onramp course, mastering fundamental MATLAB programming concepts, data analysis, and matrix operations for engineering applications.",
      category: "Programming",
      status: "Completed",
      icon: FileText,
      color: "text-orange-400"
    },
    {
      title: "MATLAB Signal Generation and Resampling",
      organization: "MathWorks",
      period: "2025",
      description: "Advanced MATLAB course focusing on signal processing techniques, including signal generation, resampling methods, and digital signal processing for engineering applications.",
      category: "Signal Processing",
      status: "Completed",
      icon: FileText,
      color: "text-green-400"
    },
    {
      title: "MATLAB Spectral Analysis Techniques",
      organization: "MathWorks",
      period: "2025",
      description: "Specialized course in MATLAB spectral analysis, covering frequency domain analysis, FFT techniques, and advanced signal processing methods.",
      category: "Signal Processing",
      status: "Completed",
      icon: FileText,
      color: "text-green-400"
    },
    {
      title: "Simulink Onramp",
      organization: "MathWorks",
      period: "2025",
      description: "Completed Simulink Onramp course, learning system modeling, simulation techniques, and block diagram design for engineering applications.",
      category: "Engineering",
      status: "Completed",
      icon: FileText,
      color: "text-yellow-400"
    }
  ]

  const achievements = [
    {
      title: "High School Graduation Score",
      value: "93.04%",
      description: "Outstanding academic performance in Math and Science at Ankara Gazi Anatolian High School",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "Electrical Engineering GPA",
      value: "3.16/4.00",
      description: "Strong academic performance in Electrical and Electronics Engineering",
      icon: Award,
      color: "text-electric-cyan"
    },
    {
      title: "Double Major",
      value: "EE + CE",
      description: "Pursuing double major in Electrical & Electronics Engineering and Computer Engineering",
      icon: Target,
      color: "text-neon-blue"
    },
    {
      title: "Language Proficiency",
      value: "5 Languages",
      description: "Turkish (Native), English (Fluent), Spanish, German, Latin (Beginner)",
      icon: Target,
      color: "text-green-400"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research Grant":
        return "bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30"
      case "Leadership":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30"
      case "Research Group":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "AI/ML":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
      case "Programming":
        return "bg-orange-500/20 text-orange-400 border-orange-400/30"
      case "Signal Processing":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "Engineering":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400/30"
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              Certificates & Achievements
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              Recognition of academic excellence, research contributions, and professional achievements 
              in engineering and technology fields.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {certificates.map((cert, index) => (
              <div key={index} className="project-card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-smoky-steel/50 border border-electric-cyan/20`}>
                      <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <div>
                      <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-1">
                        {cert.title}
                      </h3>
                      <p className="font-inter text-sm text-text-secondary">{cert.organization}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-jetbrains border ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </div>
                </div>

                <p className="font-inter text-text-secondary mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <p className="font-inter text-xs text-text-secondary mb-2">{cert.period}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 text-xs font-jetbrains rounded border ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-electric-cyan mr-3" />
              Academic Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="project-card p-6 text-center">
                  <div className={`p-4 rounded-full bg-smoky-steel/50 border border-electric-cyan/20 mx-auto mb-4 w-16 h-16 flex items-center justify-center`}>
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-2">
                    {achievement.title}
                  </h3>
                  <div className="font-ibm-plex text-2xl font-bold text-electric-cyan mb-2">
                    {achievement.value}
                  </div>
                  <p className="font-inter text-xs text-text-secondary">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Achievement */}
          <div className="mb-20">
            <div className="project-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-8 h-8 text-electric-cyan" />
                    <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white">
                      Featured Achievement: TÜBİTAK 2204-A
                    </h2>
                  </div>
                  <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                    The TÜBİTAK 2204-A Undergraduate Research Project Grant is one of the most prestigious 
                    research funding opportunities for undergraduate students in Turkey. This grant supports 
                    our KAYRA project, enabling cutting-edge research in indoor localization technology.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">Research Grant</span>
                    <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">TÜBİTAK</span>
                    <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">Active Project</span>
                  </div>
                  <button className="btn-primary group">
                    Learn More
                    <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-electric-cyan/20 to-neon-blue/20 rounded-full backdrop-blur-sm border border-electric-cyan/30 flex items-center justify-center mx-auto">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-electric-cyan mx-auto mb-4 animate-pulse" />
                      <div className="font-jetbrains text-sm text-electric-cyan">
                        <div>TÜBİTAK 2204-A</div>
                        <div className="text-xs text-text-secondary">Research Grant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                Building on Success
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                These achievements represent milestones in my academic and professional journey. 
                I'm committed to continuing this trajectory of excellence in engineering and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Award size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Discuss Opportunities
                </a>
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
        </div>
      </section>
    </div>
  )
}

export default Certificates

import React from 'react'
import { Briefcase, Calendar, MapPin, Building, Users, Award, Zap, Brain, Cpu } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "R&D Engineering Intern",
      company: "EPS Technology",
      period: "Jun 2025 – Present",
      location: "Izmir, Turkey",
      type: "Internship",
      description: "Supporting an R&D project focused on color science and image processing. Contributing to experimental setups and data evaluation processes.",
      technologies: ["Color Science", "Image Processing", "R&D", "Experimental Design"],
      achievements: [
        "Contributing to cutting-edge color science research",
        "Developing experimental setups for image processing",
        "Participating in data evaluation and analysis processes"
      ],
      icon: Brain,
      color: "text-electric-cyan"
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Izmir University of Economics",
      period: "Oct 2024 – Present",
      location: "Izmir, Turkey",
      type: "Academic",
      description: "Assisting in lab courses involving OrCAD PSpice, circuit analysis, and embedded systems. Helping students understand theoretical and practical components of engineering subjects.",
      technologies: ["OrCAD PSpice", "Circuit Analysis", "Embedded Systems", "Teaching"],
      achievements: [
        "Supporting students in laboratory courses",
        "Teaching circuit analysis and simulation techniques",
        "Mentoring students in embedded systems projects"
      ],
      icon: Users,
      color: "text-neon-blue"
    },
    {
      title: "Electronics Engineering Intern",
      company: "ASELSAN Precision Optics",
      period: "Aug 2024 – Sep 2024",
      location: "Turkey",
      type: "Internship",
      description: "Worked in Admittance-Quality and Thermal/Night Vision Departments, gaining hands-on experience in precision optics and defense electronics.",
      technologies: ["Precision Optics", "Thermal Imaging", "Quality Control", "Defense Electronics"],
      achievements: [
        "Gained experience in precision optics manufacturing",
        "Learned thermal and night vision technology",
        "Participated in quality control processes"
      ],
      icon: Cpu,
      color: "text-cyber-orange"
    },
    {
      title: "Full-Stack Developer",
      company: "EvolveChat",
      period: "Jan 2024 – Feb 2024",
      location: "Remote",
      type: "Part-time",
      description: "Responsible for the development of the company's AI products, focusing on full-stack development and AI integration.",
      technologies: ["Full-Stack Development", "AI Integration", "Web Development", "Product Development"],
      achievements: [
        "Developed AI-powered chat applications",
        "Implemented full-stack solutions",
        "Contributed to product development lifecycle"
      ],
      icon: Zap,
      color: "text-green-400"
    }
  ]

  const skills = [
    { name: "R&D", category: "Research & Development" },
    { name: "Teaching", category: "Education" },
    { name: "Circuit Design", category: "Electronics" },
    { name: "Embedded Systems", category: "Engineering" },
    { name: "Full-Stack Development", category: "Software" },
    { name: "AI Integration", category: "Technology" },
    { name: "Quality Control", category: "Manufacturing" },
    { name: "Precision Optics", category: "Specialized" }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30"
      case "Academic":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "Part-time":
        return "bg-purple-500/20 text-purple-400 border-purple-400/30"
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
              Professional Experience
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              A diverse range of professional experiences spanning R&D, academia, and industry, 
              showcasing expertise in electronics, software development, and engineering.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="project-card p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg bg-smoky-steel/50 border border-electric-cyan/20`}>
                      <exp.icon className={`w-6 h-6 ${exp.color}`} />
                    </div>
                    <div>
                      <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-inter text-cloud-white mb-1">{exp.company}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-text-secondary" />
                          <span className="font-inter text-text-secondary">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-text-secondary" />
                          <span className="font-inter text-text-secondary">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-jetbrains border ${getTypeColor(exp.type)}`}>
                    {exp.type}
                  </div>
                </div>

                <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-inter text-text-secondary text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-xs font-jetbrains rounded border border-electric-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-electric-cyan mr-3" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="project-card p-4 text-center">
                  <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-1">
                    {skill.name}
                  </h3>
                  <p className="font-inter text-xs text-text-secondary">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                Ready for New Challenges
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                I'm always looking for new opportunities to apply my skills in R&D, 
                engineering, and technology development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Briefcase size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Contact for Opportunities
                </a>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20250730.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Building size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience

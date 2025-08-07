import React from 'react'
import { ExternalLink, Rocket, Cpu, Leaf, Shield, Brain, Zap, Radio, Droplets } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "K.A.Y.R.A. - Indoor Localization System",
      subtitle: "Know About Your Route Always",
      period: "Sep 2024 – Present",
      description: "BLE-Based Localisation and Wayfinding: A Scalable Approach for Complex Indoor Environments. TÜBİTAK 2204-A Supported project focusing on indoor navigation and positioning systems.",
      technologies: ["BLE", "IoT", "Localization", "TÜBİTAK", "Embedded Systems"],
      status: "Active",
      icon: Radio,
      color: "text-electric-cyan"
    },
    {
      title: "The Distiller's Algorithm",
      subtitle: "Cocktail & Bar Recipes Platform",
      period: "2025 – Present",
      description: "Personal website showcasing cocktail recipes, bar techniques, and mixology knowledge. Features interactive recipe database with detailed instructions, ingredient lists, and cocktail categories. Recently launched and actively maintained.",
      technologies: ["Web Development", "Recipe Database", "Mixology", "Interactive Design"],
      status: "Active",
      icon: Droplets,
      color: "text-yellow-400",
      link: "https://distillersalgorithm.uguremin.com"
    },
    {
      title: "ECOWHEELS - Energy Efficient Vehicle",
      subtitle: "Teknofest 2025 Competition",
      period: "Mar 2025 – Present",
      description: "Designing the most energy efficient electric vehicle. My responsibility includes the design of the Vehicle Control System, focusing on the firmware to enable user interaction and modulate car functions accordingly.",
      technologies: ["Embedded Systems", "Firmware", "Vehicle Control", "Energy Efficiency", "Teknofest"],
      status: "Active",
      icon: Leaf,
      color: "text-green-400"
    },
    {
      title: "ECO ROVER - Autonomous Rover",
      subtitle: "Software Team Lead / Electronics Team Member",
      period: "Oct 2024 – Present",
      description: "Coordinated a multidisciplinary software team for an autonomous rover project. Designed PCBs and integrated sensors using KiCAD and Altium Designer.",
      technologies: ["Autonomous Systems", "KiCAD", "Altium Designer", "PCB Design", "Sensor Integration"],
      status: "Active",
      icon: Cpu,
      color: "text-blue-400"
    },
    {
      title: "A.Q.U.A. F.A.R.M.",
      subtitle: "Automated Quality and Utility-Assisted Farming and Resource Management",
      period: "Oct 2024 – Jan 2025",
      description: "Multi-Disciplinary Engineering Project with Multi-Agent LLM Workflow for automated, soilless farming systems.",
      technologies: ["Multi-Agent LLM", "Automation", "IoT", "Agriculture", "AI"],
      status: "Completed",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "Teknofest 2024 Rocket Competition",
      subtitle: "Medium Altitude Category",
      period: "Jan 2024 – Jul 2024",
      description: "Member of the avionics team of GARUDA Rocket, responsible for electronic circuit design and component selection.",
      technologies: ["Avionics", "Circuit Design", "Rocket Engineering", "Component Selection", "Teknofest"],
      status: "Completed",
      icon: Rocket,
      color: "text-orange-400"
    },
    {
      title: "CycLock - Bicycle Security System",
      subtitle: "Security Concept",
      period: "Feb 2022 – Jun 2022",
      description: "Bicycle security system concept for enhanced protection and tracking.",
      technologies: ["Security Systems", "IoT", "Embedded Systems", "Prototyping"],
      status: "Completed",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "Ses Kes - Medical Noise Cancellation",
      subtitle: "Device for Neurodivergent People",
      period: "Sep 2023",
      description: "Electronics and Computer Engineer/Project Lead for medical noise cancellation device designed for neurodivergent individuals.",
      technologies: ["Medical Devices", "Noise Cancellation", "Electronics", "Accessibility", "Healthcare"],
      status: "Completed",
      icon: Brain,
      color: "text-cyan-400"
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

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              Projects & Research
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              A collection of innovative engineering projects, research initiatives, and competition entries 
              showcasing expertise in electronics, robotics, and artificial intelligence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-smoky-steel/50 border border-electric-cyan/20`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-1">
                        {project.title}
                      </h3>
                      <p className="font-inter text-sm text-text-secondary">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-jetbrains border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>

                <p className="font-inter text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="font-inter text-xs text-text-secondary mb-2">{project.period}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-xs font-jetbrains rounded border border-electric-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.link && (
                  <div className="flex justify-end">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-cyan hover:text-glow transition-colors text-sm font-jetbrains flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Visit Site
                    </a>
                  </div>
                )}

                                 {/* View Details and Source Code buttons hidden for now */}
                 {/* <div className="flex space-x-3">
                   <button className="text-electric-cyan hover:text-glow transition-colors text-sm font-jetbrains flex items-center">
                     <ExternalLink size={16} className="mr-1" />
                     View Details
                   </button>
                   <button className="text-neon-blue hover:text-glow transition-colors text-sm font-jetbrains flex items-center">
                     <Github size={16} className="mr-1" />
                     Source Code
                   </button>
                 </div> */}
              </div>
            ))}
          </div>

          {/* Featured Project Highlight */}
          <div className="mt-20">
            <div className="project-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                                     <div className="flex items-center space-x-3 mb-4">
                     <Radio className="w-8 h-8 text-electric-cyan" />
                     <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white">
                       Featured Project: K.A.Y.R.A.
                     </h2>
                   </div>
                  <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                    Our flagship TÜBİTAK 2204-A supported project focuses on developing a scalable 
                    BLE-based indoor localization system for complex environments. This innovative 
                    approach combines cutting-edge wireless technology with advanced algorithms to 
                    provide accurate positioning and navigation solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">TÜBİTAK 2204-A</span>
                    <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">Research Project</span>
                    <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">Active Development</span>
                  </div>
                  <button className="btn-primary group">
                    Learn More
                    <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                                 <div className="text-center">
                   <div className="w-64 h-64 bg-gradient-to-br from-electric-cyan/20 to-neon-blue/20 rounded-full backdrop-blur-sm border border-electric-cyan/30 flex items-center justify-center mx-auto">
                     <div className="text-center">
                       <Radio className="w-16 h-16 text-electric-cyan mx-auto mb-4 animate-pulse" />
                       <div className="font-jetbrains text-sm text-electric-cyan">
                         <div>Indoor Localization</div>
                         <div className="text-xs text-text-secondary">BLE Technology</div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                Interested in Collaborating?
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                I'm always open to new engineering challenges and research opportunities. 
                Let's discuss how we can work together on innovative projects.
              </p>
              <button className="btn-primary group">
                <ExternalLink size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

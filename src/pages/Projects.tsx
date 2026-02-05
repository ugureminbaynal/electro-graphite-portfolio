import React from 'react'
import { Rocket, Cpu, Leaf, Shield, Brain, Zap, Radio, Droplets, Recycle, Mail } from 'lucide-react'
import PCBTimeline from '../components/PCBTimeline'

const Projects = () => {
  const projects = [
    {
      id: "silkworm",
      title: "Silkworm - 3D Plastic Recycling Machine",
      subtitle: "Co-Founder, Head of R&D",
      period: "Sep 2025 – Present",
      description: "Designed and built a 3D plastic recycling machine, including mechanical structure and motor/heating controls. Developed microcontroller-based automation for temperature, motor speed, and safety functions.",
      details: "Leading the R&D efforts for an innovative 3D plastic recycling machine that transforms plastic waste into usable 3D printer filament. The project involves mechanical engineering, embedded systems, and automation to create a sustainable solution for plastic recycling. Developed custom control systems for precise temperature and motor speed regulation.",
      technologies: ["3D Printing", "Recycling", "Microcontroller", "Automation", "Motor Control", "Temperature Control"],
      achievements: [
        "Designed complete mechanical structure",
        "Developed microcontroller-based automation",
        "Implemented safety functions",
        "Optimized for stable recycling performance"
      ],
      status: "Active" as const,
      icon: Recycle,
      color: "text-green-500"
    },
    {
      id: "kayra",
      title: "K.A.Y.R.A. - Indoor Localization System",
      subtitle: "Know About Your Route Always",
      period: "Sep 2024",
      description: "BLE-Based Localisation and Wayfinding: A Scalable Approach for Complex Indoor Environments. TÜBİTAK 2204-A Supported project focusing on indoor navigation and positioning systems.",
      details: "Developed a scalable indoor localization system using Bluetooth Low Energy (BLE) beacons. The project addressed the challenge of GPS-denied environments by creating an accurate indoor positioning solution. Supported by TÜBİTAK 2204-A research grant, demonstrating the project's scientific merit and innovation.",
      technologies: ["BLE", "IoT", "Localization", "TÜBİTAK", "Embedded Systems", "Signal Processing"],
      achievements: [
        "Secured TÜBİTAK 2204-A support",
        "Developed BLE-based positioning algorithm",
        "Created scalable architecture for complex environments",
        "Implemented wayfinding algorithms"
      ],
      status: "Completed" as const,
      icon: Radio,
      color: "text-electric-cyan"
    },
    {
      id: "distillers-algorithm",
      title: "The Distiller's Algorithm",
      subtitle: "Cocktail & Bar Recipes Platform",
      period: "2025 – Present",
      description: "Personal website showcasing cocktail recipes, bar techniques, and mixology knowledge. Features interactive recipe database with detailed instructions, ingredient lists, and cocktail categories.",
      details: "A passion project combining web development skills with mixology knowledge. Built a comprehensive platform featuring an interactive recipe database, detailed cocktail instructions, and educational content about bar techniques. The site demonstrates full-stack development capabilities while sharing knowledge about the art of cocktail making.",
      technologies: ["Web Development", "Recipe Database", "Mixology", "Interactive Design", "Full-Stack"],
      achievements: [
        "Built interactive recipe database",
        "Created detailed instruction system",
        "Implemented category filtering",
        "Designed responsive UI/UX"
      ],
      status: "Active" as const,
      icon: Droplets,
      color: "text-yellow-400",
      link: "https://distillersalgorithm.uguremin.com"
    },
    {
      id: "ecowheels",
      title: "ECOWHEELS - Energy Efficient Vehicle",
      subtitle: "Teknofest 2025 Competition",
      period: "Mar 2025",
      description: "Designed the most energy efficient electric vehicle. My responsibility included the design of the Vehicle Control System, focusing on the firmware to enable user interaction and modulate car functions accordingly.",
      details: "Contributed to a competitive energy-efficient vehicle project for Teknofest 2025. Designed and implemented the Vehicle Control System firmware, creating an intuitive user interface and optimizing vehicle functions for maximum energy efficiency. The project involved real-time embedded programming and power management strategies.",
      technologies: ["Embedded Systems", "Firmware", "Vehicle Control", "Energy Efficiency", "Teknofest", "Power Management"],
      achievements: [
        "Designed Vehicle Control System",
        "Implemented energy-efficient firmware",
        "Created user interaction interface",
        "Optimized power consumption"
      ],
      status: "Completed" as const,
      icon: Leaf,
      color: "text-green-400"
    },
    {
      id: "ecorover",
      title: "ECO ROVER - Autonomous Rover",
      subtitle: "Software Team Lead / Electronics Team Member",
      period: "Oct 2024",
      description: "Coordinated a multidisciplinary software team for an autonomous rover project. Designed PCBs and integrated sensors using KiCAD and Altium Designer.",
      details: "Led the software development team while also contributing to electronics design for an autonomous rover project. Managed software architecture decisions, code reviews, and team coordination. Additionally designed PCBs for sensor integration and motor control using professional EDA tools.",
      technologies: ["Autonomous Systems", "KiCAD", "Altium Designer", "PCB Design", "Sensor Integration", "Team Leadership"],
      achievements: [
        "Led multidisciplinary software team",
        "Designed custom PCBs",
        "Integrated multiple sensor systems",
        "Implemented autonomous navigation"
      ],
      status: "Completed" as const,
      icon: Cpu,
      color: "text-blue-400"
    },
    {
      id: "aquafarm",
      title: "A.Q.U.A. F.A.R.M.",
      subtitle: "Automated Quality and Utility-Assisted Farming and Resource Management",
      period: "Oct 2024 – Jan 2025",
      description: "Multi-Disciplinary Engineering Project with Multi-Agent LLM Workflow for automated, soilless farming systems.",
      details: "Pioneered the integration of Multi-Agent LLM workflows with automated farming systems. The project demonstrated how AI can optimize soilless farming operations, from nutrient management to harvest scheduling. Combined IoT sensors, automation, and artificial intelligence to create a smart agriculture solution.",
      technologies: ["Multi-Agent LLM", "Automation", "IoT", "Agriculture", "AI", "Soilless Farming"],
      achievements: [
        "Implemented Multi-Agent LLM workflow",
        "Designed automated farming system",
        "Integrated IoT sensors",
        "Optimized resource management"
      ],
      status: "Completed" as const,
      icon: Brain,
      color: "text-purple-400"
    },
    {
      id: "rocket2024",
      title: "Teknofest 2024 Rocket Competition",
      subtitle: "Medium Altitude Category",
      period: "Jan 2024 – Jul 2024",
      description: "Member of the avionics team of GARUDA Rocket, responsible for electronic circuit design and component selection.",
      details: "Contributed to the GARUDA Rocket team competing in Teknofest 2024 Medium Altitude category. As an avionics team member, designed electronic circuits for flight systems and selected components for reliability under extreme conditions. Gained experience in aerospace electronics and high-reliability system design.",
      technologies: ["Avionics", "Circuit Design", "Rocket Engineering", "Component Selection", "Teknofest", "Aerospace"],
      achievements: [
        "Designed avionics circuits",
        "Selected flight-critical components",
        "Contributed to successful launches",
        "Learned aerospace engineering practices"
      ],
      status: "Completed" as const,
      icon: Rocket,
      color: "text-orange-400"
    },
    {
      id: "cyclock",
      title: "CycLock - Bicycle Security System",
      subtitle: "Security Concept",
      period: "Feb 2022 – Jun 2022",
      description: "Bicycle security system concept for enhanced protection and tracking.",
      details: "Developed a comprehensive bicycle security concept combining electronic locks, GPS tracking, and mobile app integration. The project explored IoT-based security solutions for personal transportation, including anti-theft mechanisms and owner notification systems.",
      technologies: ["Security Systems", "IoT", "Embedded Systems", "Prototyping", "GPS Tracking"],
      achievements: [
        "Designed security concept",
        "Prototyped electronic lock system",
        "Integrated GPS tracking",
        "Created mobile app concept"
      ],
      status: "Completed" as const,
      icon: Shield,
      color: "text-red-400"
    },
    {
      id: "seskes",
      title: "Ses Kes - Medical Noise Cancellation",
      subtitle: "Device for Neurodivergent People",
      period: "Sep 2023",
      description: "Electronics and Computer Engineer/Project Lead for medical noise cancellation device designed for neurodivergent individuals.",
      details: "Led the development of a specialized noise cancellation device designed to help neurodivergent individuals manage sensory overload. The project combined audio engineering, electronics design, and user-centered design principles to create an accessible medical device that improves quality of life.",
      technologies: ["Medical Devices", "Noise Cancellation", "Electronics", "Accessibility", "Healthcare", "Audio Processing"],
      achievements: [
        "Led project development",
        "Designed custom electronics",
        "Implemented noise cancellation algorithm",
        "Created user-friendly interface"
      ],
      status: "Completed" as const,
      icon: Brain,
      color: "text-cyan-400"
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Main Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <PCBTimeline
            entries={projects}
            title="Projects & Research"
            subtitle="A collection of innovative engineering projects, research initiatives, and competition entries showcasing expertise in electronics, robotics, and artificial intelligence."
          />

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
              <a href="mailto:baynal@uguremin.com" className="btn-primary group inline-flex items-center">
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

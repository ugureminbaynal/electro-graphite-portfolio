import React from 'react'
import { Briefcase, Download, Users, Award, Zap, Brain, Cpu } from 'lucide-react'
import PCBTimeline from '../components/PCBTimeline'

const Experience = () => {
  const experiences = [
    {
      id: "sds-iue",
      title: "Software Development Specialist",
      subtitle: "Izmir University of Economics",
      period: "Jan 2026 – Present",
      location: "Izmir, Turkey",
      description: "Working on software development projects at the university, focusing on innovative engineering solutions and research applications.",
      details: "Leading software development initiatives at the university, creating innovative solutions for academic and research needs. Collaborating with faculty and researchers to implement cutting-edge technologies and streamline university operations through custom software solutions.",
      technologies: ["Software Development", "Engineering Solutions", "Research Applications", "Python", "AI/ML"],
      achievements: [
        "Developing software solutions for university projects",
        "Contributing to research and development initiatives",
        "Implementing engineering applications",
        "Collaborating with cross-functional teams"
      ],
      icon: Zap,
      color: "text-electric-cyan",
      status: "Active" as const
    },
    {
      id: "rd-eps",
      title: "R&D Engineering Intern",
      subtitle: "EPS Technology",
      period: "Jun 2025 – Sep 2025",
      location: "Izmir, Turkey",
      description: "Supported an R&D project focused on color science and image processing. Contributed to experimental setups and data evaluation processes.",
      details: "Gained hands-on experience in research and development methodologies while working on advanced color science projects. Developed expertise in image processing algorithms and contributed to experimental design and data analysis for cutting-edge research initiatives.",
      technologies: ["Color Science", "Image Processing", "R&D", "Experimental Design", "Data Analysis"],
      achievements: [
        "Contributed to cutting-edge color science research",
        "Developed experimental setups for image processing",
        "Participated in data evaluation and analysis processes",
        "Learned advanced R&D methodologies"
      ],
      icon: Brain,
      color: "text-neon-blue",
      status: "Completed" as const
    },
    {
      id: "uta-iue",
      title: "Undergraduate Teaching Assistant",
      subtitle: "Izmir University of Economics",
      period: "Oct 2024 – 2025",
      location: "Izmir, Turkey",
      description: "Assisted in lab courses involving OrCAD PSpice, circuit analysis, and embedded systems. Helped students understand theoretical and practical components of engineering subjects.",
      details: "Provided comprehensive support in engineering laboratory courses, guiding students through complex circuit analysis and simulation techniques. Developed teaching materials and mentored students on embedded systems projects, helping them bridge the gap between theoretical concepts and practical applications.",
      technologies: ["OrCAD PSpice", "Circuit Analysis", "Embedded Systems", "Teaching", "Mentoring"],
      achievements: [
        "Supported students in laboratory courses",
        "Taught circuit analysis and simulation techniques",
        "Mentored students in embedded systems projects",
        "Created supplementary educational materials"
      ],
      icon: Users,
      color: "text-purple-400",
      status: "Completed" as const
    },
    {
      id: "tutor-pi",
      title: "Engineering Tutor",
      subtitle: "Pi-Course",
      period: "Aug 2024 – Present",
      location: "Remote",
      description: "Delivering personalized instruction in electrical/electronics and software courses. Preparing students for midterms and finals with tailored resources.",
      details: "Providing one-on-one and group tutoring sessions for engineering students across various skill levels. Developing custom learning materials and exam preparation strategies that have helped students from elite universities master advanced engineering concepts.",
      technologies: ["Electronics", "Software Engineering", "Teaching", "Tutoring", "Curriculum Development"],
      achievements: [
        "Delivered personalized instruction to engineering students",
        "Prepared students for exams with tailored resources",
        "Helped students from elite universities grasp advanced topics",
        "Developed custom learning materials"
      ],
      icon: Users,
      color: "text-yellow-400",
      status: "Active" as const
    },
    {
      id: "intern-aselsan",
      title: "Electronics Engineering Intern",
      subtitle: "ASELSAN Precision Optics",
      period: "Aug 2024 – Sep 2024",
      location: "Turkey",
      description: "Worked in Admittance-Quality and Thermal/Night Vision Departments, gaining hands-on experience in precision optics and defense electronics.",
      details: "Interned at Turkey's leading defense electronics company, rotating through critical departments including Admittance-Quality control and Thermal/Night Vision systems. Gained valuable experience in high-precision manufacturing processes and quality assurance for defense-grade electronics.",
      technologies: ["Precision Optics", "Thermal Imaging", "Quality Control", "Defense Electronics", "Night Vision Systems"],
      achievements: [
        "Gained experience in precision optics manufacturing",
        "Learned thermal and night vision technology",
        "Participated in quality control processes",
        "Understood defense industry standards"
      ],
      icon: Cpu,
      color: "text-cyber-orange",
      status: "Completed" as const
    },
    {
      id: "dev-evolvechat",
      title: "Full-Stack Developer",
      subtitle: "EvolveChat",
      period: "Jan 2024 – Feb 2024",
      location: "Remote",
      description: "Responsible for the development of the company's AI products, focusing on full-stack development and AI integration.",
      details: "Developed AI-powered chat applications from the ground up, implementing both frontend interfaces and backend services. Integrated machine learning models with web applications and contributed to the product development lifecycle from conception to deployment.",
      technologies: ["Full-Stack Development", "AI Integration", "Web Development", "Product Development", "Machine Learning"],
      achievements: [
        "Developed AI-powered chat applications",
        "Implemented full-stack solutions",
        "Contributed to product development lifecycle",
        "Integrated ML models with web applications"
      ],
      icon: Zap,
      color: "text-green-400",
      status: "Completed" as const
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

  return (
    <div className="min-h-screen relative">
      {/* Main Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <PCBTimeline
            entries={experiences}
            title="Professional Experience"
            subtitle="A diverse range of professional experiences spanning R&D, academia, and industry, showcasing expertise in electronics, software development, and engineering."
          />

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
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20260205.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
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

import React from 'react'
import { Mail, Download, GraduationCap, Briefcase, Languages, Users, BookOpen } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: "Electrical and Electronics Engineering",
      school: "Izmir University of Economics",
      period: "Oct 2021 – Present",
      location: "Izmir, Turkey",
      gpa: "3.16/4",
      details: "Current GPA: 3.16/4"
    },
    {
      degree: "Computer Engineering",
      school: "Izmir University of Economics", 
      period: "Sep 2022 – Present",
      location: "Izmir, Turkey",
      gpa: "2.58/4",
      details: "Current GPA: 2.58/4"
    },
    {
      degree: "Math and Science",
      school: "Ankara Gazi Anatolian High School",
      period: "Sep 2017 – Jun 2021",
      location: "Ankara, Turkey",
      gpa: "93.04%",
      details: "Graduation score: 93.04%"
    }
  ]

  const experience = [
    {
      title: "R&D Engineering Intern",
      company: "EPS Technology",
      period: "Jun 2025 – Present",
      location: "Izmir, Turkey",
      description: "Supporting an R&D project focused on color science and image processing. Contributing to experimental setups and data evaluation processes."
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Izmir University of Economics",
      period: "Oct 2024 – Present",
      location: "Izmir, Turkey",
      description: "Assisting in lab courses involving OrCAD PSpice, circuit analysis, and embedded systems. Helping students understand theoretical and practical components of engineering subjects."
    },
    {
      title: "Electronics Engineering Intern",
      company: "ASELSAN Precision Optics",
      period: "Aug 2024 – Sep 2024",
      location: "Turkey",
      description: "Admittance-Quality and Thermal/Night Vision Departments"
    },
    {
      title: "Full-Stack Developer",
      company: "EvolveChat",
      period: "Jan 2024 – Feb 2024",
      location: "Remote",
      description: "Responsible for the development of the company's AI products."
    }
  ]

  const skills = [
    { name: "MATLAB/Simulink", category: "Engineering Tools" },
    { name: "Python", category: "Programming" },
    { name: "Multi-Agent LLM Workflow Design", category: "AI/ML" },
    { name: "OrCAD KiCAD", category: "Electronics" },
    { name: "Java", category: "Programming" },
    { name: "ROS 2", category: "Robotics" },
    { name: "SQL", category: "Database" },
    { name: "CST Studio Communication", category: "Simulation" }
  ]

  const softSkills = [
    "Organisation", "Creativity", "Teaching Skills", "Teamwork",
    "Problem-Solving", "Project Management"
  ]

  const languages = [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Beginner" },
    { name: "German", level: "Beginner" },
    { name: "Latin", level: "Beginner" }
  ]

  const organizations = [
    {
      name: "IEEE IEU Robotics and Automation Society",
      role: "President",
      period: "Jun 2025 – Present"
    },
    {
      name: "IUE Advanced and Innovative Technologies Group",
      role: "Member",
      period: "Sep 2025 – Present"
    },
    {
      name: "IUE Signal Processing Group",
      role: "Member",
      period: "Jun 2025 – Present"
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              About Me
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              Electrical & Electronics Engineering and Computer Engineering student passionate about 
              integrating electronics and artificial intelligence to create groundbreaking solutions in R&D.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-electric-cyan mr-3" />
              Education
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="project-card p-6">
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-inter text-cloud-white mb-1">{edu.school}</p>
                  <p className="font-inter text-text-secondary text-sm mb-2">{edu.period}</p>
                  <p className="font-inter text-text-secondary text-sm mb-3">{edu.location}</p>
                  <div className="bg-electric-cyan/20 text-electric-cyan px-3 py-1 rounded text-sm font-jetbrains inline-block">
                    {edu.gpa}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Briefcase className="w-8 h-8 text-electric-cyan mr-3" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="project-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-inter text-cloud-white">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <p className="font-inter text-text-secondary text-sm">{exp.period}</p>
                      <p className="font-inter text-text-secondary text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <p className="font-inter text-text-secondary">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-electric-cyan mr-3" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-smoky-steel/50 p-3 rounded border border-electric-cyan/20">
                      <p className="font-jetbrains text-sm text-cloud-white">{skill.name}</p>
                      <p className="font-inter text-xs text-text-secondary">{skill.category}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-4">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="bg-smoky-steel/50 p-3 rounded border border-neon-blue/20">
                      <p className="font-jetbrains text-sm text-cloud-white">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Languages className="w-8 h-8 text-electric-cyan mr-3" />
              Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="project-card text-center p-4">
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-1">
                    {lang.name}
                  </h3>
                  <p className="font-inter text-sm text-text-secondary">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Users className="w-8 h-8 text-electric-cyan mr-3" />
              Organizations & Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organizations.map((org, index) => (
                <div key={index} className="project-card p-6">
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-2">
                    {org.name}
                  </h3>
                  <p className="font-inter text-cloud-white mb-2">{org.role}</p>
                  <p className="font-inter text-text-secondary text-sm">{org.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                Ready to Collaborate?
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                Let's work together on innovative engineering projects and cutting-edge R&D solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:ugurbaynal2003@gmail.com" className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
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

export default About

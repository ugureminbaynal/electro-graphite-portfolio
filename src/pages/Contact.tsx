import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Download } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "baynal@uguremin.com",
      link: "mailto:baynal@uguremin.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+90 546 218 9162",
      link: "tel:+905462189162"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Izmir, Turkey",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/",
      icon: Linkedin,
      color: "text-blue-400"
    },
    {
      name: "Instagram", 
      url: "https://instagram.com/realpremalone",
      icon: Instagram,
      color: "text-pink-400"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - you'll need to set up your own service
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Uğur Emin Baynal'
      }

      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const userId = 'YOUR_USER_ID' // Replace with your EmailJS user ID

      await emailjs.send(serviceId, templateId, templateParams, userId)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              Get in Touch
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              Ready to collaborate on innovative engineering projects? Let's discuss how we can work together 
              on cutting-edge R&D solutions and groundbreaking technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-electric-cyan/10 rounded-lg border border-electric-cyan/20">
                        <info.icon className="w-6 h-6 text-electric-cyan" />
                      </div>
                      <div>
                        <p className="font-jetbrains text-sm text-text-secondary">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="font-inter text-cloud-white hover:text-electric-cyan transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-inter text-cloud-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-ibm-plex text-xl font-semibold text-cloud-white mb-4">
                  Social Links
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-smoky-steel/50 rounded-lg border border-electric-cyan/20 hover:bg-electric-cyan/10 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-card p-6">
                <h3 className="font-ibm-plex text-xl font-semibold text-cloud-white mb-4">
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">Open to new opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">Available for research collaborations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">Interested in R&D projects</span>
                  </div>
                </div>
              </div>

              <div className="project-card p-6">
                <h3 className="font-ibm-plex text-xl font-semibold text-cloud-white mb-4">
                  Download CV
                </h3>
                <p className="font-inter text-text-secondary mb-4">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20250730.pdf"
                  download
                  className="btn-primary group inline-flex items-center"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-jetbrains text-sm text-cloud-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-smoky-steel/50 border border-electric-cyan/20 rounded-lg text-cloud-white placeholder-text-secondary focus:outline-none focus:border-electric-cyan transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-jetbrains text-sm text-cloud-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-smoky-steel/50 border border-electric-cyan/20 rounded-lg text-cloud-white placeholder-text-secondary focus:outline-none focus:border-electric-cyan transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-jetbrains text-sm text-cloud-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-smoky-steel/50 border border-electric-cyan/20 rounded-lg text-cloud-white placeholder-text-secondary focus:outline-none focus:border-electric-cyan transition-colors"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-jetbrains text-sm text-cloud-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-smoky-steel/50 border border-electric-cyan/20 rounded-lg text-cloud-white placeholder-text-secondary focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                    placeholder="Tell me about your project or how we can collaborate..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary group w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-inter text-sm">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-inter text-sm">
                      ❌ Failed to send message. Please try again or contact me directly at baynal@uguremin.com
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20">
            <div className="project-card p-8 text-center">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="font-inter text-text-secondary mb-6 max-w-2xl mx-auto">
                Whether you're looking for an engineering collaborator, need expertise in electronics and AI, 
                or want to discuss innovative R&D projects, I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Send Email
                </a>
                <a href="tel:+905462189162" className="btn-secondary group">
                  <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

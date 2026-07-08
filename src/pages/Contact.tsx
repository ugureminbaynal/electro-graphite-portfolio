import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Instagram, Download } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

const Contact = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'

  const contactInfo = [
    {
      icon: Mail,
      label: isTr ? "E-posta" : "Email",
      value: "baynal@uguremin.com",
      link: "mailto:baynal@uguremin.com"
    },
    {
      icon: Phone,
      label: isTr ? "Telefon" : "Phone",
      value: "+90 546 218 9162",
      link: "tel:+905462189162"
    },
    {
      icon: MapPin,
      label: isTr ? "Konum" : "Location",
      value: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
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

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              {isTr ? 'İletişime Geç' : 'Get in Touch'}
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              {isTr
                ? 'Bana ulaşmanın en hızlı yolu e-posta — genellikle bir gün içinde yanıtlarım.'
                : 'The fastest way to reach me is by email — I usually reply within a day.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-6">
                {isTr ? 'İletişim Bilgileri' : 'Contact Information'}
              </h2>
              <div className="space-y-5">
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

              <div className="mt-8 pt-6 border-t border-soft-graphite/60">
                <h3 className="font-ibm-plex text-lg font-semibold text-cloud-white mb-4">
                  {isTr ? 'Diğer Platformlar' : 'Elsewhere'}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`p-3 bg-smoky-steel/50 rounded-lg border border-electric-cyan/20 hover:bg-electric-cyan/10 hover:border-electric-cyan/50 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability + CV */}
            <div className="space-y-8">
              <div className="project-card p-8">
                <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-6">
                  {isTr ? 'Müsaitlik Durumu' : 'Current Availability'}
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">{isTr ? 'Yeni fırsatlara açığım' : 'Open to new opportunities'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">{isTr ? 'Araştırma iş birliklerine uygunum' : 'Available for research collaborations'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="font-inter text-cloud-white">{isTr ? 'Ar-Ge projeleriyle ilgileniyorum' : 'Interested in R&D projects'}</span>
                  </div>
                </div>
              </div>

              <div className="project-card p-8">
                <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                  {isTr ? 'CV İndir' : 'Download CV'}
                </h2>
                <p className="font-inter text-text-secondary mb-6">
                  {isTr
                    ? 'Deneyimim, becerilerim ve projelerim hakkında ayrıntılı bilgi edinin.'
                    : 'Get a detailed overview of my experience, skills, and projects.'}
                </p>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20260702.pdf"
                  download
                  className="btn-secondary group w-full"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Özgeçmişi İndir' : 'Download Resume'}
                </a>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-16">
            <div className="project-card p-8 text-center">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                {isTr ? 'Birlikte Harika Bir Şeyler İnşa Edelim' : "Let's Build Something Amazing Together"}
              </h2>
              <p className="font-inter text-text-secondary mb-6 max-w-2xl mx-auto">
                {isTr
                  ? 'İster bir mühendislik iş birliği arıyor olun, ister elektronik ve yapay zekâ uzmanlığına ihtiyacınız olsun, ister yenilikçi Ar-Ge projeleri konuşmak isteyin — fikirlerinizi hayata geçirmek için buradayım.'
                  : "Whether you're looking for an engineering collaborator, need expertise in electronics and AI, or want to discuss innovative R&D projects, I'm here to help bring your ideas to life."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'E-posta Gönder' : 'Send Email'}
                </a>
                <a href="tel:+905462189162" className="btn-secondary group">
                  <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Hemen Ara' : 'Call Now'}
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

import React from 'react'
import { Award, Star, FileText, Download, Target } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

const Certificates = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'
  const isEs = lang === 'es'

  const certificates = [
    {
      title: isTr ? "TÜBİTAK 2204-A Lisans Araştırma Projesi" : "TÜBİTAK 2204-A Undergraduate Research Project",
      organization: "TÜBİTAK",
      period: isTr ? "2024 – Devam" : "2024 – Present",
      description: isTr
        ? "'KAYRA - İç Mekân Konumlandırma Sistemi' lisans araştırma projesi desteği. Bu prestijli hibe, mühendislik ve teknolojide yenilikçi araştırmaları destekliyor."
        : "Support for undergraduate research project 'KAYRA - Indoor Localization System'. This prestigious grant supports innovative research in engineering and technology.",
      category: isTr ? "Araştırma Hibesi" : "Research Grant",
      status: "Active",
      icon: Award,
      color: "text-electric-cyan"
    },
    {
      title: isTr ? "IEEE IEU Robotik ve Otomasyon Topluluğu" : "IEEE IEU Robotics and Automation Society",
      organization: "IEEE",
      period: isTr ? "Haz 2025 – Devam" : "Jun 2025 – Present",
      description: isTr
        ? "IEEE IEU Robotik ve Otomasyon Topluluğu Başkanı olarak robotik eğitimi ve araştırması alanında girişimlere liderlik ediyorum."
        : "Serving as Chairman of the IEEE IEU Robotics and Automation Society, leading initiatives in robotics education and research.",
      category: isTr ? "Liderlik" : "Leadership",
      status: "Active",
      icon: Star,
      color: "text-blue-400"
    },
    {
      title: isTr ? "İEÜ İleri ve Yenilikçi Teknolojiler Grubu" : "IUE Advanced and Innovative Technologies Group",
      organization: isTr ? "İEÜ" : "IUE",
      period: isTr ? "Eyl 2025 – Devam" : "Sep 2025 – Present",
      description: isTr
        ? "İleri ve Yenilikçi Teknolojiler Grubu'nun aktif üyesi olarak son teknoloji araştırma ve geliştirme çalışmalarına katkıda bulunuyorum."
        : "Active member of the Advanced and Innovative Technologies Group, contributing to cutting-edge technology research and development.",
      category: isTr ? "Araştırma Grubu" : "Research Group",
      status: "Active",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: isTr ? "İEÜ Sinyal İşleme Grubu" : "IUE Signal Processing Group",
      organization: isTr ? "İEÜ" : "IUE",
      period: isTr ? "Haz 2025 – Devam" : "Jun 2025 – Present",
      description: isTr
        ? "Sinyal İşleme Grubu üyesi olarak ileri sinyal işleme teknikleri ve uygulamaları üzerinde çalışıyorum."
        : "Member of the Signal Processing Group, working on advanced signal processing techniques and applications.",
      category: isTr ? "Araştırma Grubu" : "Research Group",
      status: "Active",
      icon: FileText,
      color: "text-purple-400"
    },
    {
      title: isTr ? "InovaTim Yapay Zekâ Kursu" : "InovaTim AI Course",
      organization: "InovaTim",
      period: "2019",
      description: isTr
        ? "Makine öğrenmesi temelleri, sinir ağları ve yapay zekâ geliştirmede pratik uygulamaları kapsayan kapsamlı yapay zekâ kursu."
        : "Comprehensive artificial intelligence course covering machine learning fundamentals, neural networks, and practical applications in AI development.",
      category: isTr ? "Yapay Zekâ" : "AI/ML",
      status: "Completed",
      icon: FileText,
      color: "text-cyan-400"
    },
    {
      title: isTr ? "İzmir Ekonomi Üniversitesi Mentor Programı" : "Izmir University of Economics Mentor Programme",
      organization: isTr ? "İEÜ" : "IUE",
      period: "2024",
      description: isTr
        ? "Üniversitenin mentor programına katılarak akademik ve kariyer gelişimi için değerli rehberlik ve içgörüler edindim."
        : "Participated in the university's mentor program, gaining valuable guidance and insights for academic and career development.",
      category: isTr ? "Liderlik" : "Leadership",
      status: "Completed",
      icon: Star,
      color: "text-blue-400"
    },
    {
      title: "MATLAB Onramp",
      organization: "MathWorks",
      period: "2025",
      description: isTr
        ? "MATLAB Onramp kursunu tamamlayarak temel MATLAB programlama kavramlarında, veri analizinde ve matris işlemlerinde yetkinlik kazandım."
        : "Completed MATLAB Onramp course, mastering fundamental MATLAB programming concepts, data analysis, and matrix operations for engineering applications.",
      category: isTr ? "Programlama" : "Programming",
      status: "Completed",
      icon: FileText,
      color: "text-orange-400"
    },
    {
      title: isTr ? "MATLAB Sinyal Üretimi ve Yeniden Örnekleme" : "MATLAB Signal Generation and Resampling",
      organization: "MathWorks",
      period: "2025",
      description: isTr
        ? "Sinyal üretimi, yeniden örnekleme yöntemleri ve sayısal sinyal işleme konularına odaklanan ileri düzey MATLAB kursu."
        : "Advanced MATLAB course focusing on signal processing techniques, including signal generation, resampling methods, and digital signal processing for engineering applications.",
      category: isTr ? "Sinyal İşleme" : "Signal Processing",
      status: "Completed",
      icon: FileText,
      color: "text-green-400"
    },
    {
      title: isTr ? "MATLAB Spektral Analiz Teknikleri" : "MATLAB Spectral Analysis Techniques",
      organization: "MathWorks",
      period: "2025",
      description: isTr
        ? "Frekans alanı analizi, FFT teknikleri ve ileri sinyal işleme yöntemlerini kapsayan MATLAB spektral analiz kursu."
        : "Specialized course in MATLAB spectral analysis, covering frequency domain analysis, FFT techniques, and advanced signal processing methods.",
      category: isTr ? "Sinyal İşleme" : "Signal Processing",
      status: "Completed",
      icon: FileText,
      color: "text-green-400"
    },
    {
      title: "Simulink Onramp",
      organization: "MathWorks",
      period: "2025",
      description: isTr
        ? "Simulink Onramp kursunu tamamlayarak sistem modelleme, simülasyon teknikleri ve blok diyagram tasarımı öğrendim."
        : "Completed Simulink Onramp course, learning system modeling, simulation techniques, and block diagram design for engineering applications.",
      category: isTr ? "Mühendislik" : "Engineering",
      status: "Completed",
      icon: FileText,
      color: "text-yellow-400"
    }
  ]

  const achievements = [
    {
      title: isTr ? "Lise Diploma Notu" : "High School Graduation Score",
      value: "93.04%",
      description: isTr
        ? "Ankara Gazi Anadolu Lisesi sayısal bölümünde üstün akademik başarı"
        : "Outstanding academic performance in Math and Science at Ankara Gazi Anatolian High School",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: isTr ? "Elektrik-Elektronik Not Ortalaması" : "Electrical Engineering GPA",
      value: "3.17/4.00",
      description: isTr
        ? "Elektrik-Elektronik Mühendisliği'nde güçlü akademik performans"
        : "Strong academic performance in Electrical and Electronics Engineering",
      icon: Award,
      color: "text-electric-cyan"
    },
    {
      title: isTr ? "Çift Anadal" : "Double Major",
      value: "EE + CE",
      description: isTr
        ? "Elektrik-Elektronik Mühendisliği ve Bilgisayar Mühendisliği çift anadal"
        : "Pursuing double major in Electrical & Electronics Engineering and Computer Engineering",
      icon: Target,
      color: "text-neon-blue"
    },
    {
      title: isTr ? "Dil Yetkinliği" : "Language Proficiency",
      value: isTr ? "5 Dil" : "5 Languages",
      description: isTr
        ? "Türkçe (Ana dil), İngilizce (Akıcı), İspanyolca, Almanca, Latince (Başlangıç)"
        : "Turkish (Native), English (Fluent), Spanish, German, Latin (Beginner)",
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

  const getStatusLabel = (status: string) => {
    if (isTr) return status === 'Active' ? 'Aktif' : 'Tamamlandı'
    if (isEs) return status === 'Active' ? 'Activo' : 'Completado'
    return status
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research Grant":
      case "Araştırma Hibesi":
        return "bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30"
      case "Leadership":
      case "Liderlik":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30"
      case "Research Group":
      case "Araştırma Grubu":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "AI/ML":
      case "Yapay Zekâ":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
      case "Programming":
      case "Programlama":
        return "bg-orange-500/20 text-orange-400 border-orange-400/30"
      case "Signal Processing":
      case "Sinyal İşleme":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "Engineering":
      case "Mühendislik":
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
              {isTr ? 'Sertifikalar ve Başarılar' : isEs ? 'Certificados y Logros' : 'Certificates & Achievements'}
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              {isTr
                ? 'Mühendislik ve teknoloji alanlarında akademik başarı, araştırma katkıları ve profesyonel kazanımlar.'
                : isEs
                ? 'Reconocimiento a la excelencia académica, contribuciones a la investigación y logros profesionales en ingeniería y tecnología.'
                : 'Recognition of academic excellence, research contributions, and professional achievements in engineering and technology fields.'}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {certificates.map((cert, index) => (
              <div key={index} className="project-card p-6 group">
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
                    {getStatusLabel(cert.status)}
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
              {isTr ? 'Akademik Başarılar' : isEs ? 'Logros Académicos' : 'Academic Achievements'}
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
                      {isTr ? 'Öne Çıkan Başarı: TÜBİTAK 2204-A' : isEs ? 'Logro Destacado: TÜBİTAK 2204-A' : 'Featured Achievement: TÜBİTAK 2204-A'}
                    </h2>
                  </div>
                  <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                    {isTr
                      ? "TÜBİTAK 2204-A Lisans Araştırma Projeleri Desteği, Türkiye'de lisans öğrencileri için en prestijli araştırma fonlarından biridir. Bu destek, iç mekân konumlandırma teknolojisinde çığır açan araştırmalar yapmamızı sağlayan KAYRA projemize güç veriyor."
                      : 'The TÜBİTAK 2204-A Undergraduate Research Project Grant is one of the most prestigious research funding opportunities for undergraduate students in Turkey. This grant supports our KAYRA project, enabling cutting-edge research in indoor localization technology.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs font-jetbrains rounded">{isTr ? 'Araştırma Hibesi' : 'Research Grant'}</span>
                    <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-jetbrains rounded">TÜBİTAK</span>
                    <span className="px-3 py-1 bg-cyber-orange/20 text-cyber-orange text-xs font-jetbrains rounded">{isTr ? 'Aktif Proje' : 'Active Project'}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-electric-cyan/20 to-neon-blue/20 rounded-full backdrop-blur-sm border border-electric-cyan/30 flex items-center justify-center mx-auto">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-electric-cyan mx-auto mb-4 animate-pulse" />
                      <div className="font-jetbrains text-sm text-electric-cyan">
                        <div>TÜBİTAK 2204-A</div>
                        <div className="text-xs text-text-secondary">{isTr ? 'Araştırma Hibesi' : 'Research Grant'}</div>
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
                {isTr ? 'Başarının Üzerine İnşa Etmek' : isEs ? 'Construyendo sobre el Éxito' : 'Building on Success'}
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                {isTr
                  ? 'Bu başarılar akademik ve profesyonel yolculuğumun kilometre taşları. Mühendislik ve araştırmada bu çizgiyi sürdürmeye kararlıyım.'
                  : isEs
                  ? 'Estos logros representan hitos en mi trayectoria académica y profesional. Estoy comprometido a mantener esta línea de excelencia en ingeniería e investigación.'
                  : "These achievements represent milestones in my academic and professional journey. I'm committed to continuing this trajectory of excellence in engineering and research."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Award size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Fırsatları Konuşalım' : isEs ? 'Hablemos de Oportunidades' : 'Discuss Opportunities'}
                </a>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20260702.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'CV İndir' : isEs ? 'Descargar CV' : 'Download CV'}
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

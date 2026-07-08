import React from 'react'
import { Briefcase, Download, Users, Award, Zap, Brain, Cpu } from 'lucide-react'
import PCBTimeline from '../components/PCBTimeline'
import { useSettings } from '../context/SettingsContext'

const Experience = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'

  const experiences = [
    {
      id: "sds-iue",
      title: isTr ? "Yazılım Geliştirme Uzmanı" : "Software Development Specialist",
      subtitle: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Oca 2026 – Devam" : "Jan 2026 – Present",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "Üniversitede yenilikçi mühendislik çözümlerine ve araştırma uygulamalarına odaklanan yazılım geliştirme projeleri yürütüyorum."
        : "Working on software development projects at the university, focusing on innovative engineering solutions and research applications.",
      details: isTr
        ? "Üniversitede yazılım geliştirme girişimlerine öncülük ediyor, akademik ve araştırma ihtiyaçları için yenilikçi çözümler üretiyorum. Öğretim üyeleri ve araştırmacılarla birlikte çalışarak güncel teknolojileri hayata geçiriyor, üniversite süreçlerini özel yazılımlarla iyileştiriyorum."
        : "Leading software development initiatives at the university, creating innovative solutions for academic and research needs. Collaborating with faculty and researchers to implement cutting-edge technologies and streamline university operations through custom software solutions.",
      technologies: isTr
        ? ["Yazılım Geliştirme", "Mühendislik Çözümleri", "Araştırma Uygulamaları", "Python", "AI/ML"]
        : ["Software Development", "Engineering Solutions", "Research Applications", "Python", "AI/ML"],
      achievements: isTr
        ? [
            "Üniversite projeleri için yazılım çözümleri geliştirme",
            "Araştırma-geliştirme girişimlerine katkı",
            "Mühendislik uygulamaları geliştirme",
            "Çok disiplinli ekiplerle iş birliği"
          ]
        : [
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
      title: isTr ? "Ar-Ge Mühendisliği Stajyeri" : "R&D Engineering Intern",
      subtitle: "EPS Technology",
      period: isTr ? "Haz 2025 – Eyl 2025" : "Jun 2025 – Sep 2025",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "Renk bilimi ve görüntü işleme odaklı bir Ar-Ge projesine destek verdim. Deney düzenekleri ve veri değerlendirme süreçlerine katkıda bulundum."
        : "Supported an R&D project focused on color science and image processing. Contributed to experimental setups and data evaluation processes.",
      details: isTr
        ? "İleri renk bilimi projelerinde çalışarak araştırma-geliştirme metodolojilerinde uygulamalı deneyim kazandım. Görüntü işleme algoritmalarında uzmanlık geliştirdim; deney tasarımına ve veri analizine katkı sağladım."
        : "Gained hands-on experience in research and development methodologies while working on advanced color science projects. Developed expertise in image processing algorithms and contributed to experimental design and data analysis for cutting-edge research initiatives.",
      technologies: isTr
        ? ["Renk Bilimi", "Görüntü İşleme", "Ar-Ge", "Deney Tasarımı", "Veri Analizi"]
        : ["Color Science", "Image Processing", "R&D", "Experimental Design", "Data Analysis"],
      achievements: isTr
        ? [
            "Güncel renk bilimi araştırmalarına katkı",
            "Görüntü işleme için deney düzenekleri geliştirme",
            "Veri değerlendirme ve analiz süreçlerine katılım",
            "İleri Ar-Ge metodolojileri öğrenimi"
          ]
        : [
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
      id: "instructor-acedumy",
      title: isTr ? "Mühendislik Eğitmeni" : "Engineering Instructor",
      subtitle: "AcEdumy",
      period: "Mar 2025",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Platformda elektrik-elektronik ve yazılım derslerinden oluşan video serileri hazırladım."
        : "Delivered video series in electrical/electronics and software courses on the platform.",
      details: isTr
        ? "Bir çevrim içi eğitim platformu için elektrik-elektronik mühendisliği ve yazılım konularını kapsayan yapılandırılmış video ders serileri hazırlayıp sundum; karmaşık mühendislik kavramlarını geniş bir öğrenci kitlesi için erişilebilir kıldım."
        : "Created and delivered structured video course series covering electrical/electronics engineering and software topics for an online education platform, making complex engineering concepts accessible to a broad audience of learners.",
      technologies: isTr
        ? ["Elektronik", "Yazılım", "Ders Tasarımı", "Video Prodüksiyonu", "Eğitim"]
        : ["Electronics", "Software", "Course Design", "Video Production", "Teaching"],
      achievements: isTr
        ? [
            "Elektrik-elektronik konularında video serileri üretimi",
            "Yazılım mühendisliği ders içerikleri hazırlama",
            "Çevrim içi öğrenciler için müfredat tasarımı",
            "Karmaşık kavramları geniş kitleler için erişilebilir kılma"
          ]
        : [
            "Produced video series on electrical/electronics topics",
            "Delivered software engineering course content",
            "Designed curriculum for online learners",
            "Made complex concepts accessible to broad audiences"
          ],
      icon: Users,
      color: "text-pink-400",
      status: "Completed" as const
    },
    {
      id: "uta-iue",
      title: isTr ? "Lisans Öğrenci Asistanı" : "Undergraduate Teaching Assistant",
      subtitle: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Eki 2024 – 2025" : "Oct 2024 – 2025",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "OrCAD PSpice, devre analizi ve gömülü sistemler içeren laboratuvar derslerinde asistanlık yaptım. Öğrencilerin teorik ve pratik konuları anlamalarına yardımcı oldum."
        : "Assisted in lab courses involving OrCAD PSpice, circuit analysis, and embedded systems. Helped students understand theoretical and practical components of engineering subjects.",
      details: isTr
        ? "Mühendislik laboratuvar derslerinde kapsamlı destek sağladım; öğrencilere karmaşık devre analizi ve simülasyon tekniklerinde rehberlik ettim. Ders materyalleri hazırladım ve gömülü sistem projelerinde mentorluk yaparak teori ile pratik arasındaki köprüyü kurmalarına yardımcı oldum."
        : "Provided comprehensive support in engineering laboratory courses, guiding students through complex circuit analysis and simulation techniques. Developed teaching materials and mentored students on embedded systems projects, helping them bridge the gap between theoretical concepts and practical applications.",
      technologies: isTr
        ? ["OrCAD PSpice", "Devre Analizi", "Gömülü Sistemler", "Öğretim", "Mentorluk"]
        : ["OrCAD PSpice", "Circuit Analysis", "Embedded Systems", "Teaching", "Mentoring"],
      achievements: isTr
        ? [
            "Laboratuvar derslerinde öğrenci desteği",
            "Devre analizi ve simülasyon teknikleri öğretimi",
            "Gömülü sistem projelerinde mentorluk",
            "Ek eğitim materyalleri hazırlama"
          ]
        : [
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
      title: isTr ? "Mühendislik Eğitmeni" : "Engineering Tutor",
      subtitle: "Pi-Course",
      period: isTr ? "Ağu 2024 – Devam" : "Aug 2024 – Present",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Elektrik-elektronik ve yazılım derslerinde birebir eğitim veriyorum. Öğrencileri özel kaynaklarla vize ve finallere hazırlıyorum."
        : "Delivering personalized instruction in electrical/electronics and software courses. Preparing students for midterms and finals with tailored resources.",
      details: isTr
        ? "Farklı seviyelerdeki mühendislik öğrencilerine birebir ve grup dersleri veriyorum. Seçkin üniversitelerden öğrencilerin ileri mühendislik kavramlarını kavramasına yardımcı olan özgün öğrenme materyalleri ve sınav hazırlık stratejileri geliştiriyorum."
        : "Providing one-on-one and group tutoring sessions for engineering students across various skill levels. Developing custom learning materials and exam preparation strategies that have helped students from elite universities master advanced engineering concepts.",
      technologies: isTr
        ? ["Elektronik", "Yazılım Mühendisliği", "Öğretim", "Özel Ders", "Müfredat Geliştirme"]
        : ["Electronics", "Software Engineering", "Teaching", "Tutoring", "Curriculum Development"],
      achievements: isTr
        ? [
            "Mühendislik öğrencilerine birebir eğitim",
            "Özel kaynaklarla sınav hazırlığı",
            "Seçkin üniversite öğrencilerine ileri konularda destek",
            "Özgün öğrenme materyalleri geliştirme"
          ]
        : [
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
      title: isTr ? "Elektronik Mühendisliği Stajyeri" : "Electronics Engineering Intern",
      subtitle: isTr ? "ASELSAN Hassas Optik" : "ASELSAN Precision Optics",
      period: isTr ? "Ağu 2024 – Eyl 2024" : "Aug 2024 – Sep 2024",
      location: isTr ? "Türkiye" : "Turkey",
      description: isTr
        ? "Girdi Kalite ile Termal/Gece Görüş departmanlarında çalışarak hassas optik ve savunma elektroniğinde uygulamalı deneyim kazandım."
        : "Worked in Admittance-Quality and Thermal/Night Vision Departments, gaining hands-on experience in precision optics and defense electronics.",
      details: isTr
        ? "Türkiye'nin lider savunma elektroniği şirketinde staj yaptım; Girdi Kalite kontrol ve Termal/Gece Görüş sistemleri gibi kritik departmanlarda görev aldım. Yüksek hassasiyetli üretim süreçlerinde ve savunma sınıfı elektronik için kalite güvencesinde değerli deneyim edindim."
        : "Interned at Turkey's leading defense electronics company, rotating through critical departments including Admittance-Quality control and Thermal/Night Vision systems. Gained valuable experience in high-precision manufacturing processes and quality assurance for defense-grade electronics.",
      technologies: isTr
        ? ["Hassas Optik", "Termal Görüntüleme", "Kalite Kontrol", "Savunma Elektroniği", "Gece Görüş Sistemleri"]
        : ["Precision Optics", "Thermal Imaging", "Quality Control", "Defense Electronics", "Night Vision Systems"],
      achievements: isTr
        ? [
            "Hassas optik üretiminde deneyim",
            "Termal ve gece görüş teknolojilerini öğrenme",
            "Kalite kontrol süreçlerine katılım",
            "Savunma sanayii standartlarını tanıma"
          ]
        : [
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
      title: isTr ? "Full-Stack Geliştirici" : "Full-Stack Developer",
      subtitle: "EvolveChat",
      period: isTr ? "Oca 2024 – Şub 2024" : "Jan 2024 – Feb 2024",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Şirketin yapay zekâ ürünlerinin geliştirilmesinden sorumluydum; full-stack geliştirme ve yapay zekâ entegrasyonuna odaklandım."
        : "Responsible for the development of the company's AI products, focusing on full-stack development and AI integration.",
      details: isTr
        ? "Yapay zekâ destekli sohbet uygulamalarını sıfırdan geliştirdim; hem ön yüz arayüzlerini hem arka uç servislerini yazdım. Makine öğrenmesi modellerini web uygulamalarıyla entegre ettim ve ürünün fikirden dağıtıma tüm geliştirme yaşam döngüsüne katkı sağladım."
        : "Developed AI-powered chat applications from the ground up, implementing both frontend interfaces and backend services. Integrated machine learning models with web applications and contributed to the product development lifecycle from conception to deployment.",
      technologies: isTr
        ? ["Full-Stack Geliştirme", "Yapay Zekâ Entegrasyonu", "Web Geliştirme", "Ürün Geliştirme", "Makine Öğrenmesi"]
        : ["Full-Stack Development", "AI Integration", "Web Development", "Product Development", "Machine Learning"],
      achievements: isTr
        ? [
            "Yapay zekâ destekli sohbet uygulamaları geliştirme",
            "Full-stack çözümler hayata geçirme",
            "Ürün geliştirme yaşam döngüsüne katkı",
            "ML modellerinin web uygulamalarıyla entegrasyonu"
          ]
        : [
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
    { name: isTr ? "Ar-Ge" : "R&D", category: isTr ? "Araştırma ve Geliştirme" : "Research & Development" },
    { name: isTr ? "Öğretim" : "Teaching", category: isTr ? "Eğitim" : "Education" },
    { name: isTr ? "Devre Tasarımı" : "Circuit Design", category: isTr ? "Elektronik" : "Electronics" },
    { name: isTr ? "Gömülü Sistemler" : "Embedded Systems", category: isTr ? "Mühendislik" : "Engineering" },
    { name: isTr ? "Full-Stack Geliştirme" : "Full-Stack Development", category: isTr ? "Yazılım" : "Software" },
    { name: isTr ? "Yapay Zekâ Entegrasyonu" : "AI Integration", category: isTr ? "Teknoloji" : "Technology" },
    { name: isTr ? "Kalite Kontrol" : "Quality Control", category: isTr ? "Üretim" : "Manufacturing" },
    { name: isTr ? "Hassas Optik" : "Precision Optics", category: isTr ? "Uzmanlık" : "Specialized" }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Main Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <PCBTimeline
            entries={experiences}
            title={isTr ? "Profesyonel Deneyim" : "Professional Experience"}
            subtitle={isTr
              ? "Ar-Ge, akademi ve endüstriyi kapsayan; elektronik, yazılım geliştirme ve mühendislik uzmanlığını yansıtan deneyimler."
              : "A diverse range of professional experiences spanning R&D, academia, and industry, showcasing expertise in electronics, software development, and engineering."}
          />

          {/* Skills Section */}
          <div className="mt-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-electric-cyan mr-3" />
              {isTr ? 'Temel Yetkinlikler' : 'Core Competencies'}
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
                {isTr ? 'Yeni Zorluklara Hazırım' : 'Ready for New Challenges'}
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                {isTr
                  ? 'Becerilerimi Ar-Ge, mühendislik ve teknoloji geliştirme alanlarında uygulayabileceğim yeni fırsatlar arıyorum.'
                  : "I'm always looking for new opportunities to apply my skills in R&D, engineering, and technology development."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Briefcase size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Fırsatlar için İletişime Geç' : 'Contact for Opportunities'}
                </a>
                <a
                  href="/Uğur-Emin-Baynal-FlowCV-Resume-20260702.pdf"
                  download
                  className="btn-secondary group"
                >
                  <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Özgeçmişi İndir' : 'Download Resume'}
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

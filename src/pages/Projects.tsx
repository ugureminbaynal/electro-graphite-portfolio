import React from 'react'
import { Rocket, Cpu, Leaf, Shield, Brain, Radio, Droplets, Recycle, Mail } from 'lucide-react'
import PCBTimeline from '../components/PCBTimeline'
import { useSettings } from '../context/SettingsContext'

const Projects = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'
  const isEs = lang === 'es'

  const projects = [
    {
      id: "silkworm",
      title: isTr ? "Silkworm - 3B Plastik Geri Dönüşüm Makinesi" : "Silkworm - 3D Plastic Recycling Machine",
      subtitle: isTr ? "Kurucu Ortak, Ar-Ge Sorumlusu" : "Co-Founder, Head of R&D",
      period: isTr ? "Eyl 2025 – Devam" : "Sep 2025 – Present",
      description: isTr
        ? "Mekanik yapısı ve motor/ısıtma kontrolleri dahil bir 3B plastik geri dönüşüm makinesi tasarlayıp ürettim. Sıcaklık, motor hızı ve güvenlik işlevleri için mikrodenetleyici tabanlı otomasyon geliştirdim."
        : "Designed and built a 3D plastic recycling machine, including mechanical structure and motor/heating controls. Developed microcontroller-based automation for temperature, motor speed, and safety functions.",
      details: isTr
        ? "Plastik atığı kullanılabilir 3B yazıcı filamentine dönüştüren yenilikçi bir geri dönüşüm makinesinin Ar-Ge çalışmalarını yürütüyorum. Proje; mekanik mühendislik, gömülü sistemler ve otomasyonu bir araya getirerek plastik geri dönüşümüne sürdürülebilir bir çözüm sunuyor. Hassas sıcaklık ve motor hızı regülasyonu için özel kontrol sistemleri geliştirdim."
        : "Leading the R&D efforts for an innovative 3D plastic recycling machine that transforms plastic waste into usable 3D printer filament. The project involves mechanical engineering, embedded systems, and automation to create a sustainable solution for plastic recycling. Developed custom control systems for precise temperature and motor speed regulation.",
      technologies: isTr
        ? ["3B Baskı", "Geri Dönüşüm", "Mikrodenetleyici", "Otomasyon", "Motor Kontrolü", "Sıcaklık Kontrolü"]
        : ["3D Printing", "Recycling", "Microcontroller", "Automation", "Motor Control", "Temperature Control"],
      achievements: isTr
        ? [
            "Komple mekanik yapı tasarımı",
            "Mikrodenetleyici tabanlı otomasyon geliştirme",
            "Güvenlik işlevlerinin uygulanması",
            "Kararlı geri dönüşüm performansı için optimizasyon"
          ]
        : [
            "Designed complete mechanical structure",
            "Developed microcontroller-based automation",
            "Implemented safety functions",
            "Optimized for stable recycling performance"
          ],
      status: "Active" as const,
      icon: Recycle,
      color: "text-green-500",
      link: "https://silkworm.uguremin.com"
    },
    {
      id: "kayra",
      title: isTr ? "K.A.Y.R.A. - İç Mekân Konumlandırma Sistemi" : "K.A.Y.R.A. - Indoor Localization System",
      subtitle: "Know About Your Route Always",
      period: isTr ? "Eyl 2024" : "Sep 2024",
      description: isTr
        ? "BLE Tabanlı Konumlandırma ve Yön Bulma: Karmaşık kapalı alanlar için ölçeklenebilir bir yaklaşım. TÜBİTAK 2204-A destekli, iç mekân navigasyonu ve konumlandırma sistemlerine odaklanan proje."
        : "BLE-Based Localisation and Wayfinding: A Scalable Approach for Complex Indoor Environments. TÜBİTAK 2204-A Supported project focusing on indoor navigation and positioning systems.",
      details: isTr
        ? "Bluetooth Low Energy (BLE) işaretçileri kullanan ölçeklenebilir bir iç mekân konumlandırma sistemi geliştirdik. Proje, GPS'in çalışmadığı ortamlarda hassas konumlandırma sorununa çözüm getirdi. TÜBİTAK 2204-A araştırma desteği, projenin bilimsel değerini ve yenilikçiliğini kanıtlıyor."
        : "Developed a scalable indoor localization system using Bluetooth Low Energy (BLE) beacons. The project addressed the challenge of GPS-denied environments by creating an accurate indoor positioning solution. Supported by TÜBİTAK 2204-A research grant, demonstrating the project's scientific merit and innovation.",
      technologies: isTr
        ? ["BLE", "IoT", "Konumlandırma", "TÜBİTAK", "Gömülü Sistemler", "Sinyal İşleme"]
        : ["BLE", "IoT", "Localization", "TÜBİTAK", "Embedded Systems", "Signal Processing"],
      achievements: isTr
        ? [
            "TÜBİTAK 2204-A desteği kazanma",
            "BLE tabanlı konumlandırma algoritması geliştirme",
            "Karmaşık ortamlar için ölçeklenebilir mimari",
            "Yön bulma algoritmalarının uygulanması"
          ]
        : [
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
      subtitle: isTr ? "Kokteyl ve Bar Tarifleri Platformu" : "Cocktail & Bar Recipes Platform",
      period: isTr ? "2025 – Devam" : "2025 – Present",
      description: isTr
        ? "Kokteyl tarifleri, bar teknikleri ve miksoloji bilgisi sunan kişisel web sitesi. Ayrıntılı talimatlar, malzeme listeleri ve kokteyl kategorileriyle etkileşimli bir tarif veritabanı içerir."
        : "Personal website showcasing cocktail recipes, bar techniques, and mixology knowledge. Features interactive recipe database with detailed instructions, ingredient lists, and cocktail categories.",
      details: isTr
        ? "Web geliştirme becerilerini miksoloji bilgisiyle birleştiren bir tutku projesi. Etkileşimli tarif veritabanı, ayrıntılı kokteyl talimatları ve bar teknikleri hakkında eğitici içerik sunan kapsamlı bir platform kurdum. Site, kokteyl yapma sanatını paylaşırken full-stack geliştirme yetkinliklerini de sergiliyor."
        : "A passion project combining web development skills with mixology knowledge. Built a comprehensive platform featuring an interactive recipe database, detailed cocktail instructions, and educational content about bar techniques. The site demonstrates full-stack development capabilities while sharing knowledge about the art of cocktail making.",
      technologies: isTr
        ? ["Web Geliştirme", "Tarif Veritabanı", "Miksoloji", "Etkileşimli Tasarım", "Full-Stack"]
        : ["Web Development", "Recipe Database", "Mixology", "Interactive Design", "Full-Stack"],
      achievements: isTr
        ? [
            "Etkileşimli tarif veritabanı kurulumu",
            "Ayrıntılı talimat sistemi oluşturma",
            "Kategori filtreleme uygulaması",
            "Duyarlı arayüz tasarımı"
          ]
        : [
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
      title: isTr ? "ECOWHEELS - Enerji Verimli Araç" : "ECOWHEELS - Energy Efficient Vehicle",
      subtitle: isTr ? "Teknofest 2025 Yarışması" : "Teknofest 2025 Competition",
      period: "Mar 2025",
      description: isTr
        ? "En enerji verimli elektrikli aracı tasarlama yarışması. Araç Kontrol Sistemi tasarımından ve kullanıcı etkileşimini sağlayıp araç işlevlerini yöneten aygıt yazılımından sorumluydum."
        : "Designed the most energy efficient electric vehicle. My responsibility included the design of the Vehicle Control System, focusing on the firmware to enable user interaction and modulate car functions accordingly.",
      details: isTr
        ? "Teknofest 2025 için enerji verimli araç projesine katkıda bulundum. Araç Kontrol Sistemi aygıt yazılımını tasarlayıp uyguladım; sezgisel bir kullanıcı arayüzü oluşturarak araç işlevlerini maksimum enerji verimliliği için optimize ettim. Proje gerçek zamanlı gömülü programlama ve güç yönetimi stratejileri içeriyordu."
        : "Contributed to a competitive energy-efficient vehicle project for Teknofest 2025. Designed and implemented the Vehicle Control System firmware, creating an intuitive user interface and optimizing vehicle functions for maximum energy efficiency. The project involved real-time embedded programming and power management strategies.",
      technologies: isTr
        ? ["Gömülü Sistemler", "Aygıt Yazılımı", "Araç Kontrolü", "Enerji Verimliliği", "Teknofest", "Güç Yönetimi"]
        : ["Embedded Systems", "Firmware", "Vehicle Control", "Energy Efficiency", "Teknofest", "Power Management"],
      achievements: isTr
        ? [
            "Araç Kontrol Sistemi tasarımı",
            "Enerji verimli aygıt yazılımı geliştirme",
            "Kullanıcı etkileşim arayüzü oluşturma",
            "Güç tüketimi optimizasyonu"
          ]
        : [
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
      title: isTr ? "ECO ROVER - Otonom Keşif Aracı" : "ECO ROVER - Autonomous Rover",
      subtitle: isTr ? "Yazılım Ekip Lideri / Elektronik Ekip Üyesi" : "Software Team Lead / Electronics Team Member",
      period: isTr ? "Eki 2024" : "Oct 2024",
      description: isTr
        ? "Otonom keşif aracı projesi için çok disiplinli bir yazılım ekibini koordine ettim. KiCAD ve Altium Designer kullanarak PCB tasarlayıp sensörleri entegre ettim."
        : "Coordinated a multidisciplinary software team for an autonomous rover project. Designed PCBs and integrated sensors using KiCAD and Altium Designer.",
      details: isTr
        ? "Otonom keşif aracı projesinde yazılım geliştirme ekibine liderlik ederken elektronik tasarıma da katkı sağladım. Yazılım mimarisi kararlarını, kod incelemelerini ve ekip koordinasyonunu yönettim. Ayrıca sensör entegrasyonu ve motor kontrolü için profesyonel EDA araçlarıyla PCB'ler tasarladım."
        : "Led the software development team while also contributing to electronics design for an autonomous rover project. Managed software architecture decisions, code reviews, and team coordination. Additionally designed PCBs for sensor integration and motor control using professional EDA tools.",
      technologies: isTr
        ? ["Otonom Sistemler", "KiCAD", "Altium Designer", "PCB Tasarımı", "Sensör Entegrasyonu", "Ekip Liderliği"]
        : ["Autonomous Systems", "KiCAD", "Altium Designer", "PCB Design", "Sensor Integration", "Team Leadership"],
      achievements: isTr
        ? [
            "Çok disiplinli yazılım ekibine liderlik",
            "Özel PCB tasarımları",
            "Çoklu sensör sistemleri entegrasyonu",
            "Otonom navigasyon uygulaması"
          ]
        : [
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
      subtitle: isTr
        ? "Otomatik, Kalite ve Fayda Destekli Tarım ve Kaynak Yönetimi"
        : "Automated Quality and Utility-Assisted Farming and Resource Management",
      period: isTr ? "Eki 2024 – Oca 2025" : "Oct 2024 – Jan 2025",
      description: isTr
        ? "Otomatik, topraksız tarım sistemleri için Çoklu-Ajan LLM iş akışlı çok disiplinli mühendislik projesi."
        : "Multi-Disciplinary Engineering Project with Multi-Agent LLM Workflow for automated, soilless farming systems.",
      details: isTr
        ? "Çoklu-Ajan LLM iş akışlarının otomatik tarım sistemleriyle entegrasyonuna öncülük ettim. Proje; besin yönetiminden hasat planlamasına kadar yapay zekânın topraksız tarım operasyonlarını nasıl optimize edebileceğini gösterdi. IoT sensörleri, otomasyon ve yapay zekâyı akıllı bir tarım çözümünde birleştirdik."
        : "Pioneered the integration of Multi-Agent LLM workflows with automated farming systems. The project demonstrated how AI can optimize soilless farming operations, from nutrient management to harvest scheduling. Combined IoT sensors, automation, and artificial intelligence to create a smart agriculture solution.",
      technologies: isTr
        ? ["Çoklu-Ajan LLM", "Otomasyon", "IoT", "Tarım", "Yapay Zekâ", "Topraksız Tarım"]
        : ["Multi-Agent LLM", "Automation", "IoT", "Agriculture", "AI", "Soilless Farming"],
      achievements: isTr
        ? [
            "Çoklu-Ajan LLM iş akışı uygulaması",
            "Otomatik tarım sistemi tasarımı",
            "IoT sensör entegrasyonu",
            "Kaynak yönetimi optimizasyonu"
          ]
        : [
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
      title: isTr ? "Teknofest 2024 Roket Yarışması" : "Teknofest 2024 Rocket Competition",
      subtitle: isTr ? "Orta İrtifa Kategorisi" : "Medium Altitude Category",
      period: isTr ? "Oca 2024 – Tem 2024" : "Jan 2024 – Jul 2024",
      description: isTr
        ? "GARUDA Roket takımının aviyonik ekibinde yer aldım; elektronik devre tasarımı ve bileşen seçiminden sorumluydum."
        : "Member of the avionics team of GARUDA Rocket, responsible for electronic circuit design and component selection.",
      details: isTr
        ? "Teknofest 2024 Orta İrtifa kategorisinde yarışan GARUDA Roket takımına katkı sağladım. Aviyonik ekibi üyesi olarak uçuş sistemleri için elektronik devreler tasarladım ve zorlu koşullarda güvenilirlik için bileşen seçimi yaptım. Havacılık elektroniği ve yüksek güvenilirlikli sistem tasarımında deneyim kazandım."
        : "Contributed to the GARUDA Rocket team competing in Teknofest 2024 Medium Altitude category. As an avionics team member, designed electronic circuits for flight systems and selected components for reliability under extreme conditions. Gained experience in aerospace electronics and high-reliability system design.",
      technologies: isTr
        ? ["Aviyonik", "Devre Tasarımı", "Roket Mühendisliği", "Bileşen Seçimi", "Teknofest", "Havacılık"]
        : ["Avionics", "Circuit Design", "Rocket Engineering", "Component Selection", "Teknofest", "Aerospace"],
      achievements: isTr
        ? [
            "Aviyonik devre tasarımı",
            "Uçuş açısından kritik bileşen seçimi",
            "Başarılı fırlatmalara katkı",
            "Havacılık mühendisliği pratikleri"
          ]
        : [
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
      title: isTr ? "CycLock - Bisiklet Güvenlik Sistemi" : "CycLock - Bicycle Security System",
      subtitle: isTr ? "Güvenlik Konsepti" : "Security Concept",
      period: isTr ? "Şub 2022 – Haz 2022" : "Feb 2022 – Jun 2022",
      description: isTr
        ? "Gelişmiş koruma ve takip için bisiklet güvenlik sistemi konsepti."
        : "Bicycle security system concept for enhanced protection and tracking.",
      details: isTr
        ? "Elektronik kilit, GPS takibi ve mobil uygulama entegrasyonunu birleştiren kapsamlı bir bisiklet güvenliği konsepti geliştirdim. Proje; hırsızlık önleme mekanizmaları ve sahibine bildirim sistemleri dahil, kişisel ulaşım için IoT tabanlı güvenlik çözümlerini araştırdı."
        : "Developed a comprehensive bicycle security concept combining electronic locks, GPS tracking, and mobile app integration. The project explored IoT-based security solutions for personal transportation, including anti-theft mechanisms and owner notification systems.",
      technologies: isTr
        ? ["Güvenlik Sistemleri", "IoT", "Gömülü Sistemler", "Prototipleme", "GPS Takibi"]
        : ["Security Systems", "IoT", "Embedded Systems", "Prototyping", "GPS Tracking"],
      achievements: isTr
        ? [
            "Güvenlik konsepti tasarımı",
            "Elektronik kilit sistemi prototipi",
            "GPS takip entegrasyonu",
            "Mobil uygulama konsepti"
          ]
        : [
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
      title: isTr ? "Ses Kes - Medikal Gürültü Engelleme" : "Ses Kes - Medical Noise Cancellation",
      subtitle: isTr ? "Nörodiverjan Bireyler için Cihaz" : "Device for Neurodivergent People",
      period: isTr ? "Eyl 2023" : "Sep 2023",
      description: isTr
        ? "Nörodiverjan bireyler için tasarlanan medikal gürültü engelleme cihazında Elektronik/Bilgisayar Mühendisi ve Proje Lideri olarak görev aldım."
        : "Electronics and Computer Engineer/Project Lead for medical noise cancellation device designed for neurodivergent individuals.",
      details: isTr
        ? "Nörodiverjan bireylerin duyusal aşırı yüklenmeyi yönetmesine yardımcı olan özel bir gürültü engelleme cihazının geliştirilmesine liderlik ettim. Proje; ses mühendisliği, elektronik tasarım ve kullanıcı odaklı tasarım ilkelerini birleştirerek yaşam kalitesini artıran erişilebilir bir medikal cihaz ortaya koydu."
        : "Led the development of a specialized noise cancellation device designed to help neurodivergent individuals manage sensory overload. The project combined audio engineering, electronics design, and user-centered design principles to create an accessible medical device that improves quality of life.",
      technologies: isTr
        ? ["Medikal Cihazlar", "Gürültü Engelleme", "Elektronik", "Erişilebilirlik", "Sağlık", "Ses İşleme"]
        : ["Medical Devices", "Noise Cancellation", "Electronics", "Accessibility", "Healthcare", "Audio Processing"],
      achievements: isTr
        ? [
            "Proje geliştirmeye liderlik",
            "Özel elektronik tasarımı",
            "Gürültü engelleme algoritması uygulaması",
            "Kullanıcı dostu arayüz tasarımı"
          ]
        : [
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
            title={isTr ? "Projeler ve Araştırma" : isEs ? "Proyectos e Investigación" : "Projects & Research"}
            subtitle={isTr
              ? "Elektronik, robotik ve yapay zekâ alanlarındaki uzmanlığı yansıtan yenilikçi mühendislik projeleri, araştırma girişimleri ve yarışma çalışmaları."
              : isEs
              ? "Una colección de proyectos de ingeniería innovadores, iniciativas de investigación y participaciones en competiciones que muestran experiencia en electrónica, robótica e inteligencia artificial."
              : "A collection of innovative engineering projects, research initiatives, and competition entries showcasing expertise in electronics, robotics, and artificial intelligence."}
          />

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="project-card p-8">
              <h2 className="font-ibm-plex text-2xl font-semibold text-cloud-white mb-4">
                {isTr ? 'İş Birliği Yapmak İster misiniz?' : isEs ? '¿Te interesa colaborar?' : 'Interested in Collaborating?'}
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                {isTr
                  ? 'Yeni mühendislik zorluklarına ve araştırma fırsatlarına her zaman açığım. Yenilikçi projelerde nasıl birlikte çalışabileceğimizi konuşalım.'
                  : isEs
                  ? 'Siempre estoy abierto a nuevos retos de ingeniería y oportunidades de investigación. Hablemos de cómo podemos trabajar juntos en proyectos innovadores.'
                  : "I'm always open to new engineering challenges and research opportunities. Let's discuss how we can work together on innovative projects."}
              </p>
              <a href="mailto:baynal@uguremin.com" className="btn-primary group inline-flex items-center">
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                {isTr ? 'Proje Başlat' : isEs ? 'Iniciar un Proyecto' : 'Start a Project'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

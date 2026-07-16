import React from 'react'
import { Mail, Download, GraduationCap, Briefcase, Languages, Users, BookOpen, BookMarked } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

const About = () => {
  const { lang } = useSettings()
  const isTr = lang === 'tr'
  const isEs = lang === 'es'

  const education = [
    {
      degree: isTr ? "Elektrik-Elektronik Mühendisliği" : "Electrical and Electronics Engineering",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Eki 2021 – Tem 2026" : "Oct 2021 – Jul 2026",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      gpa: "3.17/4"
    },
    {
      degree: isTr ? "Bilgisayar Mühendisliği" : "Computer Engineering",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Eyl 2022 – Tem 2026" : "Sep 2022 – Jul 2026",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      gpa: "2.93/4"
    },
    {
      degree: isTr ? "Sayısal (Matematik-Fen)" : "Math and Science",
      school: isTr ? "Ankara Gazi Anadolu Lisesi" : "Ankara Gazi Anatolian High School",
      period: isTr ? "Eyl 2017 – Haz 2021" : "Sep 2017 – Jun 2021",
      location: isTr ? "Ankara, Türkiye" : "Ankara, Turkey",
      gpa: "93.04%"
    }
  ]

  const experience = [
    {
      title: isTr ? "Yazılım Geliştirme Uzmanı" : "Software Development Specialist",
      company: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Oca 2026 – Devam" : "Jan 2026 – Present",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "Üniversitede yenilikçi mühendislik çözümlerine odaklanan yazılım geliştirme projeleri yürütüyorum."
        : "Working on software development projects at the university, focusing on innovative engineering solutions."
    },
    {
      title: isTr ? "Ar-Ge Mühendisliği Stajyeri" : "R&D Engineering Intern",
      company: "EPS Technology",
      period: isTr ? "Haz 2025 – Eyl 2025" : "Jun 2025 – Sep 2025",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "Renk bilimi ve görüntü işleme odaklı bir Ar-Ge projesine destek verdim. Deney düzenekleri ve veri değerlendirme süreçlerine katkıda bulundum."
        : "Supported an R&D project focused on color science and image processing. Contributed to experimental setups and data evaluation processes."
    },
    {
      title: isTr ? "Mühendislik Eğitmeni" : "Engineering Instructor",
      company: "AcEdumy",
      period: isTr ? "Mar 2025" : "Mar 2025",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Platformda elektrik-elektronik ve yazılım derslerinden oluşan video serileri hazırladım."
        : "Delivered video series in electrical/electronics and software courses on the platform."
    },
    {
      title: isTr ? "Lisans Öğrenci Asistanı" : "Undergraduate Teaching Assistant",
      company: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      period: isTr ? "Eki 2024 – 2025" : "Oct 2024 – 2025",
      location: isTr ? "İzmir, Türkiye" : "Izmir, Turkey",
      description: isTr
        ? "OrCAD PSpice, devre analizi ve gömülü sistemler içeren laboratuvar derslerinde asistanlık yaptım. Öğrencilerin teorik ve pratik konuları anlamalarına yardımcı oldum."
        : "Assisted in lab courses involving OrCAD PSpice, circuit analysis, and embedded systems. Helped students understand theoretical and practical components of engineering subjects."
    },
    {
      title: isTr ? "Mühendislik Eğitmeni" : "Engineering Tutor",
      company: "Pi-Course",
      period: isTr ? "Ağu 2024 – Devam" : "Aug 2024 – Present",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Elektrik-elektronik ve yazılım derslerinde birebir eğitim veriyorum. Öğrencileri özel kaynaklarla vize ve finallere hazırlıyorum."
        : "Delivering personalized instruction in electrical/electronics and software courses. Preparing students for midterms and finals with tailored resources."
    },
    {
      title: isTr ? "Elektronik Mühendisliği Stajyeri" : "Electronics Engineering Intern",
      company: isTr ? "ASELSAN Hassas Optik" : "ASELSAN Precision Optics",
      period: isTr ? "Ağu 2024 – Eyl 2024" : "Aug 2024 – Sep 2024",
      location: isTr ? "Türkiye" : "Turkey",
      description: isTr
        ? "Girdi Kalite ile Termal/Gece Görüş departmanlarında staj yaptım."
        : "Admittance-Quality and Thermal/Night Vision Departments"
    },
    {
      title: isTr ? "Full-Stack Geliştirici" : "Full-Stack Developer",
      company: "EvolveChat",
      period: isTr ? "Oca 2024 – Şub 2024" : "Jan 2024 – Feb 2024",
      location: isTr ? "Uzaktan" : "Remote",
      description: isTr
        ? "Şirketin yapay zekâ ürünlerinin geliştirilmesinden sorumluydum."
        : "Responsible for the development of the company's AI products."
    }
  ]

  const skills = [
    { name: "MATLAB/Simulink", category: isTr ? "Mühendislik Araçları" : "Engineering Tools" },
    { name: "Python", category: isTr ? "Programlama" : "Programming" },
    { name: isTr ? "Çoklu-Ajan LLM İş Akışı Tasarımı" : "Multi-Agent LLM Workflow Design", category: isTr ? "Yapay Zekâ" : "AI/ML" },
    { name: "OrCAD / KiCAD", category: isTr ? "Elektronik" : "Electronics" },
    { name: "Java", category: isTr ? "Programlama" : "Programming" },
    { name: "ROS 2", category: isTr ? "Robotik" : "Robotics" },
    { name: "SQL", category: isTr ? "Veritabanı" : "Database" },
    { name: "CST Studio", category: isTr ? "Simülasyon" : "Simulation" }
  ]

  const softSkills = isTr
    ? ["İletişim", "Organizasyon", "Yaratıcılık", "Öğretme Becerisi", "Takım Çalışması", "Problem Çözme", "Proje Yönetimi"]
    : ["Communication", "Organisation", "Creativity", "Teaching Skills", "Teamwork", "Problem-Solving", "Project Management"]

  const languages = [
    { name: isTr ? "Türkçe" : isEs ? "Turco" : "Turkish", level: isTr ? "Ana dil" : isEs ? "Nativo" : "Native" },
    { name: isTr ? "İngilizce" : isEs ? "Inglés" : "English", level: isTr ? "Akıcı" : isEs ? "Fluido" : "Fluent" },
    { name: isTr ? "İspanyolca" : isEs ? "Español" : "Spanish", level: isTr ? "Başlangıç" : isEs ? "Principiante" : "Beginner" },
    { name: isTr ? "Almanca" : isEs ? "Alemán" : "German", level: isTr ? "Başlangıç" : isEs ? "Principiante" : "Beginner" },
    { name: isTr ? "Latince" : isEs ? "Latín" : "Latin", level: isTr ? "Başlangıç" : isEs ? "Principiante" : "Beginner" }
  ]

  const courses = [
    {
      code: "CE 475",
      name: isTr ? "Makine Öğrenmesinin Temelleri ve Uygulamaları" : "Fundamentals and Applications of Machine Learning",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      description: isTr
        ? "Makine öğrenmesi algoritmaları bilgimi genişlettim. Ders projesinde verilen bir veri kümesi üzerinde MATLAB ile tahminleme yaptım."
        : "Expanded knowledge of machine learning algorithms. Course project involved dataset prediction using MATLAB implementation."
    },
    {
      code: "MCE 412",
      name: isTr ? "Otonom Robotik" : "Autonomous Robotics",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "Izmir University of Economics",
      description: isTr
        ? "Otonom robotik sistemlerde temel tasarım ve analiz yöntemlerini öğrendim."
        : "Learned fundamental methods of design and analysis on autonomous robotics systems."
    },
    {
      code: "EEE 453",
      name: isTr ? "Uyarlanabilir Filtreler" : "Adaptive Filters",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "İzmir University of Economics",
      description: isTr
        ? "Rastgele süreçlerin modellenmesi, durağan süreçler, optimal (Wiener) filtreleme, uyarlanabilir filtreleme, en dik iniş, LMS ve RLS algoritmaları ile Kalman filtresi teorisi üzerine bilgi edindim."
        : "Gained knowledge on modeling random processes, stationary processes, linear optimal (Wiener) filtering, linear adaptive filtering, steepest descent, LMS and RLS learning algorithms, and Kalman filter theory."
    },
    {
      code: "EEE 461",
      name: isTr ? "Gömülü Sistem Tasarımı" : "Embedded System Design",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "İzmir University of Economics",
      description: isTr
        ? "Mikrodenetleyici mimarileri, çevre birimleri ve gerçek dünya gömülü uygulamalarını kapsayan gömülü sistem tasarımı ve gerçeklemesi üzerine çalıştım."
        : "Studied the design and implementation of embedded systems, covering microcontroller architectures, peripherals, and real-world embedded applications."
    },
    {
      code: "CE 490",
      name: isTr ? "Sayısal Görüntü İşleme" : "Digital Image Processing",
      school: isTr ? "İzmir Ekonomi Üniversitesi" : "İzmir University of Economics",
      description: isTr
        ? "Görüntü iyileştirme, filtreleme ve analiz yöntemleri dahil temel sayısal görüntü işleme tekniklerini inceledim."
        : "Explored fundamental digital image processing techniques, including image enhancement, filtering, and analysis methods."
    }
  ]

  const organizations = [
    {
      name: isTr ? "IEEE IEU Robotik ve Otomasyon Topluluğu" : "IEEE IEU Robotics and Automation Society",
      role: isTr ? "Başkan" : "Chairman",
      period: isTr ? "Haz 2025 – Devam" : "Jun 2025 – Present"
    },
    {
      name: isTr ? "İEÜ İleri ve Yenilikçi Teknolojiler Grubu" : "IUE Advanced and Innovative Technologies Group",
      role: isTr ? "Üye" : "Member",
      period: isTr ? "Eyl 2025 – Devam" : "Sep 2025 – Present"
    },
    {
      name: isTr ? "İEÜ Sinyal İşleme Grubu" : "IUE Signal Processing Group",
      role: isTr ? "Üye" : "Member",
      period: isTr ? "Haz 2025 – Devam" : "Jun 2025 – Present"
    },
    {
      name: isTr ? "EcoFusion'24 (IEEE IUE Öğrenci Kolu)" : "EcoFusion'24 by IEEE IUE Student Branch",
      role: isTr ? "Arduino Atölyesi Eğitmeni" : "Arduino Workshop Instructor",
      period: isTr ? "Eki 2024" : "Oct 2024"
    },
    {
      name: isTr ? "Model Birleşmiş Milletler (MUN)" : "Model United Nations",
      role: isTr
        ? "Delege, Başkan, USG, Direktör, Genel Sekreter, Organizasyon Danışmanı"
        : "Delegate, President Chair, USG, Director-General, Secretary-General, Organisational Advisor",
      period: isTr ? "Oca 2018 – Haz 2023" : "Jan 2018 – Jun 2023"
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
              {isTr ? 'Ben Kimim?' : isEs ? '¿Quién Soy?' : 'Who Am I?'}
            </h1>
            <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
              {isTr
                ? 'Mühendis, eğitmen, kokteyl meraklısı ve mahallenin dost canlısı Spider-Man hayranı. CV\'nin anlatmadığı hikâye burada.'
                : isEs
                ? 'Ingeniero, profesor, científico de cócteles y fan del amistoso Spider-Man del barrio. Esta es la historia que el CV no cuenta.'
                : "Engineer, teacher, cocktail scientist, and friendly neighborhood Spider-Man fan. Here's the story behind the resume."}
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Story */}
              <div className="lg:col-span-3 space-y-5 font-inter text-text-secondary text-lg leading-relaxed">
                {isTr ? (
                  <>
                    <p>
                      <span className="text-cloud-white">Ankara</span>'da büyüdüm; liseyi Gazi Anadolu
                      Lisesi'nde, sayısal bölümde okudum. <span className="text-electric-cyan">%93,04</span>'lük
                      bir dereceyle mezun oldum ama asıl dersleri sınıfın dışında aldım. Beş yılımı{' '}
                      <span className="text-cloud-white">Model Birleşmiş Milletler</span>'e verdim —
                      kürsüye çıkmaya çekinen bir delegeden Genel Sekreterliğe uzanan bir yol. Kalabalık
                      bir salona karmaşık bir meseleyi anlatabilmenin doğuştan gelen bir yetenek değil,
                      sabırla örülen bir beceri olduğunu orada öğrendim. O gün bugündür yaptığım her
                      işin içinde o sahnenin izi var.
                    </p>
                    <p>
                      2021'de <span className="text-cloud-white">İzmir</span>'in yolunu tuttum; İzmir
                      Ekonomi Üniversitesi'nde Elektrik-Elektronik Mühendisliği'ne başladım. Daha ilk
                      yılın sonunda tek diploma bana dar geldi,{' '}
                      <span className="text-cloud-white">Bilgisayar Mühendisliği</span>'ni çift anadal
                      olarak yanına ekledim. Donanımla yazılım, durmadan birbiriyle tartışan iki kardeş
                      gibidir; ben ikisinin de dilinden anlamayı seviyorum. Roketler ve keşif araçları
                      için devre kartları çizdim, enerji verimli araçlara gömülü yazılımlar yazdım,
                      topraksız tarım için Çoklu-Ajan LLM iş akışları kurdum.
                    </p>
                    <p>
                      MUN'da başlayan hikâye hiç bitmedi; yalnızca kılık değiştirdi.{' '}
                      <span className="text-cloud-white">Özel dersler verdim, laboratuvarlarda
                      asistanlık yaptım, atölyeler düzenledim, video dersler çektim</span>; bugün de
                      IEEE IEU'da robotik etkinlikler yürütüyorum. Bir konuyu gerçekten anlamamın yolu
                      onu birine anlatmaktan geçiyor — o yüzden öğretmek benim için ek bir iş değil,
                      düşünme biçimim.
                    </p>
                    <p>
                      İşten arta kalan zamanlardaysa{' '}
                      <a
                        href="https://distillersalgorithm.uguremin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:underline"
                      >
                        The Distiller's Algorithm
                      </a>
                      'i yazıyorum: kokteyl tariflerini ve bar tekniklerini, laboratuvar raporu yazar
                      gibi titizlikle kayda geçirdiğim bir site.
                    </p>
                    <p>
                      Ve evet — mezuniyet fotoğrafında sırt çantamdan bakan bir{' '}
                      <span className="text-cloud-white">Spider-Man maskesi</span> var. Onu her yere
                      taşımıyorum; maske yalnızca büyük günlerde ortaya çıkıyor. Her gün yanımda
                      taşıdığımsa onun temsil ettiği şey. Ağları, kostümü bir kenara koyun; Peter
                      Parker aslında kimsenin görmediği yerlerde darbe yiyen bir öğrencidir — kira
                      derdi, gece vardiyaları, sınavlar ve her seferinde yeniden ayağa kalkmak. O
                      hayatı ben de bilirim: bir dönem{' '}
                      <span className="text-cloud-white">başımı sokacak bir evim yoktu</span>; çift
                      anadalın üzerine part-time işleri üst üste koydum ve ikisinden de vazgeçmedim.
                    </p>
                    <blockquote className="border-l-2 border-electric-cyan/60 pl-5 py-1 font-jetbrains text-cloud-white/90 italic">
                      "Ama her şeye rağmen Spider-Man olmayı hâlâ seviyorum. Kim sevmez ki? O yüzden
                      kaç darbe alırsam alayım, geri dönmenin bir yolunu hep buluyorum."
                    </blockquote>
                    <p>
                      O zaman pes etmedim, şimdi de etmeye niyetim yok. Kostümün bana en iyi oturan
                      parçası da bu — hayat yumruk sallamaya devam ettikçe ben de sallanmaya devam
                      ediyorum.
                    </p>
                  </>
                ) : isEs ? (
                  <>
                    <p>
                      Crecí en <span className="text-cloud-white">Ankara</span> y cursé el bachillerato
                      de ciencias en el Instituto Anatolio Gazi. Me gradué con un{' '}
                      <span className="text-electric-cyan">93,04 %</span>, aunque las lecciones más
                      importantes las aprendí fuera del aula. Le dediqué cinco años al{' '}
                      <span className="text-cloud-white">Modelo de Naciones Unidas</span>: un camino que
                      empezó con un delegado que temía subir al estrado y terminó en la Secretaría
                      General. Allí aprendí que explicar algo complejo ante una sala llena no es un
                      talento de nacimiento, sino una habilidad que se construye con paciencia. Desde
                      entonces, hay algo de aquel escenario en todo lo que hago.
                    </p>
                    <p>
                      En 2021 me mudé a <span className="text-cloud-white">Esmirna</span> para estudiar
                      Ingeniería Eléctrica y Electrónica en la Universidad de Economía de Izmir. Al
                      final del primer año un solo título me quedaba pequeño, así que sumé{' '}
                      <span className="text-cloud-white">Ingeniería Informática</span> como doble
                      titulación. El hardware y el software son como dos hermanos que discuten sin
                      parar; a mí me gusta hablar el idioma de los dos: he diseñado placas para cohetes
                      y róveres, escrito firmware para vehículos de bajo consumo y montado flujos de
                      trabajo de LLM multiagente para agricultura sin suelo.
                    </p>
                    <p>
                      La historia que empezó en el MUN nunca terminó; solo se cambió de disfraz.{' '}
                      <span className="text-cloud-white">He dado clases particulares, he sido asistente
                      de laboratorio, he impartido talleres y cursos en vídeo</span>, y hoy coordino
                      actividades de robótica en IEEE IEU. Solo entiendo algo de verdad cuando tengo que
                      explicárselo a alguien; por eso enseñar no es un trabajo extra: es mi manera de
                      pensar.
                    </p>
                    <p>
                      En mi tiempo libre escribo{' '}
                      <a
                        href="https://distillersalgorithm.uguremin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:underline"
                      >
                        The Distiller's Algorithm
                      </a>
                      : un sitio donde documento recetas de cócteles y técnicas de bar con el mismo
                      rigor que un informe de laboratorio.
                    </p>
                    <p>
                      Y sí: en la foto de graduación hay una{' '}
                      <span className="text-cloud-white">máscara de Spider-Man</span> asomando de mi
                      mochila. No la llevo a todas partes; solo sale en los días importantes. Lo que sí
                      llevo cada día es lo que representa. Olvídate de las telarañas y del traje: Peter
                      Parker es, en el fondo, un estudiante que encaja golpes donde nadie lo ve — el
                      alquiler, los turnos de noche, los exámenes y volver a levantarse una y otra vez.
                      Esa vida también la conozco: hubo una época en la que{' '}
                      <span className="text-cloud-white">no tenía un techo propio</span>; acumulé
                      trabajos a tiempo parcial encima de una doble titulación de ingeniería y no solté
                      ninguna de las dos cosas.
                    </p>
                    <blockquote className="border-l-2 border-electric-cyan/60 pl-5 py-1 font-jetbrains text-cloud-white/90 italic">
                      "Pero después de todo, todavía me encanta ser Spider-Man. ¿A quién no le
                      encantaría? Así que, por muchos golpes que reciba, siempre encuentro la manera de
                      volver."
                    </blockquote>
                    <p>
                      No me rendí entonces y no pienso empezar ahora. Esa es la parte del traje que
                      mejor me queda: mientras la vida siga lanzando golpes, yo seguiré columpiándome.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I grew up in <span className="text-cloud-white">Ankara</span>, on the math-and-science
                      track at Gazi Anatolian High School — the kind of student who finished with a{' '}
                      <span className="text-electric-cyan">93.04%</span> but learned just as much outside
                      the classroom. For five years I lived and breathed{' '}
                      <span className="text-cloud-white">Model United Nations</span>, climbing from nervous
                      first-time Delegate all the way to Secretary-General. That's where I learned that
                      standing in front of a room and making a complicated thing make sense is a skill you
                      build, not a talent you're born with. It has shaped everything I've done since.
                    </p>
                    <p>
                      In 2021 I moved to <span className="text-cloud-white">Izmir</span> to study
                      Electrical & Electronics Engineering at Izmir University of Economics. One year in,
                      one engineering degree didn't feel like enough — so I added{' '}
                      <span className="text-cloud-white">Computer Engineering</span> as a double major.
                      Hardware and software argue constantly, and I like being fluent in both sides of the
                      conversation: I've designed PCBs for rockets and rovers, written firmware for
                      energy-efficient vehicles, and orchestrated Multi-Agent LLM workflows for automated
                      farms.
                    </p>
                    <p>
                      The MUN thread never really ended — it just changed costumes. I've been a{' '}
                      <span className="text-cloud-white">tutor, a teaching assistant, a workshop and video-course
                      instructor</span>, and I chair robotics events at IEEE IEU. I understand things best
                      when I have to explain them, so teaching is less a side gig and more how my brain works.
                    </p>
                    <p>
                      Off the clock, I run{' '}
                      <a
                        href="https://distillersalgorithm.uguremin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:underline"
                      >
                        The Distiller's Algorithm
                      </a>
                      , where I document cocktail recipes and bar technique with the same rigor I use for
                      lab reports.
                    </p>
                    <p>
                      And yes — that's a <span className="text-cloud-white">Spider-Man mask</span> peeking
                      out of my backpack at graduation. It only comes out for the big days; what I carry
                      every day is the idea behind it. Strip away the web-slinging and Peter Parker is just
                      a student taking hits nobody claps for — rent, night shifts, exams, repeat. I know
                      that story from the inside: for a while I had{' '}
                      <span className="text-cloud-white">no home</span>, stacking part-time jobs on top of
                      a double engineering major and refusing to let either drop.
                    </p>
                    <blockquote className="border-l-2 border-electric-cyan/60 pl-5 py-1 font-jetbrains text-cloud-white/90 italic">
                      "But after everything, I still love being Spider-Man. I mean, who wouldn't? So no
                      matter how many hits I take, I always find a way to come back."
                    </blockquote>
                    <p>
                      I didn't give up then. I'm not intending to start now. That's the part of the suit
                      that fits me best — life keeps swinging, and so do I.
                    </p>
                  </>
                )}

                {/* Quick facts */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-jetbrains rounded-full">
                    {isTr ? '🕷️ Mahallenin dost canlısı mühendisi' : isEs ? '🕷️ Ingeniero amigable del barrio' : '🕷️ Friendly neighborhood engineer'}
                  </span>
                  <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-jetbrains rounded-full">
                    {isTr ? '🎤 Eski MUN Genel Sekreteri' : isEs ? '🎤 Ex Secretario General de MUN' : '🎤 Ex-MUN Secretary-General'}
                  </span>
                  <span className="px-3 py-1 bg-cyber-orange/10 border border-cyber-orange/30 text-cyber-orange text-xs font-jetbrains rounded-full">
                    {isTr ? '🍸 Kokteyl bilimcisi' : isEs ? '🍸 Científico de cócteles' : '🍸 Cocktail scientist'}
                  </span>
                  <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 text-green-400 text-xs font-jetbrains rounded-full">
                    {isTr ? '📚 Anlatmadan duramaz' : isEs ? '📚 No puede evitar explicar' : '📚 Teaches everything'}
                  </span>
                </div>
              </div>

              {/* Photo */}
              <div className="lg:col-span-2">
                <figure className="project-card p-3 pb-4">
                  <img
                    src="/assets/images/ugur-graduation.jpg"
                    alt={isTr
                      ? 'Uğur Emin Baynal mezuniyette, cübbesiyle; sırt çantasından bir Spider-Man maskesi bakıyor'
                      : isEs
                      ? 'Uğur Emin Baynal en su graduación, con toga; una máscara de Spider-Man asoma de su mochila'
                      : 'Uğur Emin Baynal at graduation, in cap and gown, with a Spider-Man mask peeking out of his backpack'}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                  <figcaption className="font-jetbrains text-xs text-text-muted mt-3 px-1 text-center">
                    {isTr ? 'Mezuniyet günü, 2026 — maske de geldi.' : isEs ? 'Día de graduación, 2026 — la máscara también vino.' : 'Graduation day, 2026 — the mask came too.'}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-electric-cyan mr-3" />
              {isTr ? 'Eğitim' : isEs ? 'Educación' : 'Education'}
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

          {/* Courses Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <BookMarked className="w-8 h-8 text-electric-cyan mr-3" />
              {isTr ? 'Öne Çıkan Dersler' : isEs ? 'Cursos Destacados' : 'Notable Courses'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="project-card p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-electric-cyan/20 text-electric-cyan px-3 py-1 rounded text-sm font-jetbrains">
                      {course.code}
                    </span>
                  </div>
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-2">
                    {course.name}
                  </h3>
                  <p className="font-inter text-cloud-white text-sm mb-3">{course.school}</p>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Briefcase className="w-8 h-8 text-electric-cyan mr-3" />
              {isTr ? 'Profesyonel Deneyim' : isEs ? 'Experiencia Profesional' : 'Professional Experience'}
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
              {isTr ? 'Beceriler' : isEs ? 'Habilidades' : 'Skills'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-4">
                  {isTr ? 'Teknik Beceriler' : isEs ? 'Habilidades Técnicas' : 'Technical Skills'}
                </h3>
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
                <h3 className="font-jetbrains text-xl font-semibold text-electric-cyan mb-4">
                  {isTr ? 'Kişisel Beceriler' : isEs ? 'Habilidades Personales' : 'Soft Skills'}
                </h3>
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
              {isTr ? 'Diller' : isEs ? 'Idiomas' : 'Languages'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="project-card text-center p-4">
                  <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan mb-1">
                    {language.name}
                  </h3>
                  <p className="font-inter text-sm text-text-secondary">{language.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations Section */}
          <div className="mb-20">
            <h2 className="font-ibm-plex text-3xl font-semibold text-cloud-white mb-8 flex items-center">
              <Users className="w-8 h-8 text-electric-cyan mr-3" />
              {isTr ? 'Topluluklar ve Liderlik' : isEs ? 'Organizaciones y Liderazgo' : 'Organizations & Leadership'}
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
                {isTr ? 'Birlikte Çalışalım mı?' : isEs ? '¿Colaboramos?' : 'Ready to Collaborate?'}
              </h2>
              <p className="font-inter text-text-secondary mb-6">
                {isTr
                  ? 'Yenilikçi mühendislik projeleri ve son teknoloji Ar-Ge çözümleri üzerinde birlikte çalışalım.'
                  : isEs
                  ? 'Trabajemos juntos en proyectos de ingeniería innovadores y soluciones de I+D de vanguardia.'
                  : "Let's work together on innovative engineering projects and cutting-edge R&D solutions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:baynal@uguremin.com" className="btn-primary group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  {isTr ? 'Bana Ulaş' : isEs ? 'Contáctame' : 'Contact Me'}
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

export default About

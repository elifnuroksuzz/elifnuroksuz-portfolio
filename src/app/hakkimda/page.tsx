'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Music, Camera, Mountain, Leaf, Phone, Mail, ExternalLink, Info } from 'lucide-react'
import { useState } from 'react'
import Layout from '@/components/Layout'

interface Experience {
  period: string
  title: string
  company: string
  link?: string
  description: string
  technologies: string[]
}

interface Education {
  year: string
  school: string
  degree: string
  link: string
}

interface Activity {
  year: string
  title: string
  organization: string
  description: string
  detailedDescription: string
  images: string[]
}

interface Reference {
  name: string
  title?: string
  phone?: string
  email?: string
}

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)

  const experience: Experience[] = [
    {
      period: "Haziran 2025 - Eylül 2025",
      title: "Genç Yetenek Programı - Yapay Zeka Uzmanı",
      company: "Quick and Quality",
      description: "Yapay zeka ve makine öğrenmesi alanında kapsamlı eğitim ve proje geliştirme programı. Makine öğrenmesi algoritmaları, doğal dil işleme ve derin öğrenme uygulamaları.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Scrum"]
    },
    {
      period: "Haziran 2025 - Ağustos 2025",
      title: "Proje Yönetimi Stajyeri",
      company: "SCA Social",
      link: "https://scasocial.com/",
      description: "Online proje yönetimi staj programı kapsamında kurumsal proje yönetimi süreçlerini deneyimleme. Proje planlama, takip ve koordinasyon süreçlerinde aktif rol alma.",
      technologies: ["Proje Yönetimi", "Takım Çalışması", "İletişim"]
    },
    {
      period: "Haziran 2025 - Temmuz 2025",
      title: "Bursiyer, Yapay Zeka Uygulamaları Geliştirme Bölümü",
      company: "Yapay Zeka ve Teknoloji Akademisi",
      link: "https://yapayzekaveteknolojiakademisi.com/",
      description: "Yapay zeka ve teknolojileri alanında derinlemesine bilgi edinme ve uygulama geliştirme odaklı burs programı. (Google Türkiye, Girişimcilik Vakfı, T3 Girişim Merkezi iş birliği)",
      technologies: ["AI", "Machine Learning", "Proje Geliştirme"]
    },
    {
      period: "Yaz 2024",
      title: "Yazılım ve Donanım Stajyeri",
      company: "GOTEC-C IT",
      link: "https://gotec-group.com/en/",
      description: "Kotlin ile Android mobil uygulama geliştirme. Network altyapısı ve protokolleri üzerine çalışmalar. Agile metodolojileri ile proje yönetimi deneyimi.",
      technologies: ["Kotlin", "Android", "Network", "Agile", "Donanım-Yazılım"]
    },
    {
      period: "Yaz 2023",
      title: "Yazılım Stajyeri",
      company: "Tersan Tersanesi - Bilgi Teknolojileri",
      link: "https://tersanshipyard.com/tr",
      description: "JavaFX ile cihaz bilgi yönetim sistemi geliştirme. Nesne Yönelimli Programlama (OOP) prensiplerinin uygulanması. Endüstriyel yazılım geliştirme süreçleri deneyimi.",
      technologies: ["JavaFX", "OOP", "Java", "Endüstriyel Yazılım"]
    }
  ]

  const education: Education[] = [
    {
      year: "2020 – 2025",
      school: "Yalova Üniversitesi",
      degree: "Bilgisayar Mühendisliği (%30 İngilizce)",
      link: "https://bilgisayar.yalova.edu.tr/"
    },
    {
      year: "2023 – 2025", 
      school: "Anadolu Üniversitesi",
      degree: "Dış Ticaret (Önlisans)",
      link: "https://www.anadolu.edu.tr/acikogretim/turkiye-programlari/acikogretim-fakultesi-onlisans-programlari-2-yillik/dis-ticaret"
    },
    {
      year: "2016 – 2020",
      school: "Dursun Yalım Fen Lisesi", 
      degree: "Mezuniyet Ortalaması: 93.26",
      link: "https://dursunyalimfenlisesi.meb.k12.tr/"
    }
  ]

  const activities: Activity[] = [
    {
      year: "2024-2025",
      title: "Tarımda Genç Girişimci Kuluçka Programı",
      organization: "T.C. Gençlik ve Spor Bakanlığı & Sürdürülebilir Ekolojik Eğitim Danışmanlık",
      description: "Ekolojik kavramlar, sürdürülebilir tarım yöntemleri, agro-ekoloji, tarımda teknoloji ve girişimcilik odaklı uygulamalı eğitim programı.",
      detailedDescription: "Gençlik Hizmetleri Genel Müdürlüğü'nün düzenlediği Ekolojik ve Sürdürülebilir Tarım Kampı'na katılım sağlandı. Kamp, sürdürülebilir tarım, dijitalleşme ve tarımda verimliliği artıran çözümler üzerine eğitimler sundu. Ayrıca, \"Çiftçiye Özel Otomasyon Projesi\" (ÇÖOP) geliştirildi ve derece elde edildi.",
      images: ["/Kamp/kamp1.jpg", "/Kamp/kamp2.jpg", "/Kamp/kamp3.jpg", "/Kamp/kamp4.jpg"]
    },
    {
      year: "Şubat 2025",
      title: "Yalova İl Temsilcisi, 35. Gençlik Konseyi",
      organization: "Toplum Gönüllüleri Vakfı (TOG)",
      description: "Gençlik konularında il düzeyinde temsil ve koordinasyon görevleri.",
      detailedDescription: "İstanbul'daki 35. Gençlik Konseyi'ne Yalova il temsilcisi olarak katıldım. Etkinlikte toplumsal sorumluluk, gençlik hakları ve sivil toplum konuları tartışıldı. Dijital okuryazarlık ve dezenformasyonla mücadele projemi sundum. Ayrıca, TOG'un geleceği ve yerel örgütlenmelerin güçlendirilmesi üzerine çözümler geliştirdik. Konsey, toplumsal fayda sağlama konusunda ilham verdi.",
      images: ["/Gonulluluk/tog1.jpg", "/Gonulluluk/tog2.jpg", "/Gonulluluk/tog3.jpg", "/Gonulluluk/tog4.jpg"]
    }
  ]

  const hobbies = [
    { name: "Dart Oynamak", icon: Target },
    { name: "Bağlama Çalmak", icon: Music },
    { name: "Belgesel İzlemek", icon: Camera },
    { name: "Doğa Yürüyüşü Yapmak", icon: Mountain }
  ]

  const references: Reference[] = [
    {
      name: "Dr. İlker KARBUZ",
      title: "Kollektif İş Sağlığı ve Güvenliği",
      phone: "+90 532 284 3653"
    },
    {
      name: "Adem HİÇDURMAZ",
      title: "Tersan Shipyard IT Manager",
      phone: "+90 532 134 2198"
    },
    {
      name: "Dr. Öğr. Üyesi Burcu DEMİRELLİ OKKALIOĞLU",
      title: "Yalova Üniversitesi Bilgisayar Mühendisliği Bölümü Dr. Öğr. Üyesi",
      email: "bdemirelli@gmail.com"
    },
    {
      name: "Yusuf Sezgin KARABUĞA",
      title: "Quantum İnovasyon Bilişim",
      phone: "+90 532 643 0024"
    }
  ]

  return (
    <Layout>
      {/* Video Background - No Opacity */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl shadow-emerald-500/30">
                  <Image
                    src="/foto.jpg"
                    alt="Elif Nur Öksüz"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 font-mono">
                  Elif Nur Öksüz
                </h1>
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-6 py-2 rounded-lg font-mono font-medium">
                  Bilgisayar Mühendisi
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300 font-mono"
          >
            <div className="text-gray-300 text-lg leading-relaxed space-y-2">
              <div>
                <span className="text-emerald-400 font-bold">skills</span>
                <span className="text-gray-300"> = </span>
                <span className="text-gray-300">{'{'}</span>
              </div>
              
              {/* Programming Languages */}
              <div className="ml-5">
                <span className="text-yellow-400">"programming_languages"</span>
                <span className="text-gray-300">: </span>
                <span className="text-gray-300">{'{'}</span>
              </div>
              <div className="ml-10">
                <span className="text-blue-400">"Python"</span>
                <span className="text-gray-300">: </span>
                <span className="text-pink-400">"AI & Machine Learning"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-blue-400">"Kotlin"</span>
                <span className="text-gray-300">: </span>
                <span className="text-pink-400">"Android Development"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-blue-400">"Java"</span>
                <span className="text-gray-300">: </span>
                <span className="text-pink-400">"OOP and GUI Development with JavaFX"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-blue-400">"SQL"</span>
                <span className="text-gray-300">: </span>
                <span className="text-pink-400">"Database Management"</span>
              </div>
              <div className="ml-5">
                <span className="text-gray-300">{'}'}</span>
                <span className="text-gray-300">,</span>
              </div>
              
              {/* Technologies & Tools */}
              <div className="ml-5">
                <span className="text-yellow-400">"technologies_tools"</span>
                <span className="text-gray-300">: </span>
                <span className="text-gray-300">[</span>
              </div>
              <div className="ml-10">
                <span className="text-pink-400">"Android Development"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Artificial Intelligence (AI)"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Machine Learning (ML)"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-pink-400">"Google Text-to-Speech API"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Network Technologies"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Microsoft Office"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-pink-400">"MongoDB"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Git"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Docker"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"JavaFX (GUI Development)"</span>
              </div>
              <div className="ml-5">
                <span className="text-gray-300">],</span>
              </div>
              
              {/* Soft Skills */}
              <div className="ml-5">
                <span className="text-yellow-400">"soft_skills"</span>
                <span className="text-gray-300">: </span>
                <span className="text-gray-300">[</span>
              </div>
              <div className="ml-10">
                <span className="text-pink-400">"Problem Solving"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Teamwork"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Adaptability"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Communication"</span>
                <span className="text-gray-300">,</span>
              </div>
              <div className="ml-10">
                <span className="text-pink-400">"Leadership"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Social Responsibility"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Entrepreneurship"</span>
                <span className="text-gray-300">, </span>
                <span className="text-pink-400">"Foreign Trade Fundamentals"</span>
              </div>
              <div className="ml-5">
                <span className="text-gray-300">]</span>
              </div>
              
              <div>
                <span className="text-gray-300">{'}'}</span>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8 font-mono">
              EĞİTİM
            </h2>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-6 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <div className="text-emerald-400 font-bold text-sm mb-2 font-mono">
                    {item.year}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-gray-200 text-xl font-bold mb-2 flex items-center gap-2">
                        {item.school}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </h3>
                      <p className="text-gray-400">
                        {item.degree}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8 font-mono">
              DENEYİM & PROGRAMLAR
            </h2>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-6 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <div className="text-emerald-400 font-bold text-sm mb-2 font-mono">
                    {item.period}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-gray-200 text-xl font-bold mb-2 flex items-center gap-2">
                        {item.title}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </h3>
                      <div className="text-emerald-300 font-medium mb-3">
                        {item.company}
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-mono border border-emerald-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8 font-mono">
              GÖNÜLLÜLÜK & AKTİVİTELER
            </h2>
            
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-6 hover:bg-emerald-500/20 transition-all duration-300 relative"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-emerald-400 font-bold text-sm mb-2 font-mono">
                        {activity.year}
                      </div>
                      <h3 className="text-gray-200 text-xl font-bold mb-2 flex items-center gap-2">
                        {activity.title}
                        <div
                          className="relative"
                          onMouseEnter={() => setActiveTooltip(index)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                            <Info className="w-5 h-5" />
                          </button>
                          
                          {/* Tooltip */}
                          {activeTooltip === index && (
                            <motion.div
                              initial={{ opacity: 0, y: index === 1 ? -10 : 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: index === 1 ? -10 : 10, scale: 0.95 }}
                              className={`absolute ${index === 1 ? 'bottom-full mb-2' : 'top-full mt-2'} left-0 w-96 bg-slate-900/98 backdrop-blur-md border border-emerald-500/50 rounded-lg p-4 shadow-2xl`}
                              style={{ zIndex: 9999 }}
                            >
                              <div className="space-y-4">
                                {/* Images */}
                                <div>
                                  <h4 className="text-emerald-300 font-bold text-sm mb-2">Fotoğraflar</h4>
                                  <div className="grid grid-cols-4 gap-1">
                                    {activity.images.map((image, imgIndex) => (
                                      <div key={imgIndex} className="aspect-square rounded overflow-hidden border border-emerald-500/30">
                                        <Image
                                          src={image}
                                          alt={`${activity.title} - Fotoğraf ${imgIndex + 1}`}
                                          width={80}
                                          height={80}
                                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Detailed Description */}
                                <div>
                                  <h4 className="text-emerald-300 font-bold text-sm mb-2">Detaylı Açıklama</h4>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                    {activity.detailedDescription}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </h3>
                      <div className="text-emerald-300 font-medium mb-3">
                        {activity.organization}
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8 font-mono">
              HOBİ VE İLGİ ALANLARI
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group"
                >
                  <hobby.icon className="w-6 h-6 text-emerald-300 group-hover:text-emerald-200 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {hobby.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* References Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8 font-mono">
              REFERANSLAR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {references.map((reference, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <h3 className="text-white font-bold text-lg mb-2">{reference.name}</h3>
                  {reference.title && (
                    <p className="text-emerald-300 text-sm mb-3">{reference.title}</p>
                  )}
                  <div className="space-y-2">
                    {reference.phone && (
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Phone className="w-4 h-4" />
                        <span>{reference.phone}</span>
                      </div>
                    )}
                    {reference.email && (
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Mail className="w-4 h-4" />
                        <span>{reference.email}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
'use client'
import { motion } from 'framer-motion'
import { Brain, Database, Smartphone, BarChart, Building2, GraduationCap, X, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '@/components/Layout'

// Proje tipini tanımlayın
interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: any; // Lucide icon component
  images: string[];
  githubLink: string;
}

// Deneyim tipini tanımlayın
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const projects: Project[] = [
    {
      title: "Kişiselleştirilmiş Sesli Kitap Asistanı",
      category: "TÜBİTAK 2209-A",
      description: "Görme engelli bireyler başta olmak üzere geniş bir kitle için Google Text-to-Speech API ve yapay zeka kullanarak sesli kitap platformu geliştirme projesi.",
      technologies: ["Python", "Streamlit", "MongoDB", "Pandas", "Plotly", "BeautifulSoup", "Google Cloud Text-to-Speech API", "Pydub", "pygame", "Bcrypt", "dotenv"],
      icon: Brain,
      images: [
        "/kitavox_resim/arama2.jpg",
        "/kitavox_resim/ayarlar.png",
        "/kitavox_resim/dinleme_gecmisi.png",
        "/kitavox_resim/favoriler.png",
        "/kitavox_resim/geribildirim.png",
        "/kitavox_resim/oneriler.png",
        "/kitavox_resim/ozel_dokuman.png",
        "/kitavox_resim/ozet.png",
        "/kitavox_resim/profil.png",
        "/kitavox_resim/soru.png",
        "/kitavox_resim/tur.png"
      ],
      githubLink: ""
    },
    {
      title: "BiletSatisSinema",
      category: "Veritabanı Projesi",
      description: "Kullanıcıların sinema biletlerini çevrimiçi olarak satın alabileceği bir veritabanı uygulaması. Sinema salonları, filmler, seanslar ve bilet satış işlemlerini yönetmek için SQL kullanılarak tasarlanmıştır.",
      technologies: ["Microsoft SQL Server", "T-SQL", "Draw.io (diagrams.net)"],
      icon: Database,
      images: ["/biletsatıssinema_er.jpg"],
      githubLink: "https://github.com/elifnuroksuz/BiletSatisSinema"
    },
    {
      title: "Tracker App",
      category: "Android Uygulaması",
      description: "Kullanıcıların finansal işlemlerini takip etmelerini sağlayan bir Android uygulamasıdır. Kullanıcılar, işlem ekleyebilir, düzenleyebilir ve silebilir. Uygulama, Room veritabanı ile verileri kalıcı hale getirirken, Coroutines ve ViewModel kullanarak kullanıcı arayüzünü akıcı bir şekilde yönetir.",
      technologies: ["Kotlin", "Android Room", "Coroutines", "ViewModel", "RecyclerView", "LiveData", "Data Binding", "Snackbar"],
      icon: Smartphone,
      images: ["/tracker1.jpg", "/tracker2.jpg", "/tracker3.jpg"],
      githubLink: "https://github.com/elifnuroksuz/Tracker"
    },
    {
      title: "IMDB Film Yorumları Duygu Analizi",
      category: "NLP & Machine Learning",
      description: "50.000 IMDB yorumuyla duygu analizi (pozitif/negatif) yapan NLP projesi. Metin temizleme, tokenizasyon, lemmatizasyon ve TF-IDF vektörizasyonu uygulandı. Naive Bayes, Lojistik Regresyon, Random Forest modelleri eğitildi; 10-kat çapraz doğrulama ile değerlendirildi.",
      technologies: ["Python", "pandas", "numpy", "NLTK", "spaCy", "scikit-learn", "matplotlib", "seaborn"],
      icon: BarChart,
      images: ["/kod.jpg"],
      githubLink: "https://github.com/elifnuroksuz/nlp_project"
    }
  ]

  const openModal = (project: Project, imageIndex: number = 0): void => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeModal = (): void => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = (): void => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = (): void => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const experiences: Experience[] = [
    {
      title: "Genç Yetenek Programı - Yapay Zeka Uzmanı",
      company: "Quick and Quality",
      period: "Haziran 2025 - Eylül 2025",
      description: "Yapay zeka ve makine öğrenmesi alanında kapsamlı eğitim ve proje geliştirme programı. Makine öğrenmesi algoritmaları, doğal dil işleme ve derin öğrenme uygulamaları. Scrum metodolojisi ile çevik proje yönetimi ve takım çalışması deneyimi.",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Scrum"]
    },
    {
      title: "Proje Yönetimi Stajyeri",
      company: "SCA Social",
      period: "Temmuz 2025 - Ağustos 2025",
      description: "Online proje yönetimi staj programı kapsamında kurumsal proje yönetimi süreçlerini deneyimleme. Proje planlama, takip ve koordinasyon süreçlerinde aktif rol alma. Kurum kültürü ve kurumsal ortam deneyimi kazanma.",
      skills: ["Proje Planlama", "Takım Koordinasyonu", "İletişim", "Kurumsal Yönetim"]
    },
    {
      title: "Bursiyer, Yapay Zeka Uygulamaları Geliştirme Bölümü",
      company: "Yapay Zeka ve Teknoloji Akademisi",
      period: "Haziran 2025 - Temmuz 2025",
      description: "Google Türkiye, Girişimcilik Vakfı, T3 Girişim Merkezi iş birliği ile yapay zeka ve teknolojileri alanında derinlemesine bilgi edinme ve uygulama geliştirme odaklı burs programı.",
      skills: ["Yapay Zeka", "Teknoloji Geliştirme", "Araştırma", "İnovasyon"]
    },
    {
      title: "Yazılım ve Donanım Stajyeri",
      company: "GOTEC-C IT",
      period: "Yaz 2024",
      description: "Kotlin ile Android mobil uygulama geliştirme. Network altyapısı ve protokolleri üzerine çalışmalar. Agile metodolojileri ile proje yönetimi deneyimi. Donanım-yazılım entegrasyonu projeleri.",
      skills: ["Kotlin", "Android", "Network", "Agile", "Donanım Entegrasyonu"]
    },
    {
      title: "Yazılım Stajyeri",
      company: "Tersan Tersanesi, Bilgi Teknolojileri",
      period: "Yaz 2023",
      description: "JavaFX ile cihaz bilgi yönetim sistemi geliştirme. Nesne Yönelimli Programlama (OOP) prensiplerinin uygulanması. Endüstriyel yazılım geliştirme süreçleri deneyimi.",
      skills: ["JavaFX", "OOP", "Endüstriyel Yazılım", "Sistem Yönetimi"]
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
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 font-mono mb-4">
                PROJELER
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Yapay zeka, mobil uygulama geliştirme ve veri analizi alanlarında gerçekleştirdiğim projeler.
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300 group"
                >
                  {/* Project Header with Image */}
                  <div className="flex flex-col gap-4 mb-6">
                    {/* Main Project Image */}
                    <div className="flex justify-center">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur-lg opacity-30 animate-pulse"></div>
    <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-500/20 cursor-pointer hover:scale-105 transition-transform"
         onClick={() => openModal(project, 0)}>
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        className="object-cover aspect-square"
      />
    </div>
  </div>
</div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-emerald-400 font-medium text-sm mb-3">{project.category}</p>
                        <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3 font-mono">Projede Kullanılan Teknolojiler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.githubLink || "#"}
                      target={project.githubLink ? "_blank" : "_self"}
                      rel={project.githubLink ? "noopener noreferrer" : ""}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-emerald-500/30 hover:border-emerald-400 rounded-lg text-emerald-300 hover:text-emerald-200 transition-all duration-300 text-sm font-medium ${!project.githubLink ? 'cursor-default opacity-70' : ''}`}
                      onClick={!project.githubLink ? (e) => e.preventDefault() : undefined}
                    >
                      <Github className="w-4 h-4" />
                      GitHub'da Görüntüle
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Image Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
              <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>
                
                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedProject.images.length - 1}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative max-w-full max-h-full">
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  )
}
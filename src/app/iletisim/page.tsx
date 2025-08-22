'use client'
import { motion } from 'framer-motion'
import { Mail, Download, ExternalLink, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import Layout from '@/components/Layout'

export default function Contact() {
  // Google Drive dosyasını direkt indirmek için URL'i düzenle
  const handleCVDownload = () => {
    // Google Drive share linkini direct download linkine çevir
    const fileId = '1uqJ1MYf7V9dc-xiMcbopajbU3-SZLI57'
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
    
    // Yeni sekmede açmak yerine direkt indirme
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'ElifNur_Oksuz_CV.pdf' // İndirilen dosyanın adı
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmailSend = () => {
    window.location.href = 'mailto:elifnuroksuz4@gmail.com'
  }

  const handleLinkedInConnect = () => {
    window.open('https://linkedin.com/in/elifnuroksuz', '_blank')
  }

  return (
    <Layout>
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
        <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-4 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 font-mono mb-4">
                İLETİŞİM
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Projeler, iş birliği fırsatları veya sorularınız için benimle iletişime geçebilirsiniz! 
                Teknoloji dünyasında birlikte değer yaratmak için buradayım.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Eğitim geçmişim, projelerim ve deneyimlerimle ilgili detaylı bilgileri CV'mde bulabilirsiniz.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-4 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <motion.button
              onClick={handleCVDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/30"
            >
              <Download className="w-6 h-6" />
              CV'mi İndir
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-4 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 font-mono text-center">
              İLETİŞİM KANALLARI
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.a
                href="mailto:elifnuroksuz4@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group cursor-pointer"
              >
                <Mail className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
                <div>
                  <div className="text-white font-semibold">E-mail</div>
                  <div className="text-emerald-300 text-sm font-medium">elifnuroksuz4@gmail.com</div>
                  <div className="text-gray-400 text-xs">Her zaman ulaşabilirsiniz</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 ml-auto" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/elifnuroksuz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group cursor-pointer"
              >
                <Linkedin className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-emerald-300 text-sm font-medium">/in/elifnuroksuz</div>
                  <div className="text-gray-400 text-xs">Profesyonel ağım</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 ml-auto" />
              </motion.a>

              <motion.a
                href="https://github.com/elifnuroksuz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group cursor-pointer"
              >
                <Github className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
                <div>
                  <div className="text-white font-semibold">GitHub</div>
                  <div className="text-emerald-300 text-sm font-medium">/elifnuroksuz</div>
                  <div className="text-gray-400 text-xs">Kod projelerim</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 ml-auto" />
              </motion.a>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Telefon</div>
                  <div className="text-emerald-300 text-sm font-medium">+90 535 290 34 48</div>
                  <div className="text-gray-400 text-xs">Acil durumlar için</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Konum</div>
                  <div className="text-emerald-300 text-sm font-medium">Yalova Merkez, Türkiye</div>
                </div>
              </motion.div>

              <motion.a
                href="https://medium.com/@elifnuroksuz4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border-2 border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group"
              >
                <div className="w-6 h-6 text-emerald-400 font-bold text-xl group-hover:text-emerald-300">M</div>
                <div>
                  <div className="text-white font-medium">Medium</div>
                  <div className="text-gray-400 text-xs">Detaylı Bilgiler İçin</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 ml-auto" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-slate-800/90 backdrop-blur-md border-4 border-emerald-500 rounded-xl p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 font-mono text-center">
              BİRLİKTE ÇALIŞMAYA HAZIR MISINIZ?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
              Yapay zeka projeleri, mobil uygulama geliştirme, proje yönetimi ve teknoloji danışmanlığı konularında iş birliği yapmak için her zaman açığım. Yenilikçi projeler geliştirmek ve teknoloji dünyasında değer yaratmak için birlikte çalışalım!
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <motion.button
                onClick={handleEmailSend}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30"
              >
                <Mail className="w-5 h-5" />
                E-mail Gönder
              </motion.button>

              <motion.button
                onClick={handleLinkedInConnect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn'de Bağlan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
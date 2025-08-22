'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout showVideo={true}>
      <div className="flex-grow flex items-center justify-start min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profil Fotoğrafı */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl">
                <Image
                  src="/profil.jpg"
                  alt="Elif Nur Öksüz"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Ana Başlık */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Merhaba! Ben{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Elif Nur Öksüz
            </span>
          </motion.h1>
          
          {/* Alt Başlık */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Teknoloji dünyasında öğrenmeyi ve keşfetmeyi seven biri olarak, yapay zeka, mobil uygulama geliştirme ve proje yönetimi alanlarında kendimi geliştirmeye devam ediyorum. Her yeni projede büyümeyi ve değer yaratmayı hedefliyorum.
          </motion.p>
          
        </div>
      </div>
    </Layout>
  )
}

'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  showVideo?: boolean
}

export default function Layout({ children, showVideo = false }: LayoutProps) {
  const pathname = usePathname()
  
  const navigationItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımda', href: '/hakkimda' },
    { name: 'Projelerim', href: '/projelerim' },
    { name: 'İletişim', href: '/iletisim' }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background Video - only on homepage */}
      {showVideo && (
        <div className="fixed inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Static Background for other pages */}
      {!showVideo && (
        <div className="fixed inset-0 w-full h-full z-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
      )}

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex justify-center pt-6 px-4"
      >
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-2 border border-emerald-500/30">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                pathname === item.href
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/20'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 pt-4">
        {children}
      </div>
    </div>
  )
}
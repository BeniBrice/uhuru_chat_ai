'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, MessageSquare, FileText, Image, Search, PenTool,
  Code, Music, Megaphone, Languages,
  Shield, Menu, X, Sparkles, ChevronDown, LogIn, Settings
} from 'lucide-react'

const features = [
  { name: 'AI Chatbot', href: '/chatbot', icon: MessageSquare, color: 'text-teal-400' },
  { name: 'Text Generator', href: '/text-generator', icon: FileText, color: 'text-cyan-400' },
  { name: 'Image Generator', href: '/image-generator', icon: Image, color: 'text-emerald-400' },
  { name: 'Content Analyzer', href: '/content-analyzer', icon: Search, color: 'text-green-400' },
  { name: 'Content Creator', href: '/content-creator', icon: PenTool, color: 'text-sky-400' },
  { name: 'Code Generator', href: '/code-generator', icon: Code, color: 'text-blue-400' },
  { name: 'Music Creator', href: '/music-creator', icon: Music, color: 'text-indigo-400' },
  { name: 'Ads Creator', href: '/ads-creator', icon: Megaphone, color: 'text-slate-400' },
  { name: 'NLP Tool', href: '/nlp-tool', icon: Languages, color: 'text-teal-400' },
  { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, color: 'text-teal-400' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [maintenanceModalOpen, setMaintenanceModalOpen] = useState(false)
  const pathname = usePathname()

  const showMaintenanceMessage = () => {
    setMaintenanceModalOpen(true)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#133236] to-teal-600 group-hover:scale-110 transition-transform">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Uhuru.ai</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-teal-400' : 'text-gray-300 hover:text-white'}`}
              >
                Home
              </Link>
              
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] glass rounded-xl p-4 shadow-2xl"
                      onMouseLeave={() => setFeaturesOpen(false)}
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {features?.map((feature) => {
                          const Icon = feature?.icon
                          return (
                            <Link
                              key={feature?.href ?? ''}
                              href={feature?.href ?? '/'}
                              onClick={() => setFeaturesOpen(false)}
                              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${pathname === feature?.href ? 'bg-white/10' : ''}`}
                            >
                              {Icon && <Icon className={`w-5 h-5 ${feature?.color ?? ''}`} />}
                              <span className="text-sm font-medium text-gray-200">{feature?.name ?? ''}</span>
                            </Link>
                          )
                        }) ?? []}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="#pricing" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              
              <button 
                onClick={showMaintenanceMessage}
                className={`text-sm font-medium transition-colors ${pathname === '/settings' ? 'text-teal-400' : 'text-gray-300 hover:text-white'}`}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={showMaintenanceMessage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors border border-white/10"
              >
                <LogIn className="w-4 h-4" />
                Log In
              </button>
              <button
                onClick={showMaintenanceMessage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-4 h-4" />
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  {features?.map((feature) => {
                    const Icon = feature?.icon
                    return (
                      <Link
                        key={feature?.href ?? ''}
                        href={feature?.href ?? '/'}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${pathname === feature?.href ? 'bg-white/10' : ''}`}
                      >
                        {Icon && <Icon className={`w-5 h-5 ${feature?.color ?? ''}`} />}
                        <span className="text-sm font-medium text-gray-200">{feature?.name ?? ''}</span>
                      </Link>
                    )
                  }) ?? []}
                </div>
                
                {/* Settings Link (Mobile) */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    showMaintenanceMessage()
                  }}
                  className="flex items-center gap-3 p-3 mt-2 rounded-lg hover:bg-white/10 transition-colors w-full text-left"
                >
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-200">Settings</span>
                </button>
                
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      showMaintenanceMessage()
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white/10 text-white font-medium text-sm border border-white/10"
                  >
                    <LogIn className="w-4 h-4" />
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      showMaintenanceMessage()
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Maintenance Modal */}
      <AnimatePresence>
        {maintenanceModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setMaintenanceModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-teal-500/30 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Maintenance Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#133236] to-teal-600 animate-pulse">
                  <svg 
                    className="w-12 h-12 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Header */}
              <h3 className="text-2xl font-bold text-white mb-2">
                Under Maintenance
              </h3>
              
              {/* Company Name */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold">UhuruChat Inc.</span>
              </div>

              {/* Message */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're currently working hard to bring you an amazing AI experience. 
                This platform is under active development and will be available soon.
              </p>

              {/* Update Notice */}
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">
                  🚀 We will update soon!
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Stay tuned for exciting new features
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMaintenanceModalOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { Music, Sparkles, Brain } from 'lucide-react'
import { musicStyles } from '@/lib/demo-data'

export default function MusicCreatorPage() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [prompt, setPrompt] = useState('')
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

  const handleGenerate = () => {
    setShowMaintenanceModal(true)
  }

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navigation />
      
      {/* Maintenance Modal */}
      <AnimatePresence>
        {showMaintenanceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowMaintenanceModal(false)}
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
                We're currently working hard to bring you an amazing AI music creation experience. 
                This feature is under active development and will be available soon.
              </p>

              {/* Update Notice */}
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">
                  🚀 We will update soon!
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Stay tuned for AI-powered music generation
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowMaintenanceModal(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-5xl mx-auto px-4">
        <PageHeader
          title="Music Creator"
          description="Compose original music tracks with AI assistance"
          icon={Music}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Style Selection */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
              <label className="block text-sm font-medium text-gray-300 mb-4">Choose Music Style</label>
              <div className="grid grid-cols-3 gap-3">
                {musicStyles?.map((style) => (
                  <button
                    key={style?.id ?? ''}
                    onClick={() => setSelectedStyle(style?.id ?? null)}
                    className={`p-4 rounded-xl text-center transition-all ${selectedStyle === style?.id ? 'bg-teal-600/30 border-2 border-teal-500' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                  >
                    <div className="font-medium text-white text-sm">{style?.name ?? ''}</div>
                    <div className="text-xs text-gray-400 mt-1">{style?.bpm ?? 0} BPM</div>
                  </button>
                )) ?? []}
              </div>
            </div>
            
            {/* Description */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
              <label className="block text-sm font-medium text-gray-300 mb-2">Describe your track (optional)</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e?.target?.value ?? '')}
                placeholder="E.g., Upbeat and energetic with a catchy melody, perfect for a summer day..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
              />
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Duration</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none">
                    <option value="30">30 seconds</option>
                    <option value="60">1 minute</option>
                    <option value="120">2 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mood</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none">
                    <option value="happy">Happy</option>
                    <option value="chill">Chill</option>
                    <option value="energetic">Energetic</option>
                    <option value="melancholic">Melancholic</option>
                  </select>
                </div>
              </div>
              
              <button
                onClick={handleGenerate}
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Generate Track
              </button>
            </div>
          </div>
          
          {/* Player Section */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
            {/* Visualization */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-950/50 mb-6">
              <Image
                src="https://thumbs.dreamstime.com/b/abstract-neon-sound-waves-representing-music-visually-striking-design-vibrant-visualizing-rhythm-energy-flowing-417422760.jpg"
                alt="Sound wave visualization"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Music className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500">Select a style and generate</p>
                </div>
              </div>
            </div>
            
            {/* Info */}
            <div className="text-center text-gray-400 text-sm">
              <p>Choose a music style and click "Generate Track" to create your AI-powered music</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

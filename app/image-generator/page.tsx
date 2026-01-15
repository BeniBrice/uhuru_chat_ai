'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { Image as ImageIcon, Sparkles, Brain } from 'lucide-react'

const styles = ['Realistic', 'Artistic', 'Anime', 'Abstract', '3D Render', 'Oil Painting']

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Realistic')
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
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#133236] to-teal-600 animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Under Maintenance</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold">UhuruChat Inc.</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're currently working hard to bring you an amazing AI image generation experience. 
                This feature is under active development and will be available soon.
              </p>
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">🚀 We will update soon!</p>
                <p className="text-gray-500 text-xs mt-1">Stay tuned for AI-powered image generation</p>
              </div>
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
          title="Image Generator"
          description="Transform your imagination into stunning visuals with AI"
          icon={ImageIcon}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="space-y-6">
          {/* Input Section */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
            <label className="block text-sm font-medium text-gray-300 mb-2">Describe your image</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e?.target?.value ?? '')}
              placeholder="A majestic dragon soaring through a sunset sky, detailed scales, fantasy art style..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
            />
            
            {/* Style Selection */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
              <div className="flex flex-wrap gap-2">
                {styles?.map((style) => (
                  <button
                    key={style ?? ''}
                    onClick={() => setSelectedStyle(style ?? '')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedStyle === style ? 'bg-teal-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {style ?? ''}
                  </button>
                )) ?? []}
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Generate Images
              </button>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Size:</span>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white focus:outline-none">
                  <option value="1024x1024">1024×1024</option>
                  <option value="1024x768">1024×768</option>
                  <option value="768x1024">768×1024</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Results Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-gray-800/50 border border-white/10 flex items-center justify-center">
                <div className="text-center p-4">
                  <ImageIcon className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Generated image {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
